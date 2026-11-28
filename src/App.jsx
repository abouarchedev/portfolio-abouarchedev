
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { Hand } from 'lucide-react'

import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Preloader({ onComplete, language }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  const content = {
    fr: {
      loading: 'Chargement',
      description: 'Préparation de votre expérience',
      footer: 'DÉVELOPPEMENT WEB FULL STACK',
    },
    en: {
      loading: 'Loading',
      description: 'Preparing your experience',
      footer: 'FULL STACK WEB DEVELOPMENT',
    },
  }

  const text = content[language] || content.en

  useEffect(() => {
    let animationFrame
    let exitTimeout
    let isActive = true

    const duration = 1800
    const startTime = performance.now()

    const animate = (now) => {
      if (!isActive) return

      const elapsed = now - startTime
      const percentage = Math.min(
        (elapsed / duration) * 100,
        100
      )

      setProgress(Math.floor(percentage))

      if (percentage < 100) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setProgress(100)

        exitTimeout = window.setTimeout(() => {
          if (!isActive) return

          setIsExiting(true)

          exitTimeout = window.setTimeout(() => {
            if (isActive) {
              onComplete()
            }
          }, 500)
        }, 150)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      isActive = false
      cancelAnimationFrame(animationFrame)
      window.clearTimeout(exitTimeout)
    }
  }, [onComplete])

  return (
    <div
      className={`preloader ${isExiting ? 'preloader--exit' : ''}`}
      role="status"
      aria-label={`${text.loading}: ${progress}%`}
      aria-live="off"
    >
      <div className="preloader__glow preloader__glow--one" />
      <div className="preloader__glow preloader__glow--two" />

      <div className="preloader__content">
        <div className="preloader__identity">
          <p className="preloader__eyebrow">
            ABOUARCHEDEV
          </p>

          <h1>
            {text.loading}<span>.</span>
          </h1>

          <p className="preloader__description">
            {text.description}
          </p>
        </div>

        <div className="preloader__percentage">
          {String(progress).padStart(2, '0')}
          <span>%</span>
        </div>

        <span className="preloader__footer">
          {text.footer}
        </span>
      </div>
    </div>
  )
}

/* =================================
   CUSTOM CURSOR
================================= */

function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    )

    if (!finePointer.matches) return

    const cursor = cursorRef.current

    if (!cursor) return

    document.documentElement.classList.add(
      'custom-cursor-enabled'
    )

    const moveCursor = (event) => {
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`

      cursor.classList.add('is-visible')

      const target =
        event.target instanceof Element
          ? event.target
          : null

      const isInteractive = Boolean(
        target?.closest(
          'a, button:not(:disabled), [role="button"], .skills-chip, .skills-marquee__item'
        )
      )

      cursor.classList.toggle(
        'is-hovering',
        isInteractive
      )
    }

    const hideCursor = (event) => {
      if (!event.relatedTarget) {
        cursor.classList.remove('is-visible')
        cursor.classList.remove('is-hovering')
      }
    }

    document.addEventListener(
      'pointermove',
      moveCursor,
      { passive: true }
    )

    document.addEventListener(
      'pointerout',
      hideCursor
    )

    return () => {
      document.removeEventListener(
        'pointermove',
        moveCursor
      )

      document.removeEventListener(
        'pointerout',
        hideCursor
      )

      document.documentElement.classList.remove(
        'custom-cursor-enabled'
      )
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    >
      <span className="custom-cursor__dot" />

      <Hand
        className="custom-cursor__hand"
        size={19}
        strokeWidth={2}
      />
    </div>
  )
}

/* =================================
   INITIAL THEME
================================= */

function getInitialTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
    ? 'dark'
    : 'light'
}

function App() {
  const [language, setLanguage] = useState(
    () => localStorage.getItem('portfolio-language') || 'en'
  )

  const [theme, setTheme] = useState(getInitialTheme)

  const [isLoading, setIsLoading] = useState(true)

  const activeTouchCardRef = useRef(null)
  const touchSpotlightTimeoutRef = useRef(null)

  // =================================
  // THEME MANAGEMENT
  // =================================

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    )

    document.documentElement.style.colorScheme = theme
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    )

    const handleSystemThemeChange = (event) => {
      const savedTheme = localStorage.getItem('portfolio-theme')

      if (savedTheme === 'dark' || savedTheme === 'light') {
        return
      }

      setTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener(
      'change',
      handleSystemThemeChange
    )

    return () => {
      mediaQuery.removeEventListener(
        'change',
        handleSystemThemeChange
      )
    }
  }, [])

  const handleThemeChange = useCallback((nextTheme) => {
    localStorage.setItem('portfolio-theme', nextTheme)
    setTheme(nextTheme)
  }, [])

  // =================================
  // LANGUAGE MANAGEMENT
  // =================================

  useEffect(() => {
    document.documentElement.lang = language

    localStorage.setItem('portfolio-language', language)
  }, [language])

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  // =================================
  // GLOBAL CARD SPOTLIGHT
  // =================================

  const getSpotlightCard = (target) => {
    if (!(target instanceof Element)) return null

    return target.closest(
      '.education-card, .skills-chip, .skills-marquee__item, article:not(.education-timeline-item), aside, form, [class*="rounded-2xl"]'
    )
  }

  const activateSpotlight = (card) => {
    if (!card) return

    // Every supported card receives the same
    // background spotlight and interactive border glow.
    card.classList.add('spotlight-target')

    card.style.setProperty('--spotlight-opacity', '1')
  }

  const updateSpotlightPosition = (event) => {
    if (event.pointerType !== 'mouse') return

    const card = getSpotlightCard(event.target)

    if (!card || !event.currentTarget.contains(card)) return

    const rect = card.getBoundingClientRect()

    card.style.setProperty(
      '--mouse-x',
      `${event.clientX - rect.left}px`
    )

    card.style.setProperty(
      '--mouse-y',
      `${event.clientY - rect.top}px`
    )

    activateSpotlight(card)
  }

  const handleSpotlightEnter = (event) => {
    if (event.pointerType !== 'mouse') return

    const card = getSpotlightCard(event.target)

    if (!card || !event.currentTarget.contains(card)) return

    activateSpotlight(card)
  }

  const handleSpotlightLeave = (event) => {
    if (event.pointerType !== 'mouse') return

    const card = getSpotlightCard(event.target)

    if (!card || !event.currentTarget.contains(card)) return

    if (
      event.relatedTarget instanceof Node &&
      card.contains(event.relatedTarget)
    ) {
      return
    }

    card.style.setProperty('--spotlight-opacity', '0')
  }

  // =================================
  // MOBILE TOUCH SPOTLIGHT
  // =================================

  const handleTouchSpotlightStart = (event) => {
    if (event.pointerType !== 'touch') return

    const card = getSpotlightCard(event.target)

    if (!card || !event.currentTarget.contains(card)) return

    if (touchSpotlightTimeoutRef.current) {
      window.clearTimeout(touchSpotlightTimeoutRef.current)
      touchSpotlightTimeoutRef.current = null
    }

    activeTouchCardRef.current = card

    const rect = card.getBoundingClientRect()

    card.style.setProperty(
      '--mouse-x',
      `${event.clientX - rect.left}px`
    )

    card.style.setProperty(
      '--mouse-y',
      `${event.clientY - rect.top}px`
    )

    activateSpotlight(card)
  }

  const handleTouchSpotlightEnd = (event) => {
    if (event.pointerType !== 'touch') return

    const card = activeTouchCardRef.current

    if (!card) return

    if (touchSpotlightTimeoutRef.current) {
      window.clearTimeout(touchSpotlightTimeoutRef.current)
    }

    touchSpotlightTimeoutRef.current = window.setTimeout(() => {
      card.style.setProperty('--spotlight-opacity', '0')

      activeTouchCardRef.current = null
      touchSpotlightTimeoutRef.current = null
    }, 650)
  }

  useEffect(() => {
    return () => {
      if (touchSpotlightTimeoutRef.current) {
        window.clearTimeout(touchSpotlightTimeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <div
        className="site-shell"
        onPointerMove={updateSpotlightPosition}
        onPointerOver={handleSpotlightEnter}
        onPointerOut={handleSpotlightLeave}
        onPointerDown={handleTouchSpotlightStart}
        onPointerUp={handleTouchSpotlightEnd}
        onPointerCancel={handleTouchSpotlightEnd}
      >
        <Navbar
          language={language}
          setLanguage={setLanguage}
          theme={theme}
          setTheme={handleThemeChange}
        />

        <main>
          <Hero language={language} />
          <About language={language} />
          <Skills language={language} />
          <Projects language={language} />
          <Education language={language} />
          <Certifications language={language} />
          <Contact language={language} />
        </main>

        <Footer language={language} />

        {!isLoading && <CustomCursor />}
      </div>

      {isLoading && (
        <Preloader
          onComplete={handleLoadingComplete}
          language={language}
        />
      )}
    </>
  )
}

export default App
