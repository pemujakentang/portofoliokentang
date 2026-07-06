// This file lives at /api/now-playing.js and is deployed by Vercel as a
// serverless function — it runs in Node.js on Vercel's servers, NOT in
// the browser. process.env here is never bundled into client JS, so
// SPOTIFY_CLIENT_SECRET and SPOTIFY_REFRESH_TOKEN stay private as long
// as these env vars are NOT prefixed with VITE_.

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1'

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env

// Small in-memory cache so a burst of visitors hitting the same warm
// serverless instance doesn't each trigger a fresh call to Spotify.
// This does NOT persist across cold starts or different regions — it's
// a courtesy throttle, not a strict rate limiter.
let cache = { data: null, expiresAt: 0 }

async function getAccessToken() {
  const basicAuth = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to refresh Spotify token (${response.status})`)
  }

  const data = await response.json()
  return data.access_token
}

function mapTrack(track, extra = {}) {
  if (!track) return null
  return {
    title: track.name,
    artist: track.artists?.map((a) => a.name).join(', ') ?? 'Unknown artist',
    album: track.album?.name ?? '',
    albumArt: track.album?.images?.[0]?.url ?? null,
    songUrl: track.external_urls?.spotify ?? null,
    ...extra,
  }
}

export default async function handler(_req, res) {
  if (cache.data && Date.now() < cache.expiresAt) {
    res.setHeader('Cache-Control', 'no-store')
    return res.status(200).json(cache.data)
  }

  try {
    const accessToken = await getAccessToken()

    const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    // 200 + is_playing:true means something is actively playing.
    // 204 (no body) or is_playing:false means nothing is playing right now.
    if (nowPlayingRes.status === 200) {
      const nowPlaying = await nowPlayingRes.json()
      if (nowPlaying?.is_playing && nowPlaying.item) {
        const payload = { isPlaying: true, ...mapTrack(nowPlaying.item) }
        cache = { data: payload, expiresAt: Date.now() + 15_000 }
        res.setHeader('Cache-Control', 'no-store')
        return res.status(200).json(payload)
      }
    }

    // Fall back to the most recently played track.
    // Requires the user-read-recently-played scope on the refresh token.
    const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    if (!recentRes.ok) {
      throw new Error(`Failed to fetch recently played (${recentRes.status})`)
    }

    const recent = await recentRes.json()
    const lastItem = recent.items?.[0]

    const payload = lastItem
      ? { isPlaying: false, ...mapTrack(lastItem.track, { playedAt: lastItem.played_at }) }
      : { isPlaying: false, title: null }

    cache = { data: payload, expiresAt: Date.now() + 15_000 }
    res.setHeader('Cache-Control', 'no-store')
    return res.status(200).json(payload)
  } catch (error) {
    console.error('Spotify now-playing error:', error)
    res.setHeader('Cache-Control', 'no-store')
    return res.status(500).json({ error: 'Unable to fetch Spotify status' })
  }
}
