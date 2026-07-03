export function ProjectCard({ project, index }) {
  return (
    <article
      className={`project-card project-${project.accent}`}
      data-reveal
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="project-thumb" aria-label={`${project.title} placeholder image`} role="img">
        <span className="doodle-browser-bar" />
        <span className="doodle-line line-a" />
        <span className="doodle-line line-b" />
        <span className="doodle-line line-c" />
        <span className="doodle-circle" />
      </div>
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
  )
}
