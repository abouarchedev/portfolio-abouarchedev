
import {
  Code2,
  Server,
  Database,
  ChartNoAxesCombined,
  Wrench,
  Braces,
  ArrowUpRight,
} from 'lucide-react'

import './Skills.css'

const logoPath = '/images/skills/'

const categories = {
  fr: [
    {
      number: '01',
      icon: Code2,
      title: 'Frontend Development',
      description: 'Création d’interfaces et intégration web',
      className: 'skills-card--frontend',
      skills: [
        { name: 'HTML5', logo: 'html5.svg' },
        { name: 'CSS3', logo: 'css3.svg' },
        { name: 'JavaScript', logo: 'javascript.svg' },
        { name: 'Bootstrap', logo: 'bootstrap.svg' },
        { name: 'React.js', logo: 'react.svg' },
      ],
      concepts: ['JSX'],
    },
    {
      number: '02',
      icon: Server,
      title: 'Backend Development',
      description: 'Logique serveur et développement backend',
      className: 'skills-card--backend',
      skills: [
        { name: 'PHP', logo: 'php.svg' },
        { name: 'Laravel', logo: 'laravel.svg' },
      ],
      concepts: ['REST API'],
    },
    {
      number: '03',
      icon: Database,
      title: 'Base de données',
      description: 'Gestion et manipulation des données',
      className: 'skills-card--database',
      skills: [
        { name: 'MySQL', logo: 'mysql.svg' },
      ],
      concepts: ['SQL'],
    },
    {
      number: '04',
      icon: ChartNoAxesCombined,
      title: 'Analyse de données',
      description: 'Programmation et manipulation de données',
      className: 'skills-card--data',
      skills: [
        { name: 'Python', logo: 'python.svg' },
        { name: 'Pandas', logo: 'pandas.svg' },
        { name: 'NumPy', logo: 'numpy.svg' },
        { name: 'Matplotlib', logo: 'matplotlib.svg' },
      ],
      concepts: [],
    },
    {
      number: '05',
      icon: Wrench,
      title: 'Outils & environnement',
      description: 'Outils de développement et de collaboration',
      className: 'skills-card--tools',
      skills: [
        { name: 'Git', logo: 'git.svg' },
        { name: 'GitHub', logo: 'github.svg' },
        { name: 'VS Code', logo: 'vscode.svg' },
        { name: 'Figma', logo: 'figma.svg' },
        { name: 'XAMPP', logo: 'xampp.svg' },
        { name: 'WampServer', logo: 'wampserver.svg' },
      ],
      concepts: [],
    },
  ],

  en: [
    {
      number: '01',
      icon: Code2,
      title: 'Frontend Development',
      description: 'Web interfaces and frontend integration',
      className: 'skills-card--frontend',
      skills: [
        { name: 'HTML5', logo: 'html5.svg' },
        { name: 'CSS3', logo: 'css3.svg' },
        { name: 'JavaScript', logo: 'javascript.svg' },
        { name: 'Bootstrap', logo: 'bootstrap.svg' },
        { name: 'React.js', logo: 'react.svg' },
      ],
      concepts: ['JSX'],
    },
    {
      number: '02',
      icon: Server,
      title: 'Backend Development',
      description: 'Server-side logic and backend development',
      className: 'skills-card--backend',
      skills: [
        { name: 'PHP', logo: 'php.svg' },
        { name: 'Laravel', logo: 'laravel.svg' },
      ],
      concepts: ['REST API'],
    },
    {
      number: '03',
      icon: Database,
      title: 'Database',
      description: 'Data management and manipulation',
      className: 'skills-card--database',
      skills: [
        { name: 'MySQL', logo: 'mysql.svg' },
      ],
      concepts: ['SQL'],
    },
    {
      number: '04',
      icon: ChartNoAxesCombined,
      title: 'Data Analysis',
      description: 'Programming and data manipulation',
      className: 'skills-card--data',
      skills: [
        { name: 'Python', logo: 'python.svg' },
        { name: 'Pandas', logo: 'pandas.svg' },
        { name: 'NumPy', logo: 'numpy.svg' },
        { name: 'Matplotlib', logo: 'matplotlib.svg' },
      ],
      concepts: [],
    },
    {
      number: '05',
      icon: Wrench,
      title: 'Tools & Environment',
      description: 'Development and collaboration tools',
      className: 'skills-card--tools',
      skills: [
        { name: 'Git', logo: 'git.svg' },
        { name: 'GitHub', logo: 'github.svg' },
        { name: 'VS Code', logo: 'vscode.svg' },
        { name: 'Figma', logo: 'figma.svg' },
        { name: 'XAMPP', logo: 'xampp.svg' },
        { name: 'WampServer', logo: 'wampserver.svg' },
      ],
      concepts: [],
    },
  ],
}

const allSkills = categories.fr.flatMap(
  (category) => category.skills
)

const marqueeRows = [
  allSkills.filter((_, index) => index % 2 === 0),
  allSkills.filter((_, index) => index % 2 !== 0),
]

const text = {
  fr: {
    label: 'MES COMPÉTENCES',
    title: 'Technologies & outils',
    description:
      'Un aperçu des technologies et outils que j’utilise dans mon parcours de développement et mes projets.',
    concepts: 'Concepts & environnements',
  },
  en: {
    label: 'MY SKILLS',
    title: 'Technologies & Tools',
    description:
      'An overview of the technologies and tools I use throughout my development journey and projects.',
    concepts: 'Concepts & environments',
  },
}

function MarqueeRow({ skills, reverse = false }) {
  return (
    <div
      className={`skills-marquee__row ${
        reverse ? 'skills-marquee__row--reverse' : ''
      }`}
    >
      <div className="skills-marquee__track">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="skills-marquee__group"
            aria-hidden={group === 1}
          >
            {skills.map((skill) => (
              <div
                key={`${group}-${skill.name}`}
                className="skills-marquee__item"
                title={skill.name}
              >
                <img
                  src={`${logoPath}${skill.logo}`}
                  alt={group === 0 ? `${skill.name} logo` : ''}
                  loading="lazy"
                  draggable="false"
                />

                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillChip({ skill }) {
  return (
    <div className="skills-chip" title={skill.name}>
      <span className="skills-chip__logo">
        <img
          src={`${logoPath}${skill.logo}`}
          alt={`${skill.name} logo`}
          loading="lazy"
        />
      </span>

      <span className="skills-chip__name">
        {skill.name}
      </span>

      <ArrowUpRight
        className="skills-chip__arrow"
        size={13}
        strokeWidth={1.8}
        aria-hidden="true"
      />
    </div>
  )
}

function SkillCard({ category, conceptsLabel }) {
  const Icon = category.icon

  // Track the cursor position inside the card.
  const handleMouseMove = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  const handleMouseEnter = (event) => {
    event.currentTarget.style.setProperty(
      '--spotlight-opacity',
      '1'
    )
  }

  const handleMouseLeave = (event) => {
    event.currentTarget.style.setProperty(
      '--spotlight-opacity',
      '0'
    )
  }

  return (
    <article
      className={`skills-card ${category.className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skills-card__top">
        <div className="skills-card__heading">
          <div className="skills-card__icon">
            <Icon size={20} strokeWidth={1.8} />
          </div>

          <div>
            <h3 className="skills-card__title">
              {category.title}
            </h3>

            <p className="skills-card__description">
              {category.description}
            </p>
          </div>
        </div>

        <span className="skills-card__number">
          {category.number}
        </span>
      </div>

      <div className="skills-card__content">
        <div className="skills-card__chips">
          {category.skills.map((skill) => (
            <SkillChip
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>

        {category.concepts.length > 0 && (
          <div className="skills-card__concepts">
            <span className="skills-card__concept-label">
              <Braces size={13} />
              {conceptsLabel}
            </span>

            <div className="skills-card__concept-list">
              {category.concepts.map((concept) => (
                <span key={concept}>
                  {concept}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

function Skills({ language }) {
  const isFr = language !== 'en'

  const t = isFr ? text.fr : text.en
  const currentCategories = isFr
    ? categories.fr
    : categories.en

  return (
    <section
      id="competences"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.22em] text-brand">
            {t.label}
          </span>

          <h2
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.title}
            <span className="text-brand">.</span>
          </h2>

          <p
            className="mt-4 max-w-xl text-base leading-7"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.description}
          </p>

          <div className="mt-6 h-1 w-14 rounded-full bg-brand" />
        </div>

        {/* Animated technology marquee */}
        <div
          className="skills-marquee mb-16"
          aria-label={
            isFr
              ? 'Technologies utilisées'
              : 'Technologies used'
          }
        >
          <MarqueeRow skills={marqueeRows[0]} />
          <MarqueeRow skills={marqueeRows[1]} reverse />
        </div>

        {/* Interactive Bento Grid */}
        <div className="skills-bento">
          {currentCategories.map((category) => (
            <SkillCard
              key={category.number}
              category={category}
              conceptsLabel={t.concepts}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
