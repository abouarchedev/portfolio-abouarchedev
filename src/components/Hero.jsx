
import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Download,
  MapPin,
  Code2,
  GraduationCap,
  Sparkles,
} from 'lucide-react'

function Hero({ language }) {
  const [imageError, setImageError] = useState(false)

  const content = {
    fr: {
      availability: 'Disponible pour un stage',
      greeting: 'BONJOUR, JE SUIS',
      firstName: 'Aymen',
      lastName: 'Abouarche.',
      role: 'Junior Développeur Web Full Stack',
      description:
        'Je développe des applications et des expériences web modernes, en combinant interfaces utilisateur, logique métier et gestion des données.',
      contact: 'Discutons ensemble',
      cv: 'Télécharger mon CV',
      location: 'Casablanca, Maroc',
      projects: 'Projets réalisés',
      certificates: 'Certifications',
      scroll: 'Découvrir mon univers',
      currently: 'FORMATION ACTUELLE',
      study: 'Développement Web Full Stack',
      school: 'ISTA Roches Noires · OFPPT',
      profile: 'Développeur en formation',
      experience: 'Projets personnels & académiques',
    },
    en: {
      availability: 'Available for an internship',
      greeting: 'HELLO, I AM',
      firstName: 'Aymen',
      lastName: 'Abouarche.',
      role: 'Junior Full Stack Web Developer',
      description:
        'I build modern web applications and experiences by combining user interfaces, business logic and data management.',
      contact: "Let's talk",
      cv: 'Download my CV',
      location: 'Casablanca, Morocco',
      projects: 'Completed projects',
      certificates: 'Certifications',
      scroll: 'Explore my work',
      currently: 'CURRENT EDUCATION',
      study: 'Full Stack Web Development',
      school: 'ISTA Roches Noires · OFPPT',
      profile: 'Developer in training',
      experience: 'Personal & academic projects',
    },
  }

  const t = content[language] || content.fr

  const handleContactClick = (event) => {
    event.preventDefault()

    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pt-40 lg:min-h-[100svh] lg:px-10 lg:pb-12 lg:pt-24 xl:px-12"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-48 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-blue-500/[0.07] blur-[100px] dark:bg-blue-500/[0.12]" />

      <div className="pointer-events-none absolute -bottom-36 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-500/[0.05] blur-[90px] dark:bg-indigo-500/[0.08]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[1.12fr_0.88fr] lg:gap-8 xl:gap-12">
        {/* Introduction */}
        <div className="order-2 lg:order-1">
          <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400 lg:mb-2">
            <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
            {t.greeting}
          </p>

          <h1 className="max-w-3xl text-[clamp(3.5rem,8vw,6.7rem)] font-extrabold leading-[0.98] tracking-[-0.075em] text-gray-950 dark:text-white lg:text-[clamp(2.8rem,4.5vw,4.5rem)] xl:text-[clamp(3.5rem,5vw,5rem)]">
            {t.firstName}
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              {t.lastName}
            </span>
          </h1>

          <div className="mt-8 flex items-start gap-3.5 lg:mt-4 lg:gap-3">
            <span className="mt-1 h-8 w-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400 lg:h-7" />

            <div>
              <h2 className="max-w-xl text-xl font-bold leading-snug tracking-tight text-gray-800 dark:text-slate-100 sm:text-2xl lg:text-lg xl:text-xl">
                {t.role}
              </h2>

              <p className="mt-2 text-xs font-medium text-gray-400 dark:text-slate-500 lg:mt-1">
                {t.experience}
              </p>
            </div>
          </div>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-500 dark:text-slate-400 sm:text-[17px] lg:mt-4 lg:text-sm lg:leading-6 xl:text-[15px] xl:leading-7">
            {t.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-gray-500 dark:text-slate-400 lg:mt-3 lg:text-xs">
            <span className="inline-flex items-center gap-2">
              <MapPin
                size={16}
                className="text-blue-600 dark:text-blue-400"
              />
              {t.location}
            </span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3 lg:mt-5 lg:gap-2.5">
            {/* Contact button */}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/25 lg:min-h-11 lg:gap-2 lg:px-4 lg:py-2.5 lg:text-xs xl:px-5"
            >
              <Mail size={18} className="lg:h-4 lg:w-4" />
              {t.contact}
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:h-4 lg:w-4"
              />
            </a>

            <a
              href="/documents/CV-Aymen-Abouarche.pdf"
              download="CV-Aymen-Abouarche.pdf"
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white/70 px-6 py-4 text-sm font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-blue-800 dark:hover:bg-blue-950/40 dark:hover:text-blue-400 lg:min-h-11 lg:gap-2 lg:px-4 lg:py-2.5 lg:text-xs xl:px-5"
            >
              <Download size={17} className="lg:h-4 lg:w-4" />
              {t.cv}
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-gray-200/80 pt-6 text-sm font-semibold dark:border-slate-800 lg:mt-5 lg:gap-x-6 lg:pt-3 lg:text-xs">
            <a
              href="https://github.com/abouarchedev"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <img
                src="/images/icons/github.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none h-4 w-4 shrink-0 dark:invert"
              />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aymen-abouarche-ba1971434/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <img
                src="/images/icons/linkedin.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none h-4 w-4 shrink-0"
              />
              LinkedIn
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hi%40abouarchedev.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <img
                src="/images/icons/email.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none h-4 w-4 shrink-0 dark:invert"
              />
              Email
            </a>
          </div>
        </div>

        {/* Profile visual */}
        <div className="order-1 mx-auto w-full max-w-[430px] lg:order-2 lg:max-w-[300px] xl:max-w-[350px]">
          <div className="relative mx-auto w-full">
            {/* Availability badge */}
            <div className="absolute -top-12 right-[4%] z-20 inline-flex items-center gap-2.5 rounded-full border border-emerald-200/80 bg-emerald-50/95 px-4 py-2.5 text-xs font-bold tracking-wide text-emerald-700 shadow-lg shadow-emerald-900/5 backdrop-blur-xl dark:border-emerald-900/60 dark:bg-emerald-950/80 dark:text-emerald-400 lg:-top-10 lg:px-3.5 lg:py-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.availability}
            </div>

            {/* Decorative ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[105%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[55px] dark:bg-blue-500/[0.12]" />

            {/* Outer circle */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[91%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/80 dark:border-blue-900/70" />

            {/* Secondary circle */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[98%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gray-200 dark:border-slate-700/80" />

            {/* Profile image */}
            <div className="relative mx-auto aspect-square w-[82%] overflow-hidden rounded-full bg-gray-100 shadow-[0_25px_80px_rgba(37,99,235,0.18)] ring-1 ring-blue-200/70 dark:bg-slate-900 dark:ring-blue-900/50">
              {!imageError ? (
                <img
                  src="/images/profile.jpg"
                  alt="Portrait de Aymen Abouarche"
                  onError={() => setImageError(true)}
                  className="h-full w-full scale-[1.12] rounded-full object-cover object-center"
                  fetchPriority="high"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-100 via-white to-indigo-100 dark:from-blue-950 dark:via-slate-900 dark:to-indigo-950">
                  <span className="text-7xl font-black tracking-tighter text-blue-600 dark:text-blue-400 sm:text-8xl">
                    AA
                  </span>

                  <span className="mt-3 text-xs font-semibold text-gray-500 dark:text-slate-400">
                    Aymen Abouarche
                  </span>
                </div>
              )}
            </div>

            {/* Floating technology card */}
            <div className="absolute right-0 top-[17%] z-10 flex items-center gap-2.5 rounded-2xl border border-gray-200/80 bg-white/95 px-4 py-3.5 shadow-xl shadow-gray-900/5 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95 sm:-right-3 lg:-right-7 lg:scale-[0.88] lg:origin-right lg:gap-2 lg:px-3 lg:py-2.5 xl:-right-9">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 lg:h-8 lg:w-8">
                <Code2 size={19} />
              </span>

              <div>
                <p className="text-xs font-extrabold text-gray-900 dark:text-white">
                  Full Stack
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-gray-400 dark:text-slate-500">
                  Web Development
                </p>
              </div>
            </div>

            {/* Floating education card */}
            <div className="absolute -bottom-5 left-0 z-10 max-w-[275px] rounded-2xl border border-gray-200/80 bg-white/95 p-4 shadow-xl shadow-gray-900/5 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95 sm:-left-5 sm:p-5 lg:-bottom-4 lg:-left-7 lg:max-w-[220px] lg:scale-[0.88] lg:origin-left lg:p-3 xl:-left-9">
              <div className="flex items-center gap-3 lg:gap-2">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 lg:h-9 lg:w-9">
                  <GraduationCap size={22} />
                </span>

                <div className="min-w-0">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400">
                    {t.currently}
                  </p>

                  <p className="mt-1 text-xs font-bold leading-snug text-gray-900 dark:text-white">
                    {t.study}
                  </p>

                  <p className="mt-1 text-[10px] text-gray-500 dark:text-slate-400">
                    {t.school}
                  </p>
                </div>
              </div>
            </div>

            {/* Small decorative detail */}
            <div className="absolute left-[12%] top-[10%] flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600 shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400 lg:h-8 lg:w-8">
              <Sparkles size={18} className="lg:h-4 lg:w-4" />
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-7 lg:gap-2.5">
            <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 lg:rounded-xl lg:p-3">
              <p className="text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white lg:text-2xl">
                03<span className="text-blue-600 dark:text-blue-400">.</span>
              </p>

              <p className="mt-2 text-xs font-semibold text-gray-500 dark:text-slate-400 lg:mt-1 lg:text-[10px]">
                {t.projects}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 lg:rounded-xl lg:p-3">
              <p className="text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white lg:text-2xl">
                08<span className="text-blue-600 dark:text-blue-400">.</span>
              </p>

              <p className="mt-2 text-xs font-semibold text-gray-500 dark:text-slate-400 lg:mt-1 lg:text-[10px]">
                {t.certificates}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mx-auto mt-24 flex max-w-7xl justify-center lg:absolute lg:bottom-3 lg:left-0 lg:right-0 lg:mt-0">
        <a
          href="#apropos"
          className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 transition hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 sm:text-xs"
        >
          {t.scroll}

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-300 group-hover:bg-blue-50 dark:border-slate-700 dark:group-hover:border-blue-900 dark:group-hover:bg-blue-950/50">
            <ArrowDown
              size={15}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </span>
        </a>
      </div>
    </section>
  )
}

export default Hero
