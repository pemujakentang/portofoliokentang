import { useEffect, useState } from 'react'
import { Music4 } from 'lucide-react'

const POLL_INTERVAL = 30_000 // ms — how often to re-check Spotify

export function NowPlaying() {
  const [track, setTrack] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch('/api/now-playing')
        console.log('Now playing response:', res)
        if (!res.ok) throw new Error('Request failed')
        const data = await res.json()
        if (!cancelled) {
          setTrack(data)
          setStatus('ready')
        }
      } catch {
        if (!cancelled) setStatus('error')
      }
    }

    load()
    const id = setInterval(load, POLL_INTERVAL)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  if (status === 'loading') {
    return (
      <div className="now-playing-card now-playing-loading" aria-hidden="true">
        <div className="now-playing-art now-playing-art-placeholder" />
        <div className="now-playing-meta">
          <span className="now-playing-skeleton-line" style={{ width: '70%' }} />
          <span className="now-playing-skeleton-line" style={{ width: '45%' }} />
        </div>
      </div>
    )
  }

  if (status === 'error' || !track?.title) {
    return (
      <div className="now-playing-card">
        <div className="now-playing-art now-playing-art-placeholder">
          <Music4 size={20} />
        </div>
        <div className="now-playing-meta">
          <span className="now-playing-label">Spotify</span>
          <p className="now-playing-title">Nothing to report right now.</p>
        </div>
      </div>
    )
  }

  const CardTag = track.songUrl ? 'a' : 'div'
  const linkProps = track.songUrl
    ? { href: track.songUrl, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <CardTag className="now-playing-card" {...linkProps} data-reveal>
      <div className="now-playing-art">
        {track.albumArt ? (
          <img src={track.albumArt} alt="" />
        ) : (
          <Music4 size={20} />
        )}
      </div>
      <div className="now-playing-meta">
        <span className="now-playing-label">
          {track.isPlaying ? (
            <>
              <span className="now-playing-bars" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              Now playing
            </>
          ) : (
            'Last played'
          )}
        </span>
        <p className="now-playing-title">{track.title}</p>
        <p className="now-playing-artist">{track.artist}</p>
      </div>
    </CardTag>
  )
}
