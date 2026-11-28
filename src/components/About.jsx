
import {
  Code2,
  GraduationCap,
  Target,
  ArrowUpRight,
  Layers3,
  Database,
  Lightbulb,
  BriefcaseBusiness,
} from 'lucide-react'

function About({ language }) {
  const content = {
    fr: {
      label: 'À PROPOS',
      title: 'Derrière le code,',
      titleAccent: 'une ambition.',
      intro:
        'Ce qui me plaît dans le développement web, c’est de partir d’une idée, de réfléchir à la façon de la présenter, puis de la voir prendre forme dans un site qui fonctionne.',
      name: 'Aymen Abouarche',
      description:
        'Je suis étudiant en deuxième année de Développement Web Full Stack à l’ISTA Roches Noires – OFPPT, à Casablanca.',
      paragraph:
        'Pendant ma formation, j’apprends à construire un projet web dans son ensemble. J’aime autant travailler sur l’apparence d’une page que réfléchir à ce qui se passe derrière : les fonctionnalités, les échanges avec une base de données et la logique qui relie tout. J’essaie de mettre ces connaissances en pratique dans mes projets, tout en prenant le temps de comprendre ce que je fais.',
      objective:
        'Aujourd’hui, j’aimerais rejoindre une équipe dans le cadre d’un stage d’application. C’est l’occasion pour moi de découvrir le quotidien d’un développeur, de participer à de vrais projets et de voir comment les choses se passent en dehors de la formation.',
      currently: 'FORMATION ACTUELLE',
      school: 'ISTA Roches Noires',
      program: 'Développement Web Full Stack',
      location: 'Casablanca, Maroc',
      focus: 'CE QUI M’INTÉRESSE',
      focusTitle: 'Les sujets que j’aime explorer',
      cards: [
        {
          icon: Code2,
          number: '01',
          title: 'Développement Web',
          description:
            'J’aime créer des interfaces claires et agréables à utiliser. Ce qui m’intéresse surtout, c’est de comprendre comment passer d’une simple idée à une page web complète, avec des fonctionnalités utiles.',
          tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        },
        {
          icon: Database,
          number: '02',
          title: 'Données & logique',
          description:
            'Je suis aussi curieux de ce qui se passe derrière une interface : organiser les informations, travailler avec les bases de données et comprendre comment les différentes parties d’une application communiquent.',
          tags: ['MySQL', 'SQL', 'Python'],
        },
        {
          icon: Lightbulb,
          number: '03',
          title: 'Apprendre & explorer',
          description:
            'J’aime découvrir de nouveaux outils, essayer différentes approches et voir ce qu’ils peuvent apporter à mes projets. En ce moment, je développe notamment mes connaissances en React.js et Laravel.',
          tags: ['React.js', 'Laravel', 'Git'],
        },
      ],
      nextLabel: 'LA SUITE DE MON PARCOURS',
      nextTitle: 'De l’apprentissage à la pratique.',
      nextText:
        'Je ne veux pas seulement apprendre des notions et passer à la suite. J’aimerais les utiliser dans de vrais projets, comprendre les méthodes de travail d’une équipe et gagner peu à peu en autonomie.',
      journeyLabel: 'LES PROCHAINES ÉTAPES',
      currentGoal: 'MON OBJECTIF ACTUEL',
      journey: [
        {
          number: '01',
          title: 'Stage',
          description:
            'Découvrir le travail en équipe, participer aux tâches d’un projet et apprendre au contact de développeurs.',
        },
        {
          number: '02',
          title: 'Expérience concrète',
          description:
            'Prendre confiance, améliorer ma façon de travailler et mieux comprendre toutes les étapes d’un projet.',
        },
        {
          number: '03',
          title: 'Continuer à évoluer',
          description:
            'Approfondir mes connaissances, explorer de nouvelles technologies et relever des projets plus intéressants.',
        },
      ],
      internship: 'À la recherche d’un stage',
      nextStep: '01 — PROCHAINE ÉTAPE',
    },

    en: {
      label: 'ABOUT ME',
      title: 'Beyond the code,',
      titleAccent: 'a clear ambition.',
      intro:
        'What I enjoy about web development is starting with an idea, thinking about how to bring it to life, and then seeing it become a website that actually works.',
      name: 'Aymen Abouarche',
      description:
        'I am a second-year Full Stack Web Development student at ISTA Roches Noires – OFPPT, in Casablanca.',
      paragraph:
        'During my studies, I am learning how to build a web project from different sides. I enjoy working on how a page looks, but I am just as curious about what happens behind it: its features, database connections and the logic that brings everything together. I try to put what I learn into practice through my projects and take the time to understand how things work.',
      objective:
        'At this stage, I would like to join a team for an application internship. It would give me the chance to discover a developer’s daily work, take part in real projects and see how things are done outside the classroom.',
      currently: 'CURRENT EDUCATION',
      school: 'ISTA Roches Noires',
      program: 'Full Stack Web Development',
      location: 'Casablanca, Morocco',
      focus: 'WHAT INTERESTS ME',
      focusTitle: 'Things I enjoy exploring',
      cards: [
        {
          icon: Code2,
          number: '01',
          title: 'Web Development',
          description:
            'I enjoy building interfaces that are clear and easy to use. What interests me most is turning a simple idea into a complete web page with features that serve a real purpose.',
          tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        },
        {
          icon: Database,
          number: '02',
          title: 'Data & Logic',
          description:
            'I am also curious about what happens behind an interface: organizing information, working with databases and understanding how different parts of an application communicate.',
          tags: ['MySQL', 'SQL', 'Python'],
        },
        {
          icon: Lightbulb,
          number: '03',
          title: 'Learning & Exploring',
          description:
            'I enjoy discovering new tools, trying different approaches and seeing how they can improve my projects. Right now, I am also building my knowledge of React.js and Laravel.',
          tags: ['React.js', 'Laravel', 'Git'],
        },
      ],
      nextLabel: "WHAT'S NEXT FOR ME",
      nextTitle: 'From learning to doing.',
      nextText:
        'I do not want to just learn new concepts and move on. I want to use them in real projects, understand how a team works and gradually become more independent in what I do.',
      journeyLabel: 'WHAT I WANT TO WORK TOWARDS',
      currentGoal: 'CURRENT GOAL',
      journey: [
        {
          number: '01',
          title: 'Internship',
          description:
            'Experience teamwork, contribute to project tasks and learn from other developers.',
        },
        {
          number: '02',
          title: 'Real-world experience',
          description:
            'Build confidence, improve the way I work and understand the different stages of a project.',
        },
        {
          number: '03',
          title: 'Keep growing',
          description:
            'Deepen my knowledge, explore new technologies and take on more interesting projects.',
        },
      ],
      internship: 'Looking for an internship',
      nextStep: '01 — NEXT STEP',
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
                {t.focusTitle}
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

        {/* Next step */}
        <div className="group relative mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-900 sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-blue-500/[0.06] blur-3xl transition-opacity duration-500 group-hover:bg-blue-500/[0.10]" />

          <div className="relative">

            {/* Heading and introduction */}
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                    <Target size={24} />
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400">
                    {t.nextLabel}
                  </span>
                </div>

                <h3 className="mt-6 max-w-sm text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  {t.nextTitle}
                </h3>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-blue-600" />
                  <span className="text-xs font-semibold text-gray-400 dark:text-slate-500">
                    {t.nextStep}
                  </span>
                </div>
              </div>

              <p className="text-base leading-8 text-gray-600 dark:text-slate-300 sm:text-lg">
                {t.nextText}
              </p>
            </div>

            {/* Three-step journey */}
            <div className="mt-12 border-t border-gray-100 pt-8 dark:border-slate-800">
              <p className="mb-7 text-[11px] font-bold tracking-[0.2em] text-gray-400 dark:text-slate-500">
                {t.journeyLabel}
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                {t.journey.map((step, index) => (
                  <div
                    key={step.number}
                    className={`relative rounded-2xl border p-5 transition-colors duration-300 ${
                      index === 0
                        ? 'border-blue-200 bg-blue-50/70 dark:border-blue-900/70 dark:bg-blue-950/30'
                        : 'border-gray-100 bg-gray-50/70 dark:border-slate-800 dark:bg-slate-900/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`text-sm font-bold tracking-wider ${
                          index === 0
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-400 dark:text-slate-600'
                        }`}
                      >
                        {step.number}
                      </span>

                      {index === 0 && (
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-[9px] font-bold tracking-wider text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                          {t.currentGoal}
                        </span>
                      )}
                    </div>

                    <h4
                      className={`mt-5 text-lg font-bold ${
                        index === 0
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-800 dark:text-slate-200'
                      }`}
                    >
                      {step.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-gray-500 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship status */}
            <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6 dark:border-slate-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                <BriefcaseBusiness size={19} />
              </div>

              <span className="text-sm font-semibold text-gray-800 dark:text-slate-200">
                {t.internship}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
