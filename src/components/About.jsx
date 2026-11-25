
import {
  Code2,
  GraduationCap,
  Target,
  ArrowUpRight,
  Layers3,
  Database,
  Lightbulb,
} from 'lucide-react'

function About({ language }) {
  const content = {
    fr: {
      label: 'À PROPOS',
      title: 'Derrière le code,',
      titleAccent: 'une ambition.',
      intro:
        'Je suis un jeune développeur passionné par la création de solutions web utiles, modernes et bien structurées.',
      name: 'Aymen Abouarche',
      description:
        'Actuellement en deuxième année de Développement Web Full Stack à l’ISTA Roches Noires – OFPPT, à Casablanca.',
      paragraph:
        'Mon parcours me permet de découvrir les différentes étapes de création d’une application web : concevoir une interface, développer ses fonctionnalités, manipuler les données et connecter les différentes parties du projet.',
      objective:
        'Je cherche aujourd’hui un stage d’application pour mettre mes connaissances en pratique, apprendre au contact d’une équipe et participer à des projets concrets.',
      currently: 'FORMATION ACTUELLE',
      school: 'ISTA Roches Noires',
      program: 'Développement Web Full Stack',
      location: 'Casablanca, Maroc',
      focus: 'DOMAINES D’INTÉRÊT',
      cards: [
        {
          icon: Code2,
          number: '01',
          title: 'Développement Web',
          description:
            'Création d’interfaces et développement de fonctionnalités frontend et backend.',
          tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        },
        {
          icon: Database,
          number: '02',
          title: 'Données & logique',
          description:
            'Manipulation des bases de données et organisation de la logique des applications.',
          tags: ['MySQL', 'SQL', 'Python'],
        },
        {
          icon: Lightbulb,
          number: '03',
          title: 'Apprentissage continu',
          description:
            'Découverte de nouvelles technologies et mise en pratique à travers des projets.',
          tags: ['React.js', 'Laravel', 'Git'],
        },
      ],
      goalLabel: 'MON OBJECTIF',
      goal:
        'Passer de la formation à l’expérience professionnelle, avec curiosité, rigueur et envie de progresser.',
      opportunity: 'Ouvert aux opportunités de stage',
    },
    en: {
      label: 'ABOUT ME',
      title: 'Beyond the code,',
      titleAccent: 'a clear ambition.',
      intro:
        'I am a young developer passionate about building useful, modern and well-structured web solutions.',
      name: 'Aymen Abouarche',
      description:
        'Currently in my second year of Full Stack Web Development at ISTA Roches Noires – OFPPT, in Casablanca.',
      paragraph:
        'My studies allow me to explore the different stages of building a web application: designing an interface, developing its features, managing data and connecting the different parts of a project.',
      objective:
        'I am currently looking for an application internship to put my knowledge into practice, learn from a team and contribute to real projects.',
      currently: 'CURRENT EDUCATION',
      school: 'ISTA Roches Noires',
      program: 'Full Stack Web Development',
      location: 'Casablanca, Morocco',
      focus: 'AREAS OF INTEREST',
      cards: [
        {
          icon: Code2,
          number: '01',
          title: 'Web Development',
          description:
            'Building interfaces and developing frontend and backend features.',
          tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        },
        {
          icon: Database,
          number: '02',
          title: 'Data & Logic',
          description:
            'Working with databases and organizing application logic.',
          tags: ['MySQL', 'SQL', 'Python'],
        },
        {
          icon: Lightbulb,
          number: '03',
          title: 'Continuous Learning',
          description:
            'Exploring new technologies and applying them through projects.',
          tags: ['React.js', 'Laravel', 'Git'],
        },
      ],
      goalLabel: 'MY OBJECTIVE',
      goal:
        'Moving from education to professional experience with curiosity, discipline and a desire to improve.',
      opportunity: 'Open to internship opportunities',
    },
  }

  const t = content[language] || content.fr

  return (
    <section
      id="apropos"
      className="relative overflow-hidden bg-gray-50 px-5 py-24 dark:bg-slate-900/60 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-blue-600" />
            <span className="text-xs font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400">
              {t.label}
            </span>
          </div>

          <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t.title}
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              {t.titleAccent}
            </span>
          </h2>
        </div>

        {/* Introduction and education */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">

          {/* Main introduction */}
          <div>
            <p className="max-w-2xl text-2xl font-semibold leading-relaxed tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              {t.intro}
            </p>

            <h3 className="mt-8 text-lg font-bold text-blue-600 dark:text-blue-400">
              {t.name}
            </h3>

            <p className="mt-3 max-w-2xl text-base font-medium leading-8 text-gray-700 dark:text-slate-300">
              {t.description}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500 dark:text-slate-400">
              {t.paragraph}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500 dark:text-slate-400">
              {t.objective}
            </p>
          </div>

          {/* Education card */}
          <aside className="h-fit rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                <GraduationCap size={25} />
              </div>

              <span className="text-xs font-bold tracking-widest text-gray-400 dark:text-slate-500">
                2025 — 2027
              </span>
            </div>

            <p className="mt-8 text-[11px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {t.currently}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
              {t.school}
            </h3>

            <p className="mt-2 leading-7 text-gray-500 dark:text-slate-400">
              {t.program}
            </p>

            <div className="mt-6 flex items-center gap-2 border-t border-gray-100 pt-5 text-sm text-gray-500 dark:border-slate-800 dark:text-slate-400">
              <GraduationCap size={16} />
              {t.location}
            </div>
          </aside>
        </div>

        {/* Areas of interest */}
        <div className="mt-24">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-blue-600 dark:text-blue-400">
                {t.focus}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                {language === 'en' ? 'What I focus on' : 'Ce qui me motive'}
              </h3>
            </div>

            <Layers3 className="text-blue-600 dark:text-blue-400" size={28} />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {t.cards.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-900"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/50 dark:text-blue-400">
                      <Icon size={23} />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-gray-300 dark:text-slate-700">
                      / {item.number}
                    </span>
                  </div>

                  <h4 className="mt-8 text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-gray-500 dark:text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-[11px] font-semibold text-gray-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="absolute right-7 top-7 text-gray-300 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600 dark:text-slate-700 dark:group-hover:text-blue-400"
                  />
                </article>
              )
            })}
          </div>
        </div>

        {/* Career objective */}
        <div className="mt-16 flex flex-col gap-6 rounded-3xl bg-blue-600 p-7 text-white shadow-xl shadow-blue-600/10 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-blue-100">
              {t.goalLabel}
            </p>

            <p className="mt-3 text-lg font-semibold leading-8 sm:text-xl">
              {t.goal}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-white/25 bg-white/10 px-4 py-3 text-xs font-semibold text-white sm:self-center">
            <Target size={17} />
            {t.opportunity}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
