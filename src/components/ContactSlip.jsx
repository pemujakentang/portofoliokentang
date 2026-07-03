export function ContactSlip({ icon: Icon, children, href }) {
  return (
    <a className="contact-slip" href={href} target="_">
      <Icon size={20} />
      <span>{children}</span>
    </a>
  )
}
