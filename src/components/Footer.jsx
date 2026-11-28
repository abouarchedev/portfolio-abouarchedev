
import { Code2, ArrowUp, ArrowUpRight } from 'lucide-react'

function Footer({ language }) {
  const isEnglish = language === 'en'

  const content = {
    fr: {
      description: 'Junior Développeur Web Full Stack',
      navigation: 'Navigation',
      contact: 'Restons en contact',
      rights: 'Tous droits réservés.',
      backToTop: 'Retour en haut',
      sendMessage: 'Envoyer un message',
      navigationLabel: 'Navigation principale du pied de page',
      socialLabel: 'Réseaux professionnels',
      links: [
        { label: 'Accueil', href: '#accueil' },
        { label: 'À propos', href: '#apropos' },
        { label: 'Compétences', href: '#competences' },
        { label: 'Projets', href: '#projets' },
        { label: 'Formation', href: '#formation' },
        { label: 'Certifications', href: '#certifications' },
        { label: 'Contact', href: '#contact' },
      ],
    },

    en: {
      description: 'Junior Full Stack Web Developer',
      navigation: 'Navigation',
      contact: "Let's connect",
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
      sendMessage: 'Send me a message',
      navigationLabel: 'Footer main navigation',
      socialLabel: 'Professional networks',
      links: [
        { label: 'Home', href: '#accueil' },
        { label: 'About', href: '#apropos' },
        { label: 'Skills', href: '#competences' },
        { label: 'Projects', href: '#projets' },
        { label: 'Education', href: '#formation' },
        { label: 'Certifications', href: '#certifications' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  }

  const t = content[isEnglish ? 'en' : 'fr']
  const currentYear = new Date().getFullYear()

  const linkStyle = {
    color: 'var(--text-secondary)',
  }

  const socialStyle = {
    borderColor: 'var(--border-color)',
    color: 'var(--text-secondary)',
  }

  return (
    <footer
      className="relative border-t bg-transparent px-5 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-12"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          {/* Brand */}
          <div>
            <a
              href="#accueil"
              aria-label="Aymen Abouarche - Accueil"
              className="group relative z-10 inline-flex items-center gap-2 text-xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              <Code2
                size={25}
                strokeWidth={2.2}
                className="text-brand transition-transform duration-300 group-hover:rotate-6"
              />

              <span>
                Aymen<span className="text-brand">.</span>
              </span>
            </a>

            <p
              className="mt-4 max-w-xs text-sm leading-7"
              style={linkStyle}
            >
              {t.description}
            </p>

            {/* Email */}
            <a
              href="mailto:hi@abouarchedev.tech"
              aria-label="Send an email to hi@abouarchedev.tech"
              className="group relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4"
            >
              <img
                src="/images/icons/email.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none h-[18px] w-[18px] shrink-0 dark:invert"
              />

              <span>hi@abouarchedev.tech</span>

              <ArrowUpRight
                size={14}
                className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label={t.navigationLabel}>
            <h3
              className="mb-5 text-sm font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.navigation}
            </h3>

            <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
              {t.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative z-10 inline-flex text-sm transition-colors duration-200 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    style={linkStyle}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div>
            <h3
              className="mb-5 text-sm font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.contact}
            </h3>

            <div
              className="flex flex-wrap gap-3"
              aria-label={t.socialLabel}
            >
              {/* GitHub */}
              <a
                href="https://github.com/abouarchedev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub - Aymen Abouarche (opens in a new tab)"
                className="group relative z-10 inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:border-brand hover:bg-brand/5 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                style={socialStyle}
              >
                <img
                  src="/images/icons/github.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none h-[18px] w-[18px] shrink-0 dark:invert"
                />

                <span>GitHub</span>

                <ArrowUpRight
                  size={13}
                  className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aymen-abouarche-ba1971434/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn - Aymen Abouarche (opens in a new tab)"
                className="group relative z-10 inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:border-brand hover:bg-brand/5 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                style={socialStyle}
              >
                <img
                  src="/images/icons/linkedin.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none h-[18px] w-[18px] shrink-0"
                />

                <span>LinkedIn</span>

                <ArrowUpRight
                  size={13}
                  className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>
            </div>

            <a
              href="#contact"
              className="group relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all duration-200 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {t.sendMessage}

              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-5 border-t pt-7 text-center sm:flex-row sm:text-left"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p
            className="text-xs leading-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            © {currentYear} Aymen Abouarche. {t.rights}
          </p>

          {/* Back to Top */}
          <a
            href="#accueil"
            aria-label={t.backToTop}
            className="group relative z-10 inline-flex items-center gap-3 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span className="transition-colors duration-200 group-hover:text-brand">
              {t.backToTop}
            </span>

            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand group-hover:bg-brand/10 group-hover:text-brand"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <ArrowUp
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
