import { useState } from "react";
import wazowski from "../assets/images/bonbon wazowski.webp";

const alphabet = import.meta.glob("../assets/aphlabte/*.webp", {
  eager: true,
  import: "default",
});

const alphabetImages = {};

Object.entries(alphabet).forEach(([path, image]) => {
  const letter = path.split("/").pop().replace(".webp", "").toUpperCase();

  alphabetImages[letter] = image;
});

const WORD = "BONIFASIUSMARTIN";

const blockedAreas = [
  { x: 10, y: 18, radius: 12 }, // ship()
  { x: 83, y: 52, radius: 12 }, // idea
  { x: 17, y: 86, radius: 10 }, // 01
  { x: 12, y: 78, radius: 12 }, // Mike
  { x: 90, y: 20, radius: 18 }, // scribble
  { x: 8, y: 84, radius: 18 }, // scribble
];

function createRandom(seed = 12345) {
  let state = seed;

  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function generatePositions(count) {
  const random = createRandom(20250706);

  const positions = [];

  const MIN_DISTANCE = 18; // percentage units

  for (let i = 0; i < count; i++) {
    let placed = false;

    for (let attempt = 0; attempt < 500 && !placed; attempt++) {
      const x = 5 + random() * 90;
      const y = 15 + ((random() + random() + random()) / 3) * 70;

      const valid =
        positions.every((p) => {
          const dx = p.x - x;
          const dy = p.y - y;
          return Math.hypot(dx, dy) > MIN_DISTANCE;
        }) &&
        blockedAreas.every((b) => {
          const dx = b.x - x;
          const dy = b.y - y;
          return Math.hypot(dx, dy) > b.radius;
        });

      if (valid) {
        positions.push({ x, y });
        placed = true;
      }
    }

    // Fallback if we somehow can't place one.
    if (!placed) {
      positions.push({
        x: 6 + random() * 88,
        y: 6 + random() * 88,
      });
    }
  }

  return positions;
}

function generateLetters() {
  const positions = generatePositions(WORD.length)

  return WORD.split("").map((letter, index) => ({
    id: index,
    image: alphabetImages[letter],

    left: positions[index].x,
    top: positions[index].y,

    rotation: Math.random() * 90 - 45,
    size: 26 + Math.random() * 30,
    speed: 0.3 + Math.random() * 1.4,
    opacity: 0.05 + Math.random() * 0.12,
    blur: Math.random() * 0.4,
    brightness: 0.9 + Math.random() * 0.25,
    delay: Math.random() * 8,

    scale: 0.8 + Math.random() * 0.4,
  }));
}

export function DoodleBackdrop() {
  const [letters] = useState(generateLetters)

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      aria-hidden="true"
    >
      <div className="backdrop-grid" />

      <div className="scribble scribble-one" />
      <div className="scribble scribble-two" />

      <div className="floating-scrap floating-scrap-one">ship()</div>
      <div className="floating-scrap floating-scrap-two">idea</div>
      <div className="floating-scrap floating-scrap-three">01</div>

      <div className="floating-scrap-image w-16 h-16 top-4/5 md:top-1/2 left-12 rotate-12 flex justify-center items-center p-1.5">
        <img src={wazowski} alt="" className="w-full h-full object-cover" />
      </div>

      {letters.map((item) => (
        <img
          key={item.id}
          src={item.image}
          alt=""
          className="doodle-letter"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            width: `${item.size}px`,
            opacity: item.opacity,
            filter: `blur(${item.blur}px) brightness(${item.brightness})`,
            animationDelay: `${item.delay}s`,
            transform: `
              translateY(calc(var(--scroll-y,0px) * ${item.speed}))
              rotate(${item.rotation}deg)
              scale(${item.scale})
            `,
          }}
        />
      ))}
    </div>
  );
}
