import { useState } from "react";
import { ArrowRight, Code2, Mail, MapPin, FileUser, UserRound } from "lucide-react";
import { ContactSlip } from "../components/ContactSlip";
import { PageHeader } from "../components/PageHeader";

const CONTACT_EMAIL = "martinwibawa@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
    if (status === "sent") setStatus("idle");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Fill in your name, email, and message before sending.");
      return;
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("That email doesn't look quite right.");
      return;
    }

    const subject = `Portfolio contact from ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // window.location.href = mailtoLink;
    window.open(mailtoLink, '_').focus();
    setStatus("sent");
    setTimeout(function () {
      setStatus("idle");
    }, 5000);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Got a role, project, or idea?"
        copy="Hit me up. Let's work something out. I'm open to any and all opportunities!"
        icon={Mail}
      />
      <section className="page-shell grid gap-6 pb-16 lg:grid-cols-[1fr_0.9fr]">
        <form
          className="contact-form"
          data-reveal
          onSubmit={handleSubmit}
          noValidate
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="John Dawg"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="john@dawg.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              rows="6"
              name="message"
              placeholder="Tell me what you are, dawg."
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          {status === "sent" && !error && (
            <p className="form-status" role="status">
              Opening your email client in a new tab. Hit send there to contact
              me.
            </p>
          )}

          <button
            type="submit"
            className="paper-button paper-button-primary w-fit"
          >
            Send
            <ArrowRight size={18} />
          </button>
        </form>

        <aside className="grid gap-4" data-reveal>
          <ContactSlip icon={Mail} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </ContactSlip>
          <ContactSlip
            icon={UserRound}
            href={"https://www.linkedin.com/in/bonifasius-martin/"}
          >
            My LinkedIn Profile
          </ContactSlip>
          <ContactSlip icon={Code2} href={"https://github.com/pemujakentang"}>
            Check out my GitHub profile!
          </ContactSlip>
          <ContactSlip
            icon={FileUser}
            href={
              "https://drive.google.com/file/d/10NlaOJs_jVrPkVe3SZiOWL6DUw8590LP/view?usp=sharing"
            }
          >
            Grab my CV!
          </ContactSlip>
          <ContactSlip icon={MapPin}>
            Jakarta, open to relocation and remote roles
          </ContactSlip>
        </aside>
      </section>
    </>
  );
}
