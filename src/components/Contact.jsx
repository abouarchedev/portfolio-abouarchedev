
import { useState, useEffect, useRef } from 'react'
import { Mail, Send, MapPin } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xljbkjnj'

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contact({ language }) {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState(initialFormData)

  // Contact entrance animation
  const sectionRef = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true)
      return
    }

    if (!('IntersectionObserver' in window)) {
      setIsRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -5% 0px',
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const content = {
    fr: {
      label: 'CONTACT',
      title: 'Entrons en contact',
      description:
        'Vous avez une opportunité de stage, une question ou un projet à discuter ? N’hésitez pas à me contacter.',
      email: 'Adresse e-mail',
      location: 'Localisation',
      name: 'Nom complet',
      emailField: 'Votre adresse e-mail',
      subject: 'Objet',
      subjectPlaceholder: 'Objet de votre message',
      message: 'Message',
      messagePlaceholder: 'Écrivez votre message ici...',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Votre message a été envoyé avec succès. Merci !',
      error: 'Une erreur est survenue. Veuillez réessayer.',
      notConfigured:
        'Le formulaire est momentanément indisponible. Veuillez réessayer plus tard.',
      social: 'Retrouvez-moi également sur',
      privacy:
        'Vos informations seront utilisées uniquement pour répondre à votre message.',
    },

    en: {
      label: 'CONTACT',
      title: 'Get in touch',
      description:
        'Have an internship opportunity, a question or a project to discuss? Feel free to contact me.',
      email: 'Email address',
      location: 'Location',
      name: 'Full name',
      emailField: 'Your email address',
      subject: 'Subject',
      subjectPlaceholder: 'Message subject',
      message: 'Message',
      messagePlaceholder: 'Write your message here...',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Your message has been sent successfully. Thank you!',
      error: 'Something went wrong. Please try again.',
      notConfigured:
        'The form is temporarily unavailable. Please try again later.',
      social: 'You can also find me on',
      privacy:
        'Your information will only be used to respond to your message.',
    },
  }

  const t = content[language] || content.fr

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    // Clear previous feedback when the user edits the form
    if (status !== 'idle' && status !== 'sending') {
      setStatus('idle')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Prevent duplicate submissions
    if (status === 'sending') return

    const formElement = event.currentTarget

    // Use native browser validation
    if (!formElement.reportValidity()) return

    if (!FORMSPREE_ENDPOINT) {
      setStatus('not-configured')
      return
    }

    setStatus('sending')

    try {
      const payload = new FormData(formElement)

      // Configure reply-to and email subject
      payload.set('_replyto', formData.email.trim())
      payload.set(
        '_subject',
        `Portfolio contact — ${formData.subject.trim()}`,
      )

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Formspree submission failed: ${response.status}`)
      }

      // Reset controlled form fields after successful submission
      setFormData(initialFormData)
      formElement.reset()
      setStatus('success')
    } catch (error) {
      console.error('Contact form submission error:', error)
      setStatus('error')
    }
  }

  const cardStyle = {
    background: 'var(--surface-glass)',
    borderColor: 'var(--border-color)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  }

  const inputStyle = {
    background: 'var(--input-glass)',
    borderColor: 'var(--border-color)',
    color: 'var(--text-primary)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  }

  const statusMessage = {
    success: t.success,
    error: t.error,
    sending: t.sending,
    'not-configured': t.notConfigured,
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-brand">
            {t.label}
          </span>

          <h2
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.title}
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl leading-7"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.description}
          </p>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-brand" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information - Enters from the left */}
          <div
            className={`space-y-6 transform-gpu transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
              isRevealed
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            {/* Email Card */}
            <div
              className="rounded-2xl border p-6 transition duration-300 hover:-translate-y-1"
              style={cardStyle}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand dark:bg-blue-950/40">
                  <Mail size={21} />
                </div>

                <div>
                  <h3
                    className="font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {t.email}
                  </h3>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hi%40abouarchedev.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact me by email using Gmail"
                    className="relative z-10 mt-1 inline-block text-sm text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    hi@abouarchedev.tech
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="rounded-2xl border p-6 transition duration-300 hover:-translate-y-1"
              style={cardStyle}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand dark:bg-blue-950/40">
                  <MapPin size={21} />
                </div>

                <div>
                  <h3
                    className="font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {t.location}
                  </h3>

                  <p
                    className="mt-1 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Casablanca, Maroc
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h3
                className="mb-4 font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                {t.social}
              </h3>

              <div className="flex flex-wrap gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/abouarchedev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub - Aymen Abouarche"
                  className="relative z-10 inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                    background: 'var(--surface-glass)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  <img
                    src="/images/icons/github.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none h-[18px] w-[18px] shrink-0 dark:invert"
                  />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aymen-abouarche-ba1971434/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn - Aymen Abouarche"
                  className="relative z-10 inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                    background: 'var(--surface-glass)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  <img
                    src="/images/icons/linkedin.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none h-[18px] w-[18px] shrink-0"
                  />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Enters from the right */}
          <form
            onSubmit={handleSubmit}
            className={`rounded-2xl border p-6 shadow-lg sm:p-8 transform-gpu transition-[opacity,transform] duration-1000 ease-out delay-150 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
              isRevealed
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
            style={{
              ...cardStyle,
              boxShadow: 'var(--surface-shadow)',
            }}
          >
            {/* Honeypot anti-spam field */}
            <div
              className="absolute -left-[10000px] h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="contact-website">
                Leave this field empty
              </label>
              <input
                id="contact-website"
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t.name}
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={80}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-brand disabled:cursor-not-allowed disabled:opacity-60"
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t.emailField}
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-brand disabled:cursor-not-allowed disabled:opacity-60"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-medium"
                style={{ color: 'var(--text-primary)' }}
              >
                {t.subject}
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                required
                minLength={3}
                maxLength={120}
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.subjectPlaceholder}
                disabled={status === 'sending'}
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-brand disabled:cursor-not-allowed disabled:opacity-60"
                style={inputStyle}
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium"
                style={{ color: 'var(--text-primary)' }}
              >
                {t.message}
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                disabled={status === 'sending'}
                className="w-full resize-y rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-brand disabled:cursor-not-allowed disabled:opacity-60"
                style={inputStyle}
              />

              <div
                className="mt-2 text-right text-xs"
                style={{ color: 'var(--text-secondary)' }}
                aria-live="polite"
              >
                {formData.message.length}/3000
              </div>
            </div>

            {/* Status Messages */}
            <div
              className="mt-5"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {status !== 'idle' && (
                <p
                  className="rounded-lg border px-4 py-3 text-sm leading-6"
                  style={{
                    color:
                      status === 'success'
                        ? '#15803D'
                        : status === 'sending'
                          ? 'var(--text-secondary)'
                          : '#DC2626',
                    background: 'var(--input-glass)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  {statusMessage[status]}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === 'sending' ? t.sending : t.send}

              <Send
                size={16}
                className={status === 'sending' ? 'animate-pulse' : ''}
                aria-hidden="true"
              />
            </button>

            <p
              className="mt-4 text-xs leading-5"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t.privacy}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
