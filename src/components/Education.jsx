
import {
  GraduationCap,
  School,
  Compass,
  MapPin,
  Sparkles,
  BriefcaseBusiness,
  Code2,
  BrainCircuit,
  ShieldCheck,
  CheckCircle2,
  Database,
  Terminal,
  Calculator,
  Atom,
  FlaskConical,
  Lightbulb,
  Shapes,
} from 'lucide-react'

function Education({ language }) {
  const content = {
    en: {
      label: 'MY JOURNEY',
      title: 'Education & Future Vision',
      description:
        'My academic journey, current learning experience, and ambitions for the future.',

      future: {
        period: 'THE NEXT CHAPTER',
        status: 'Future Vision',
        institution: 'Beyond the Diploma',
        diploma: 'Higher Education & Professional Growth',
        field: 'Exploring the Future of Technology',
        description:
          'Continue my studies, gain professional experience, and explore different paths in technology before choosing a specialization.',
        goalsLabel: 'FUTURE AMBITIONS',
        goals: [
          'Pursue higher education and continue developing my knowledge.',
          'Gain practical experience through professional opportunities and real-world projects.',
          'Explore different technology fields to discover the path that suits me best.',
        ],
        areasLabel: 'AREAS TO EXPLORE',
        areas: [
          { label: 'Software Engineering', icon: Code2 },
          { label: 'Artificial Intelligence', icon: BrainCircuit },
          { label: 'Cybersecurity', icon: ShieldCheck },
        ],
      },

      current: {
        period: '2025 — 2027',
        status: 'In Progress',
        institution: 'ISTA Roches Noires — OFPPT',
        diploma: 'Specialized Technician',
        field: 'Digital Development — Full Stack Web',
        location: 'Casablanca, Morocco',
        description:
          'A comprehensive Full Stack Web Development program combining programming fundamentals with practical application development. My training covers algorithmic thinking, object-oriented programming, web technologies, front-end and back-end development, database management, and software project development. It also strengthens my ability to design, build, and improve functional web applications through hands-on practice.',
        skillsLabel: 'TECHNOLOGIES & TOOLS',
        skills: [
          { label: 'React', icon: Code2 },
          { label: 'Laravel', icon: Code2 },
          { label: 'Algorithm', icon: Calculator },
          { label: 'Python', icon: Terminal },
          { label: 'MySQL', icon: Database },
          { label: 'Figma', icon: Shapes },
        ],
        focusLabel: 'KEY LEARNING AREAS',
        focus: [
          'Programming & Algorithms',
          'Front-end & Back-end Development',
          'Databases & Application Logic',
          'Practical Projects & Problem Solving',
        ],
        currentNote: 'My current professional training',
      },

      completed: {
        period: '2024 — 2025',
        status: 'Completed',
        institution: 'Lycée Al Farabi',
        diploma: 'Baccalaureate',
        field: 'Physical Sciences and Chemistry',
        location: 'Casablanca, Morocco',
        description:
          'The academic foundation of my journey, built through the study of mathematics, physics, and chemistry. This scientific track strengthened my logical reasoning, analytical thinking, and ability to understand complex concepts through observation, calculation, and structured problem-solving. It helped develop the discipline and curiosity that later guided my transition toward computer science and software development.',
        focusLabel: 'SCIENTIFIC FOUNDATIONS',
        skills: [
          { label: 'Mathematics', icon: Calculator },
          { label: 'Physics', icon: Atom },
          { label: 'Chemistry', icon: FlaskConical },
          { label: 'Analytical Thinking', icon: Lightbulb },
        ],
      },

      closing: 'Every step is part of a bigger journey.',
    },

    fr: {
      label: 'MON PARCOURS',
      title: 'Formation & Vision d’avenir',
      description:
        'Mon parcours académique, ma formation actuelle et mes ambitions pour l’avenir.',

      future: {
        period: 'LA PROCHAINE ÉTAPE',
        status: 'Vision d’avenir',
        institution: 'Au-delà du diplôme',
        diploma: 'Études supérieures & Évolution professionnelle',
        field: 'Explorer les domaines de la technologie',
        description:
          'Poursuivre mes études, acquérir une expérience professionnelle et explorer différentes voies dans le domaine informatique avant de choisir une spécialisation.',
        goalsLabel: 'MES AMBITIONS',
        goals: [
          'Poursuivre des études supérieures et développer mes connaissances.',
          'Acquérir une expérience pratique à travers des opportunités professionnelles et des projets concrets.',
          'Explorer différents domaines technologiques afin de trouver celui qui me correspond le mieux.',
        ],
        areasLabel: 'DOMAINES À EXPLORER',
        areas: [
          { label: 'Génie logiciel', icon: Code2 },
          { label: 'Intelligence artificielle', icon: BrainCircuit },
          { label: 'Cybersécurité', icon: ShieldCheck },
        ],
      },

      current: {
        period: '2025 — 2027',
        status: 'En cours',
        institution: 'ISTA Roches Noires — OFPPT',
        diploma: 'Technicien Spécialisé',
        field: 'Développement Digital — Web Full Stack',
        location: 'Casablanca, Maroc',
        description:
          'Une formation complète en développement web Full Stack, associant les fondamentaux de la programmation à la réalisation d’applications pratiques. Mon parcours aborde la logique algorithmique, la programmation orientée objet, les technologies web, le développement Front-end et Back-end, la gestion des bases de données ainsi que la conception de projets logiciels. La formation renforce également ma capacité à concevoir, développer et améliorer des applications web fonctionnelles à travers la pratique.',
        skillsLabel: 'TECHNOLOGIES & OUTILS',
        skills: [
          { label: 'React', icon: Code2 },
          { label: 'Laravel', icon: Code2 },
          { label: 'Algorithmique', icon: Calculator },
          { label: 'Python', icon: Terminal },
          { label: 'MySQL', icon: Database },
          { label: 'Figma', icon: Shapes },
        ],
        focusLabel: 'PRINCIPAUX AXES D’APPRENTISSAGE',
        focus: [
          'Programmation & Algorithmique',
          'Développement Front-end & Back-end',
          'Bases de données & Logique applicative',
          'Projets pratiques & Résolution de problèmes',
        ],
        currentNote: 'Ma formation professionnelle actuelle',
      },

      completed: {
        period: '2024 — 2025',
        status: 'Obtenu',
        institution: 'Lycée Al Farabi',
        diploma: 'Baccalauréat',
        field: 'Sciences Physiques et Chimie',
        location: 'Casablanca, Maroc',
        description:
          'Le socle académique de mon parcours, construit autour de l’étude des mathématiques, de la physique et de la chimie. Cette filière scientifique a renforcé mon raisonnement logique, mon esprit d’analyse et ma capacité à comprendre des notions complexes grâce à l’observation, au calcul et à une démarche structurée de résolution de problèmes. Elle m’a permis de développer la rigueur et la curiosité qui ont ensuite accompagné mon orientation vers l’informatique et le développement logiciel.',
        focusLabel: 'BASES SCIENTIFIQUES',
        skills: [
          { label: 'Mathématiques', icon: Calculator },
          { label: 'Physique', icon: Atom },
          { label: 'Chimie', icon: FlaskConical },
          { label: 'Esprit d’analyse', icon: Lightbulb },
        ],
      },

      closing: 'Chaque étape fait partie d’un parcours plus vaste.',
    },
  }

  const t = content[language] || content.en

  const stages = [
    {
      type: 'future',
      icon: Compass,
      ...t.future,
    },
    {
      type: 'current',
      icon: GraduationCap,
      ...t.current,
    },
    {
      type: 'completed',
      icon: School,
      ...t.completed,
    },
  ]

  return (
    <section
      id="formation"
      className="px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-14">
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

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-brand" />
        </div>

        {/* Timeline */}
        <div className="relative isolate">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-7 left-[17px] top-7 z-0 w-px sm:left-[21px]"
            style={{
              background:
                'linear-gradient(to bottom, var(--accent-color), var(--border-color) 75%, transparent)',
            }}
          />

          <div className="relative z-10 space-y-7 sm:space-y-8">
            {stages.map((item) => {
              const Icon = item.icon
              const isFuture = item.type === 'future'
              const isCurrent = item.type === 'current'
              const isCompleted = item.type === 'completed'

              return (
                <article
                  key={item.type}
                  className="education-timeline-item relative grid grid-cols-[36px_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-5"
                >
                  {/* Timeline marker */}
                  <div className="relative z-20 flex justify-center">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border sm:h-11 sm:w-11"
                      style={{
                        background: isFuture
                          ? 'var(--accent-color)'
                          : 'var(--bg-primary)',
                        borderColor: isCompleted
                          ? '#16a34a'
                          : 'var(--accent-color)',
                        color: isFuture
                          ? '#ffffff'
                          : isCompleted
                            ? '#16a34a'
                            : 'var(--accent-color)',
                      }}
                    >
                      {isCompleted ? (
                        <CheckCircle2 size={19} strokeWidth={2.2} />
                      ) : (
                        <Icon size={18} strokeWidth={1.8} />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="education-card relative z-10 isolate min-w-0 overflow-hidden rounded-xl border p-4 transition-[border-color,background-color] duration-200 sm:p-6"
                    style={{
                      background: 'var(--bg-secondary)',
                      borderColor: isFuture
                        ? 'var(--accent-color)'
                        : isCompleted
                          ? 'rgba(22,163,74,0.3)'
                          : 'var(--border-color)',
                      borderLeftWidth: isFuture ? '3px' : '1px',
                    }}
                  >
                    {/* Period and status */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold tracking-wider text-brand sm:text-sm">
                        {item.period}
                      </span>

                      <span
                        className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold"
                        style={{
                          background: isCompleted
                            ? 'rgba(22,163,74,0.09)'
                            : 'var(--bg-primary)',
                          borderColor: isCompleted
                            ? 'rgba(22,163,74,0.25)'
                            : 'var(--border-color)',
                          color: isCompleted
                            ? '#16a34a'
                            : 'var(--accent-color)',
                        }}
                      >
                        {isCurrent && (
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        )}

                        {isFuture && <Sparkles size={12} />}

                        {isCompleted && (
                          <CheckCircle2 size={13} strokeWidth={2.4} />
                        )}

                        {item.status}
                      </span>
                    </div>

                    {/* Main information */}
                    <h3
                      className={`mt-4 font-bold tracking-tight ${
                        isFuture
                          ? 'text-xl sm:text-2xl'
                          : 'text-lg sm:text-xl'
                      }`}
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.institution}
                    </h3>

                    <p
                      className="mt-1.5 text-sm font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.diploma}
                    </p>

                    <p
                      className="mt-1 text-sm font-medium leading-6"
                      style={{ color: 'var(--accent-color)' }}
                    >
                      {item.field}
                    </p>

                    <p
                      className="mt-3 text-sm leading-6"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.description}
                    </p>

                    {/* Future ambitions */}
                    {isFuture && (
                      <div
                        className="mt-5 border-t pt-5"
                        style={{ borderColor: 'var(--border-color)' }}
                      >
                        <p
                          className="mb-3 text-xs font-semibold tracking-wider"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {item.goalsLabel}
                        </p>

                        <ul className="space-y-2.5">
                          {item.goals.map((goal) => (
                            <li
                              key={goal}
                              className="flex items-start gap-2.5 text-sm leading-6"
                              style={{ color: 'var(--text-primary)' }}
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5">
                          <p
                            className="mb-3 text-xs font-semibold tracking-wider"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {item.areasLabel}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.areas.map((area) => {
                              const AreaIcon = area.icon

                              return (
                                <span
                                  key={area.label}
                                  className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-xs font-medium"
                                  style={{
                                    background: 'var(--bg-primary)',
                                    borderColor: 'var(--border-color)',
                                    color: 'var(--text-primary)',
                                  }}
                                >
                                  <AreaIcon
                                    size={14}
                                    className="text-brand"
                                  />
                                  {area.label}
                                </span>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Current training details */}
                    {isCurrent && (
                      <div
                        className="mt-5 border-t pt-5"
                        style={{ borderColor: 'var(--border-color)' }}
                      >
                        <p
                          className="mb-3 text-xs font-semibold tracking-wider"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {item.focusLabel}
                        </p>

                        <ul className="grid gap-2 sm:grid-cols-2">
                          {item.focus.map((focus) => (
                            <li
                              key={focus}
                              className="flex items-start gap-2 text-xs leading-5"
                              style={{ color: 'var(--text-primary)' }}
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                              <span>{focus}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5">
                          <p
                            className="mb-3 text-xs font-semibold tracking-wider"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {item.skillsLabel}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill) => {
                              const SkillIcon = skill.icon

                              return (
                                <span
                                  key={skill.label}
                                  className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-xs font-medium"
                                  style={{
                                    background: 'var(--bg-primary)',
                                    borderColor: 'var(--border-color)',
                                    color: 'var(--text-primary)',
                                  }}
                                >
                                  <SkillIcon
                                    size={14}
                                    className="text-brand"
                                  />
                                  {skill.label}
                                </span>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Completed scientific foundations */}
                    {isCompleted && (
                      <div
                        className="mt-5 border-t pt-5"
                        style={{ borderColor: 'var(--border-color)' }}
                      >
                        <p
                          className="mb-3 text-xs font-semibold tracking-wider"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {item.focusLabel}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => {
                            const SkillIcon = skill.icon

                            return (
                              <span
                                key={skill.label}
                                className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-xs font-medium"
                                style={{
                                  background: 'var(--bg-primary)',
                                  borderColor: 'rgba(22,163,74,0.2)',
                                  color: 'var(--text-primary)',
                                }}
                              >
                                <SkillIcon
                                  size={14}
                                  style={{ color: '#16a34a' }}
                                />
                                {skill.label}
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Location */}
                    {!isFuture && (
                      <div
                        className="mt-4 flex items-center gap-2 text-xs"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    )}

                    {/* Current education indicator */}
                    {isCurrent && (
                      <div
                        className="mt-4 border-t pt-3"
                        style={{ borderColor: 'var(--border-color)' }}
                      >
                        <span
                          className="inline-flex items-center gap-2 text-xs font-medium"
                          style={{ color: 'var(--accent-color)' }}
                        >
                          <BriefcaseBusiness size={14} />
                          {item.currentNote}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* Closing note */}
        <p
          className="mt-9 text-center text-sm"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t.closing}
        </p>
      </div>
    </section>
  )
}

export default Education
