import { ArrowRight, Code2, Mail, MapPin } from 'lucide-react'
import { ContactSlip } from '../components/ContactSlip'
import { PageHeader } from '../components/PageHeader'

export function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Got a role, project, or idea?"
        copy="Hit me up."
        icon={Mail}
      />
      <section className="page-shell grid gap-6 pb-16 lg:grid-cols-[1fr_0.9fr]">
        <form className="contact-form" data-reveal>
          <label>
            Name
            <input type="text" placeholder="John Dawg" />
          </label>
          <label>
            Email
            <input type="email" placeholder="john@dawg.com" />
          </label>
          <label>
            Message
            <textarea rows="6" placeholder="Tell me what you are, dawg." />
          </label>
          <button type="button" className="paper-button paper-button-primary w-fit">
            Send<ArrowRight size={18} />
          </button>
        </form>

        <aside className="grid gap-4" data-reveal>
          <ContactSlip icon={Mail} href={"mailto:martinwibawa@gmail.com"}>martinwibawa@gmail.com</ContactSlip>
          <ContactSlip icon={Code2} href={"https://github.com/pemujakentang"}>github.com/pemujakentang</ContactSlip>
          <ContactSlip icon={MapPin}>Jakarta, open to relocation and remote roles</ContactSlip>
          {/* <div className="sticky-note contact-note">
            <span className="font-heading text-3xl">Tiny note</span>
            <p>Replace placeholders, add real project links, then send this with confidence.</p>
          </div> */}
        </aside>
      </section>
    </>
  )
}
