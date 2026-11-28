
import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Download,
  MapPin,
  Code2,
  GraduationCap,
} from 'lucide-react'
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'motion/react'

function Hero({ language }) {
  const [imageError, setImageError] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const spotlightX = useMotionValue(50)
  const spotlightY = useMotionValue(50)

  const smoothX = useSpring(spotlightX, {
    stiffness: 100,
    damping: 28,
    mass: 0.6,
  })

  const smoothY = useSpring(spotlightY, {
    stiffness: 100,
    damping: 28,
    mass: 0.6,
  })

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      260px circle at ${smoothX}% ${smoothY}%,
      rgba(59, 130, 246, 0.14),
      rgba(99, 102, 241, 0.08) 38%,
      transparent 75%
    )
  `

  const handleSpotlightMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()

    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100

    spotlightX.set(x)
    spotlightY.set(y)
  }

  const handleSpotlightLeave = () => {
    spotlightX.set(50)
    spotlightY.set(50)
  }

  const content = {
    fr: {
      availability: 'Disponible pour un stage',
      greeting: 'BONJOUR, JE SUIS',
      firstName: 'Aymen',
      lastName: 'Abouarche.',
      role: 'Junior Développeur Web Full Stack.',
      technologies: 'JavaScript · React.js · PHP · Python...',
      description:
        'Je me forme au développement web Full Stack et j’aime voir une idée prendre forme dans un site qui fonctionne. Je travaille autant sur les interfaces que sur les fonctionnalités et les données, en avançant étape par étape et en apprenant de chaque projet.',
      contact: 'Me contacter',
      cv: 'Télécharger mon CV',
      location: 'Casablanca, Maroc',
      projects: 'Projects · More on GitHub',
      certificates: 'Certifications',
      scroll: 'Découvrir mes projets',
      currently: 'FORMATION ACTUELLE',
      study: 'Développement Web Full Stack',
      school: 'ISTA Roches Noires · OFPPT',
      experience:
        'Je développe mes compétences grâce à des projets personnels et académiques.',
    },
    en: {
      availability: 'Available for an internship',
      greeting: 'HELLO, I AM',
      firstName: 'Aymen',
      lastName: 'Abouarche.',
      role: 'Junior Full Stack Web Developer.',
      technologies: 'JavaScript · React.js · PHP · Python...',
      description:
        'I’m studying Full Stack Web Development and enjoy turning an idea into a website that actually works. I work on both the user interface and the features behind it, as well as the data, taking things step by step and learning something new with each project.',
      contact: 'Get in touch',
      cv: 'Download my CV',
      location: 'Casablanca, Morocco',
      projects: 'Projects · More on GitHub',
      certificates: 'Certifications',
      scroll: 'Explore my projects',
      currently: 'CURRENT EDUCATION',
      study: 'Full Stack Web Development',
      school: 'ISTA Roches Noires · OFPPT',
      experience: 'Developing my skills with personal & academic projects',
    },
  }

  const t = content[language] || content.fr

  const phrases = [t.role, t.technologies]
  const currentPhrase = phrases[phraseIndex]

  useEffect(() => {
    let timeout

    if (!isDeleting && typedText.length < currentPhrase.length) {
      timeout = window.setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1))
      }, 75)
    } else if (!isDeleting && typedText.length === currentPhrase.length) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true)
      }, 1600)
    } else if (isDeleting && typedText.length > 0) {
      timeout = window.setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length - 1))
      }, 32)
    } else if (isDeleting && typedText.length === 0) {
      timeout = window.setTimeout(() => {
        setPhraseIndex((previous) => (previous + 1) % phrases.length)
        setIsDeleting(false)
      }, 300)
    }

    return () => window.clearTimeout(timeout)
  }, [currentPhrase, typedText, isDeleting, phrases.length])

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

      <div className="pointer-events-none absolute -bottom-36 -left-40 h-[400px] w-[400px] rounded-full bg-indigo-500/[0.05] blur-[90px] dark:bg-indigo-500/[0.08]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[1.12fr_0.88fr] lg:gap-8 xl:gap-12">
        {/* Introduction */}
        <div className="order-2 lg:order-1">
          <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400 lg:mb-1.5">
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

          <div className="mt-6 flex items-start gap-3.5 lg:mt-2.5 lg:gap-3">
            <span className="mt-1 h-8 w-1 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400 lg:h-7" />

            <div className="min-w-0 flex-1">
              <h2 className="flex min-h-[3.5rem] max-w-xl items-start text-xl font-bold leading-snug tracking-tight text-gray-800 dark:text-slate-100 sm:min-h-[2.5rem] sm:text-2xl lg:min-h-[2.5rem] lg:text-lg xl:text-xl">
                <span className="sr-only">
                  {t.role}. {t.technologies}
                </span>

                <span aria-hidden="true" className="break-words">
                  {typedText}
                  <motion.span
                    className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] rounded-full bg-blue-600 dark:bg-blue-400"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </span>
              </h2>

              {/* Experience description */}
              <p className="mt-1.5 max-w-lg text-xs font-semibold leading-relaxed text-gray-600 dark:text-slate-300 lg:mt-1 lg:text-[11px]">
                {t.experience}
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-gray-600 dark:text-slate-300 sm:text-[17px] lg:mt-2.5 lg:text-sm lg:leading-6 xl:text-[15px] xl:leading-7">
            {t.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-gray-600 dark:text-slate-300 lg:mt-1.5 lg:text-xs">
            <span className="inline-flex items-center gap-2">
              <MapPin
                size={16}
                className="text-blue-600 dark:text-blue-400"
              />
              {t.location}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-3 lg:gap-2.5">
            <a
              href="#contact"
              onClick={handleContactClick}
              style={{ color: '#FFFFFF' }}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold !text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/25 lg:min-h-11 lg:gap-2 lg:px-4 lg:py-2.5 lg:text-xs xl:px-5"
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
          <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-gray-200/80 pt-3 text-xs font-semibold text-gray-700 dark:border-slate-700/80 dark:text-slate-200 lg:mt-2.5 lg:gap-x-6 lg:pt-2.5 lg:text-[11px]">
            <a
              href="https://github.com/abouarchedev"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 rounded-lg text-gray-700 transition-colors hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
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
              className="relative z-10 inline-flex items-center gap-2 rounded-lg text-gray-700 transition-colors hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
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
              className="relative z-10 inline-flex items-center gap-2 rounded-lg text-gray-700 transition-colors hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
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
            <div className="absolute -top-12 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-emerald-300 bg-emerald-100 px-4 py-2.5 text-xs font-bold tracking-wide text-emerald-800 shadow-[0_4px_18px_rgba(16,185,129,0.14)] backdrop-blur-xl dark:border-emerald-500/30 dark:bg-emerald-950/80 dark:text-emerald-300 dark:shadow-[0_0_25px_rgba(16,185,129,0.18)] lg:-top-10 lg:px-3.5 lg:py-2">
              <motion.span
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_9px_rgba(16,185,129,0.9)]"
                animate={{
                  opacity: [1, 0.12, 1],
                }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
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
                  src="/images/profile.webp"
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

            {/* Editorial education card */}
            <div className="absolute -bottom-4 left-0 z-10 max-w-[250px] sm:-left-4 lg:-bottom-3 lg:-left-6 lg:max-w-[205px] lg:scale-[0.84] lg:origin-left xl:-left-8">
              <motion.div
                onPointerMove={handleSpotlightMove}
                onPointerLeave={handleSpotlightLeave}
                whileHover={{ y: -3 }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 24,
                }}
                style={{ borderRadius: '12px' }}
                className="relative isolate overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-[0_12px_35px_rgba(15,23,42,0.07)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/95"
              >
                {/* Soft interactive light */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0"
                  style={{ background: spotlightBackground }}
                />

                {/* Blue side accent */}
                <div className="absolute bottom-0 left-0 top-0 z-10 w-[3px] bg-gradient-to-b from-blue-500 via-sky-400 to-indigo-500" />

                {/* Education card content */}
                <div className="relative z-10 flex items-stretch gap-3 p-3 pl-4 sm:p-4 sm:pl-5 lg:gap-2 lg:p-2.5 lg:pl-3">
                  <div className="flex shrink-0 items-center">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100/80 text-blue-600 dark:from-blue-500/15 dark:to-indigo-500/10 dark:text-blue-400 lg:h-9 lg:w-9">
                      <GraduationCap
                        size={21}
                        strokeWidth={1.8}
                        className="lg:h-[18px] lg:w-[18px]"
                      />

                      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border-2 border-white bg-blue-500 dark:border-slate-900" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1 self-center">
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                      {t.currently}
                    </p>

                    <p className="mt-1 text-xs font-bold leading-snug tracking-tight text-slate-900 dark:text-white">
                      {t.study}
                    </p>

                    <div className="mt-1.5 h-px w-7 bg-blue-200 dark:bg-blue-900" />

                    <p className="mt-1.5 text-[9px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                      {t.school}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating code element */}
            <motion.div
              initial={false}
              whileHover={{
                y: -5,
                rotate: -5,
                scale: 1.06,
              }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 18,
              }}
              aria-hidden="true"
              className="absolute left-[12%] top-[10%] z-10"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-[17px] border border-blue-200/70 bg-gradient-to-br from-white via-white to-blue-50/80 text-blue-600 shadow-[0_10px_30px_rgba(37,99,235,0.13)] dark:border-slate-700/80 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950/50 dark:text-blue-400 lg:h-10 lg:w-10">
                <div className="absolute inset-[4px] rounded-[12px] border border-blue-100/80 dark:border-blue-900/50" />

                <Code2
                  size={22}
                  strokeWidth={2}
                  className="relative z-10 lg:h-5 lg:w-5"
                />

                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-slate-900" />
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-7 lg:gap-2.5">
            <a
              href="https://github.com/abouarchedev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View more projects on GitHub"
              className="group rounded-2xl border border-gray-200/80 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-blue-900 lg:rounded-xl lg:p-3"
            >
              <p className="text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white lg:text-2xl">
                03<span className="text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-400">+</span>
              </p>

              <p className="mt-2 text-xs font-semibold text-gray-500 transition-colors group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400 lg:mt-1 lg:text-[10px]">
                {t.projects}
              </p>
            </a>

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
      <div className="mx-auto mt-24 flex max-w-7xl justify-center lg:absolute lg:bottom-16 lg:left-0 lg:right-0 lg:mt-0">
        <a
          href="#apropos"
          className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 transition hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 sm:text-xs"
        >
          {t.scroll}

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-600 bg-blue-600 text-white transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-700 group-hover:bg-blue-700 dark:border-white dark:bg-white dark:text-blue-600 dark:group-hover:border-slate-100 dark:group-hover:bg-slate-100">
            <ArrowDown
              size={15}
              className="text-white transition-transform duration-300 group-hover:translate-y-0.5 dark:text-blue-600"
            />
          </span>
        </a>
      </div>
    </section>
  )
}

export default Hero
