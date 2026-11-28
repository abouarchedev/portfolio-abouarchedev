import { useState } from 'react'
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Globe2,
  Utensils,
  Users,
  Layers3,
} from 'lucide-react'

function Projects({ language }) {
  const [imageErrors, setImageErrors] = useState({})

  const handleMouseMove = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  const handleMouseEnter = (event) => {
    event.currentTarget.style.setProperty('--spotlight-opacity', '1')
  }

  const handleMouseLeave = (event) => {
    event.currentTarget.style.setProperty('--spotlight-opacity', '0')
  }

  const content = {
    fr: {
      label: 'MON TRAVAIL',
      title: 'Projets réalisés',
      description:
        'Une sélection de projets qui illustrent mes compétences, ma progression et mon approche du développement.',
      github: 'Voir le dépôt GitHub',
      demo: 'Voir la démo',
      imageFallback: 'Capture à ajouter',
      projects: [
        {
          id: 'ista',
          number: '01',
          title: 'Site web – ISTA Roches Noires',
          category: 'Développement Web',
          description:
            'Conception d’un site web statique présentant l’établissement ISTA Roches Noires. Le projet met en pratique la structuration des pages, la mise en forme et l’adaptation de l’interface aux différents écrans.',
          features: [
            'Structure HTML5 claire et sémantique',
            'Mise en page responsive avec CSS3',
            'Utilisation de Bootstrap',
          ],
          technologies: ['HTML5', 'CSS3', 'Bootstrap'],
          github:
            'https://github.com/abouarchedev/Site-web-statique-ista-roches-noires',
          demo:
            'https://abouarchedev.github.io/Site-web-statique-ista-roches-noires/',
          image: '/images/projects/ista-roches-noires.webp',
          icon: Code2,
          accent: 'blue',
        },
        {
          id: 'restaurant',
          number: '02',
          title: 'Restaurant Menu',
          category: 'Application Web',
          description:
            'Développement d’une interface web moderne pour un restaurant, permettant de présenter les plats et les différentes catégories du menu dans une expérience visuelle claire et agréable.',
          features: [
            'Interface moderne et responsive',
            'Organisation des plats par catégories',
            'Composants réutilisables avec React',
          ],
          technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
          github: 'https://github.com/abouarchedev/restaurant-menu',
          demo: 'https://abouarchedev-restaurant-menu.vercel.app/',
          image: '/images/projects/restaurant-menu.webp',
          icon: Utensils,
          accent: 'orange',
        },
        {
          id: 'club',
          number: '03',
          title: 'Gestion des abonnés d’un club',
          category: 'Application Desktop',
          description:
            'Réalisation d’une application desktop destinée à faciliter la gestion des abonnés d’un club sportif, avec des fonctionnalités de suivi, de traitement des données et de génération de rapports.',
          features: [
            'Gestion et suivi des abonnés',
            'Analyse et visualisation des données',
            'Exportation de rapports et de documents',
          ],
          technologies: [
            'Python',
            'CustomTkinter',
            'Pandas',
            'Matplotlib',
            'OpenPyXL',
            'ReportLab',
          ],
          github:
            'https://github.com/abouarchedev/gestion-abonnes-club',
          demo: null,
          image: '/images/projects/club-management.webp',
          icon: Users,
          accent: 'purple',
        },
      ],
    },

    en: {
      label: 'MY WORK',
      title: 'Featured Projects',
      description:
        'A selection of projects showcasing my skills, progress and approach to software development.',
      github: 'View GitHub repository',
      demo: 'Live demo',
      imageFallback: 'Screenshot to be added',
      projects: [
        {
          id: 'ista',
          number: '01',
          title: 'ISTA Roches Noires Website',
          category: 'Web Development',
          description:
            'Development of a static website presenting the ISTA Roches Noires institution. This project focuses on page structure, styling and adapting the interface to different screen sizes.',
          features: [
            'Clear and semantic HTML5 structure',
            'Responsive layouts with CSS3',
            'Bootstrap integration',
          ],
          technologies: ['HTML5', 'CSS3', 'Bootstrap'],
          github:
            'https://github.com/abouarchedev/Site-web-statique-ista-roches-noires',
          demo:
            'https://abouarchedev.github.io/Site-web-statique-ista-roches-noires/',
          image: '/images/projects/ista-roches-noires.webp',
          icon: Code2,
          accent: 'blue',
        },
        {
          id: 'restaurant',
          number: '02',
          title: 'Restaurant Menu',
          category: 'Web Application',
          description:
            'Development of a modern restaurant website interface, presenting dishes and menu categories through a clear and enjoyable browsing experience.',
          features: [
            'Modern and responsive interface',
            'Menu organized by categories',
            'Reusable React components',
          ],
          technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
          github: 'https://github.com/abouarchedev/restaurant-menu',
          demo: 'https://abouarchedev-restaurant-menu.vercel.app/',
          image: '/images/projects/restaurant-menu.webp',
          icon: Utensils,
          accent: 'orange',
        },
        {
          id: 'club',
          number: '03',
          title: 'Sports Club Member Management',
          category: 'Desktop Application',
          description:
            'Development of a desktop application designed to simplify sports club member management, including data tracking, processing and report generation.',
          features: [
            'Member management and tracking',
            'Data analysis and visualization',
            'Report and document exports',
          ],
          technologies: [
            'Python',
            'CustomTkinter',
            'Pandas',
            'Matplotlib',
            'OpenPyXL',
            'ReportLab',
          ],
          github:
            'https://github.com/abouarchedev/gestion-abonnes-club',
          demo: null,
          image: '/images/projects/club-management.webp',
          icon: Users,
          accent: 'purple',
        },
      ],
    },
  }

  const text = content[language] || content.fr

  const accentStyles = {
    blue: {
      icon: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
      number: 'text-blue-600 dark:text-blue-400',
      glow: 'from-blue-500/15',
    },
    orange: {
      icon: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
      number: 'text-orange-600 dark:text-orange-400',
      glow: 'from-orange-500/15',
    },
    purple: {
      icon: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
      number: 'text-purple-600 dark:text-purple-400',
      glow: 'from-purple-500/15',
    },
  }

  return (
    <section
      id="projets"
      className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 max-w-2xl">
          <span className="section-eyebrow">{text.label}</span>

          <h2 className="section-title mt-5">{text.title}</h2>

          <p className="section-description mt-5">
            {text.description}
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {text.projects.map((project) => {
            const ProjectIcon = project.icon
            const accent = accentStyles[project.accent]

            return (
              <article
                key={project.id}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="surface-card group relative isolate grid overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_20px_60px_-20px_rgba(37,99,235,0.18)] lg:grid-cols-2"
                style={{
                  '--mouse-x': '50%',
                  '--mouse-y': '50%',
                  '--spotlight-opacity': 0,
                }}
              >
                {/* Cursor-following spotlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                  style={{
                    opacity: 'var(--spotlight-opacity)',
                    background:
                      'radial-gradient(550px circle at var(--mouse-x) var(--mouse-y), rgba(37, 99, 235, 0.15), transparent 45%)',
                  }}
                />

                {/* Project preview */}
                <div
                  className={`relative z-10 flex min-h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br ${accent.glow} via-transparent to-transparent p-6 sm:min-h-[340px] sm:p-10`}
                >
                  <div className="absolute inset-0 technical-grid opacity-50" />

                  <div className="relative z-10 w-full max-w-lg">
                    {imageErrors[project.id] ? (
                      <div className="flex aspect-video flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 text-center">
                        <div
                          className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${accent.icon}`}
                        >
                          <ProjectIcon size={30} />
                        </div>

                        <p className="font-semibold text-[var(--text-primary)]">
                          {project.title}
                        </p>

                        <span className="mt-2 text-sm text-[var(--text-muted)]">
                          {text.imageFallback}
                        </span>
                      </div>
                    ) : (
                      <div className="overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.2)]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="aspect-video w-full object-cover object-top"
                          loading="lazy"
                          onError={() =>
                            setImageErrors((previous) => ({
                              ...previous,
                              [project.id]: true,
                            }))
                          }
                        />
                      </div>
                    )}
                  </div>

                  <span
                    className={`absolute left-6 top-6 text-sm font-bold tracking-widest ${accent.number}`}
                  >
                    {project.number}
                  </span>
                </div>

                {/* Project information */}
                <div className="relative z-10 flex flex-col p-7 sm:p-10 lg:p-12">
                  {/* Category */}
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-color)]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mb-5 flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accent.icon}`}
                    >
                      <ProjectIcon size={23} />
                    </div>

                    <h3 className="text-2xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-color)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-7">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      <Layers3 size={14} />
                      {language === 'en'
                        ? 'Technologies'
                        : 'Technologies utilisées'}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--border-color)] pt-6">
                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{
                        backgroundColor: '#2563EB',
                        color: '#FFFFFF',
                      }}
                    >
                      <Code2 size={17} />
                      {text.github}
                      <ArrowUpRight size={15} />
                    </a>

                    {/* Live demo */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-color)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
                      >
                        <Globe2 size={17} />
                        {text.demo}
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
