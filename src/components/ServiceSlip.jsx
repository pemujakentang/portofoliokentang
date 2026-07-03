export function ServiceSlip({ service, index }) {
  return (
    <article
      className="service-slip"
      data-reveal
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="service-number">0{index + 1}</span>
      <div>
        <h2 className="font-heading text-3xl">{service.title}</h2>
        <p className="mt-2 text-sm leading-6">{service.copy}</p>
      </div>
    </article>
  )
}
