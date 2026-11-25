
import { Code2, ArrowUp } from 'lucide-react'

function Footer({ language }) {
  const content = {
    fr: {
      description: 'Junior Développeur Web Full Stack',
      navigation: 'Navigation',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
      backToTop: 'Retour en haut',
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
      contact: 'Contact',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
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

  const t = content[language] || content.fr
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t px-5 pb-8 pt-14 sm:px-8 lg:px-12"
      style={{
        background: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#accueil"
              className="inline-flex items-center gap-2 text-xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              <Code2 className="text-brand" size={25} />
              Aymen<span className="text-brand">.</span>
            </a>

            <p
              className="mt-4 max-w-xs text-sm leading-7"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t.description}
            </p>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hi%40abouarchedev.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send an email to hi@abouarchedev.tech"
              className="relative z-10 mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"
            >
              <img
                src="/images/icons/email.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none h-[18px] w-[18px] shrink-0 dark:invert"
              />
              hi@abouarchedev.tech
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="mb-5 font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.navigation}
            </h3>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {t.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition hover:text-brand"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3
              className="mb-5 font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.contact}
            </h3>

            <div className="flex flex-wrap gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/abouarchedev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub - Aymen Abouarche"
                className="relative z-10 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:border-brand hover:text-brand"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)',
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
                className="relative z-10 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:border-brand hover:text-brand"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)',
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

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              {language === 'en' ? 'Send me a message' : 'Envoyer un message'}
              <ArrowUp size={15} className="rotate-45" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center sm:flex-row"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'var(--text-secondary)' }}
          >
            © {currentYear} Aymen Abouarche. {t.rights}
          </p>

          <a
            href="#accueil"
            className="inline-flex items-center gap-2 text-xs font-medium transition hover:text-brand"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.backToTop}
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
