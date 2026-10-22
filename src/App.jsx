import { useState, useEffect } from 'react'
import es from './i18n/es'
import en from './i18n/en'

const texts = { es, en }

// Cambia estos datos por los tuyos
const EMAIL = 'heexbr.dev@gmail.com'
const GITHUB = 'https://github.com/HectorExp'

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function getInitialLang() {
  const saved = localStorage.getItem('lang')
  if (saved === 'es' || saved === 'en') return saved
  return navigator.language.startsWith('es') ? 'es' : 'en'
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang)
  const t = texts[lang]

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
    document.title = t.meta.title
  }, [lang, t])

  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">Héctor Expósito Broncano</a>
        <nav>
          <a href="#process">{t.nav.process}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#contact">{t.nav.contact}</a>
          <div role="group" aria-label={t.nav.language}>
            <button onClick={() => setLang('es')} aria-pressed={lang === 'es'}>ES</button>
            <button onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.text}</p>
          <a href="#contact" className="btn">{t.hero.cta}</a>
        </section>

        <section id="process">
          <h2>{t.process.title}</h2>
          <ol className="timeline">
            {t.process.steps.map((s) => (
              <li key={s.title}>
                <span className="hour">{s.hour}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="pricing">
          <h2>{t.pricing.title}</h2>
          <div className="price-box">
            <h3>{t.pricing.highlight}</h3>
            <p>{t.pricing.text}</p>
            <a href="#contact" className="btn">{t.pricing.cta}</a>
          </div>
        </section>

        <section id="about">
          <h2>{t.about.title}</h2>
          <p>{t.about.text}</p>
        </section>

        <section id="contact">
          <div className="contact-box">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <div className="actions">
              <a href={`mailto:${EMAIL}`} className="btn">{t.contact.email}</a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="btn ghost">
                <GithubIcon /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Héctor Expósito Broncano</span>
        <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon />
        </a>
      </footer>
    </>
  )
}