import { useLayoutEffect, useRef } from "react";

// Must match .masonry-grid's grid-auto-rows (ROW_UNIT) in App.css.
// row-gap is 0 in CSS on purpose — ROW_GAP is applied here instead, as
// extra span per card, so every card gets the exact same trailing gap.
const ROW_UNIT = 1;
const ROW_GAP = 24;

export function ProjectCard({ project, index, images }) {
  const image = images[`../assets/projects/${project.image}`];
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const setSpan = () => {
      const height = node.getBoundingClientRect().height;
      const rowSpan = Math.ceil((height + ROW_GAP) / ROW_UNIT);
      node.style.gridRowEnd = `span ${rowSpan}`;
    };

    // Measure once immediately so the first paint is already correctly
    // sized, then keep re-measuring whenever the card's own rendered
    // size changes (window resize, breakpoint change, font swap, etc).
    setSpan();
    const observer = new ResizeObserver(setSpan);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`project-card project-${project.accent}`}
      data-reveal
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {image ? (
        <img src={image} alt="" className="project-thumb-img" />
      ) : (
        <div
          className="project-thumb"
          aria-label={`${project.title} placeholder image`}
          role="img"
        >
          <span className="doodle-browser-bar" />
          <span className="doodle-line line-a" />
          <span className="doodle-line line-b" />
          <span className="doodle-line line-c" />
          <span className="doodle-circle" />
        </div>
      )}
      <div className="p-5">
        <span className="section-kicker">{project.tag}</span>
        <h2 className="font-heading mt-2 text-3xl">{project.title}</h2>
        <p className="body-copy mt-3 text-sm leading-6">{project.copy}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="tool-chip">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
