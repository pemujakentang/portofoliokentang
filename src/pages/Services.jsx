import { Handshake } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ServiceSlip } from '../components/ServiceSlip'
import { services } from '../data/portfolioData'

export function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Ways I can help a team or client."
        copy="Keep this page short and practical. Recruiters and collaborators should understand what kind of value you can bring quickly."
        icon={Handshake}
      />
      <section className="page-shell grid gap-6 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="scrap-panel h-fit p-6" data-reveal>
          <h2 className="font-heading text-4xl">The offer board</h2>
          <p className="body-copy mt-4 text-sm leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this with a concise
            statement about your ideal collaboration, preferred stack, and the outcomes you care
            about.
          </p>
          <div className="mt-6 grid gap-3 font-mono text-sm">
            <span className="check-line">Responsive from the first sketch</span>
            <span className="check-line">Reusable components and tidy handoff</span>
            <span className="check-line">Friendly communication and clear scope</span>
          </div>
        </div>
        <div className="grid gap-4">
          {services.map((service, index) => (
            <ServiceSlip key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>
    </>
  )
}
