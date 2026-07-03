export function StackCard({ stack, index }) {
  const Icon = stack.icon

  return (
    <article className="stack-card" data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="mb-5 flex items-center gap-3">
        <span className="stack-icon">
          <Icon size={22} />
        </span>
        <h2 className="font-heading text-3xl">{stack.title}</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {stack.items.map((item) => (
          <span key={item} className="skill-sticker">
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}
