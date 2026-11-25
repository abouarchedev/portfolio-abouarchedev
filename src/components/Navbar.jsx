
import { useEffect, useRef, useState } from 'react'
import {
  Sun,
  Moon,
  Menu,
  X,
  Code2,
  ArrowUpRight,
} from 'lucide-react'

function Navbar({ language, setLanguage, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')
  const [isScrolled, setIsScrolled] = useState(false)

  const navigationTargetRef = useRef(null)
  const navigationFallbackTimerRef = useRef(null)

  const translations = {
    fr: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      education: 'Formation',
      certificates: 'Certifications',
      contact: 'Contact',
      contactAction: 'Me contacter',
      navigation: 'Navigation',
    },
    en: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      certificates: 'Certificates',
      contact: 'Contact',
      contactAction: 'Get in touch',
      navigation: 'Navigation',
    },
  }

  const t = translations[language] || translations.fr

  const links = [
    { label: t.home, href: '#accueil', id: 'accueil' },
    { label: t.about, href: '#apropos', id: 'apropos' },
    { label: t.skills, href: '#competences', id: 'competences' },
    { label: t.projects, href: '#projets', id: 'projets' },
    { label: t.education, href: '#formation', id: 'formation' },
    {
      label: t.certificates,
      href: '#certifications',
      id: 'certifications',
    },
    { label: t.contact, href: '#contact', id: 'contact' },
  ]

  // Navigate to a section and preserve the selected active state
  const navigateToSection = (event, sectionId) => {
    event.preventDefault()

    const section = document.getElementById(sectionId)

    if (!section) return

    if (navigationFallbackTimerRef.current) {
      clearTimeout(navigationFallbackTimerRef.current)
      navigationFallbackTimerRef.current = null
    }

    navigationTargetRef.current = sectionId

    setActiveSection(sectionId)
    setMenuOpen(false)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  // Navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Active section detection
  useEffect(() => {
    const sectionIds = [
      'accueil',
      'apropos',
      'competences',
      'projets',
      'formation',
      'certifications',
      'contact',
    ]

    let animationFrame = null

    const updateActiveSection = () => {
      const viewportHeight = window.innerHeight
      const activationLine = viewportHeight * 0.3

      const scrollY = window.scrollY
      const documentHeight =
        document.documentElement.scrollHeight

      // Contact is active at the bottom of the page
      if (
        scrollY + viewportHeight >=
        documentHeight - 5
      ) {
        setActiveSection('contact')
        return
      }

      // Home is active at the top
      if (scrollY < 80) {
        setActiveSection('accueil')
        return
      }

      let currentSection = 'accueil'

      for (const id of sectionIds) {
        const section = document.getElementById(id)

        if (!section) continue

        const rect = section.getBoundingClientRect()

        if (rect.top <= activationLine) {
          currentSection = id
        } else {
          break
        }
      }

      setActiveSection(currentSection)
    }

    const finishNavigation = () => {
      const targetId = navigationTargetRef.current

      if (!targetId) return

      if (navigationFallbackTimerRef.current) {
        clearTimeout(navigationFallbackTimerRef.current)
        navigationFallbackTimerRef.current = null
      }

      navigationTargetRef.current = null

      // Preserve the exact section selected by the user
      setActiveSection(targetId)
    }

    const handleScroll = () => {
      // Keep the clicked section active during navigation
      if (navigationTargetRef.current) {
        setActiveSection(navigationTargetRef.current)

        if (navigationFallbackTimerRef.current) {
          clearTimeout(navigationFallbackTimerRef.current)
        }

        // Fallback when scrollend is unavailable
        navigationFallbackTimerRef.current = setTimeout(
          finishNavigation,
          700
        )

        return
      }

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame)
      }

      animationFrame = requestAnimationFrame(() => {
        updateActiveSection()
        animationFrame = null
      })
    }

    const handleScrollEnd = () => {
      finishNavigation()
    }

    const handleResize = () => {
      if (navigationTargetRef.current) {
        setActiveSection(navigationTargetRef.current)
        return
      }

      updateActiveSection()
    }

    updateActiveSection()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('scrollend', handleScrollEnd)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scrollend', handleScrollEnd)
      window.removeEventListener('resize', handleResize)

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame)
      }

      if (navigationFallbackTimerRef.current) {
        clearTimeout(navigationFallbackTimerRef.current)
      }
    }
  }, [])

  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close mobile menu with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main navigation"
        style={{ borderRadius: '9999px' }}
        className={`relative isolate mx-auto flex w-full max-w-[1100px] items-center justify-between gap-2 overflow-hidden rounded-2xl border px-3 py-2 transition-all duration-500 ease-out sm:gap-3 sm:px-5 ${
          isScrolled
            ? 'border-white/40 bg-white/30 shadow-[0_12px_40px_rgba(15,23,42,0.09),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-3xl backdrop-saturate-150 dark:border-white/15 dark:bg-slate-950/30 dark:shadow-[0_12px_40px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]'
            : 'border-white/30 bg-white/20 shadow-[0_8px_32px_rgba(15,23,42,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-3xl backdrop-saturate-150 dark:border-white/10 dark:bg-slate-950/15 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]'
        }`}
      >
        {/* Glass reflection */}
        <span className="pointer-events-none absolute inset-x-8 top-0 z-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent dark:via-white/30" />

        {/* Brand */}
        <a
          href="#accueil"
          onClick={(event) => navigateToSection(event, 'accueil')}
          className="group relative z-10 flex shrink-0 items-center gap-2.5"
          aria-label="Aymen Abouarche - Home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-blue-500/20 bg-blue-600 text-white shadow-[0_4px_14px_rgba(37,99,235,0.22)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] sm:h-10 sm:w-10">
            <Code2 size={19} strokeWidth={2.1} />
            <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
          </span>

          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-base">
              Aymen
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </span>

            <span className="mt-1 hidden text-[9px] font-semibold tracking-[0.13em] text-gray-500 sm:block dark:text-slate-400">
              ABOUARCHEDEV
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="relative z-10 hidden items-center lg:flex">
          <div className="flex items-center gap-0.5 rounded-full border border-white/30 bg-white/15 p-1 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/10">
            {links.map((link) => {
              const isActive = activeSection === link.id

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(event) =>
                    navigateToSection(event, link.id)
                  }
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative whitespace-nowrap rounded-full px-2 py-2 text-[10px] font-semibold transition-all duration-300 xl:px-2.5 xl:text-[11px] ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-[0_3px_12px_rgba(37,99,235,0.22)]'
                      : 'text-gray-700 hover:bg-white/40 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-blue-400'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="relative z-10 flex shrink-0 items-center gap-1 sm:gap-1.5">
          {/* Language */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 px-2 text-[10px] font-extrabold tracking-wide text-gray-700 backdrop-blur-lg transition-all duration-200 hover:border-white/50 hover:bg-white/35 hover:text-blue-600 sm:h-10 sm:min-w-10 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
            aria-label="Change language"
            title="Change language"
          >
            {language.toUpperCase()}
          </button>

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-gray-700 backdrop-blur-lg transition-all duration-300 hover:border-white/50 hover:bg-white/35 hover:text-blue-600 sm:h-10 sm:w-10 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
            aria-label="Change theme"
            title="Change theme"
          >
            {theme === 'light' ? (
              <Moon size={16} />
            ) : (
              <Sun size={16} />
            )}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            onClick={(event) => navigateToSection(event, 'contact')}
            className="group hidden h-9 items-center gap-1.5 rounded-full bg-blue-600 px-3 text-[11px] font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.25)] sm:inline-flex sm:h-10 sm:px-3.5 sm:text-xs"
          >
            {t.contactAction}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-gray-700 backdrop-blur-lg transition-all duration-300 hover:border-white/50 hover:bg-white/35 hover:text-blue-600 lg:hidden sm:h-10 sm:w-10 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`absolute left-1/2 top-[calc(100%+10px)] w-[calc(100%-24px)] max-w-[1100px] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/35 bg-white/25 shadow-[0_20px_60px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-3xl backdrop-saturate-150 transition-all duration-300 sm:w-[calc(100%-40px)] lg:hidden dark:border-white/10 dark:bg-slate-950/20 dark:shadow-[0_20px_60px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)] ${
          menuOpen
            ? 'visible translate-y-0 scale-100 opacity-100'
            : 'invisible -translate-y-2 scale-[0.98] opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent dark:via-white/30" />

        <div className="relative p-3 sm:p-4">
          {/* Mobile panel header */}
          <div className="mb-3 flex items-center justify-between px-2 py-2">
            <div>
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-gray-600 dark:text-slate-300">
                {t.navigation}
              </span>

              <span className="mt-1 block text-[10px] text-gray-500 dark:text-slate-400">
                Aymen Abouarche
              </span>
            </div>

            <span className="rounded-lg border border-white/40 bg-white/25 px-2.5 py-1.5 text-[10px] font-extrabold text-blue-600 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 dark:text-blue-400">
              {language.toUpperCase()}
            </span>
          </div>

          {/* Mobile links */}
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {links.map((link, index) => {
              const isActive = activeSection === link.id

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(event) =>
                    navigateToSection(event, link.id)
                  }
                  tabIndex={menuOpen ? 0 : -1}
                  aria-current={isActive ? 'location' : undefined}
                  className={`flex items-center justify-between rounded-xl border px-3.5 py-3 transition-all duration-200 ${
                    isActive
                      ? 'border-blue-200/50 bg-blue-50/60 text-blue-700 dark:border-blue-900/40 dark:bg-blue-500/10 dark:text-blue-400'
                      : 'border-transparent text-gray-700 hover:border-white/40 hover:bg-white/25 hover:text-blue-600 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/5 dark:hover:text-blue-400'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-gray-500 dark:text-slate-500">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold">
                      {link.label}
                    </span>
                  </span>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </a>
              )
            })}
          </div>

          {/* Mobile contact CTA */}
          <a
            href="#contact"
            onClick={(event) => navigateToSection(event, 'contact')}
            tabIndex={menuOpen ? 0 : -1}
            className="group mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(37,99,235,0.2)] transition hover:bg-blue-700"
          >
            {t.contactAction}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
