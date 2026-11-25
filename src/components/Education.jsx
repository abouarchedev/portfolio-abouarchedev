
import { GraduationCap, School } from 'lucide-react'

function Education({ language }) {
  const content = {
    fr: {
      label: 'MON PARCOURS',
      title: 'Formation',
      description: 'Mon parcours académique et ma formation professionnelle.',
      items: [
        {
          icon: GraduationCap,
          institution: 'ISTA Roches Noires — OFPPT',
          diploma: 'Technicien Spécialisé',
          field: 'Développement Digital — Web Full Stack',
          period: '2025 — 2027',
          status: 'En cours',
          location: 'Casablanca, Maroc',
        },
        {
          icon: School,
          institution: 'Lycée Al Farabi',
          diploma: 'Baccalauréat',
          field: 'Sciences Physiques et Chimie',
          period: '2024 — 2025',
          status: 'Obtenu',
          location: 'Casablanca, Maroc',
        },
      ],
    },
    en: {
      label: 'MY JOURNEY',
      title: 'Education',
      description: 'My academic background and professional training.',
      items: [
        {
          icon: GraduationCap,
          institution: 'ISTA Roches Noires — OFPPT',
          diploma: 'Specialized Technician',
          field: 'Digital Development — Full Stack Web',
          period: '2025 — 2027',
          status: 'In progress',
          location: 'Casablanca, Morocco',
        },
        {
          icon: School,
          institution: 'Lycée Al Farabi',
          diploma: 'Baccalaureate',
          field: 'Physical Sciences and Chemistry',
          period: '2024 — 2025',
          status: 'Completed',
          location: 'Casablanca, Morocco',
        },
      ],
    },
  }

  const t = content[language] || content.fr

  return (
    <section id="formation" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
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

        <div className="relative ml-3 space-y-10 border-l-2 border-blue-200 pl-8 dark:border-blue-900 sm:ml-8 sm:pl-10">
          {t.items.map((item) => {
            const Icon = item.icon

            return (
              <article key={item.institution} className="relative">
                <div className="absolute -left-[43px] top-1 flex h-10 w-10 items-center justify-center rounded-full border-4"
                  style={{
                    background: 'var(--bg-primary)',
                    borderColor: 'var(--accent-color)',
                  }}
                >
                  <Icon size={18} className="text-brand" />
                </div>

                <div
                  className="rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg sm:p-7"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-brand">
                      {item.period}
                    </span>

                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background: 'var(--bg-primary)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3
                    className="mt-4 text-xl font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.institution}
                  </h3>

                  <p
                    className="mt-2 font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.diploma}
                  </p>

                  <p
                    className="mt-1 leading-7"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.field}
                  </p>

                  <p
                    className="mt-4 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.location}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
