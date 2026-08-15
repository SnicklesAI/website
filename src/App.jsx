import './App.css'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function IconVideo() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M10 9.3v5.4l4.6-2.7-4.6-2.7Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconScissors() {
  return (
    <svg {...iconProps}>
      <circle cx="6" cy="6" r="2.3" />
      <circle cx="6" cy="18" r="2.3" />
      <path d="M8.6 7.6 19 19" />
      <path d="M8.6 16.4 19 5" />
    </svg>
  )
}

function IconImage() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <circle cx="8.5" cy="9.5" r="1.6" />
      <path d="M21 16.5 15.6 11a2 2 0 0 0-2.8 0L3.5 20" />
    </svg>
  )
}

function IconMusic() {
  return (
    <svg {...iconProps}>
      <path d="M9 18V6.5l11-2V16" />
      <circle cx="6" cy="18" r="2.8" />
      <circle cx="17" cy="16" r="2.8" />
    </svg>
  )
}

function IconWaveform() {
  return (
    <svg {...iconProps}>
      <path d="M3 12h1.5" />
      <path d="M7 8v8" />
      <path d="M11 4v16" />
      <path d="M15 8v8" />
      <path d="M19 10.5v3" />
      <path d="M21.5 12H21" />
    </svg>
  )
}

function IconAgent() {
  return (
    <svg {...iconProps}>
      <circle cx="6" cy="6" r="2.3" />
      <circle cx="18" cy="6" r="2.3" />
      <circle cx="12" cy="18" r="2.3" />
      <path d="M8 6.7h8" />
      <path d="m7.3 7.9 3 8.4" />
      <path d="m16.7 7.9-3 8.4" />
    </svg>
  )
}

const FEATURES = [
  {
    Icon: IconVideo,
    title: 'Generate Video',
    desc: 'Text-to-video for Reels, Shorts & long-form, from a single prompt.',
  },
  {
    Icon: IconScissors,
    title: 'Edit Video',
    desc: 'Trim, remix, restyle and refine AI or uploaded footage with prompts.',
  },
  {
    Icon: IconImage,
    title: 'Images',
    desc: 'Generate and edit images, from concept art to thumbnails.',
  },
  {
    Icon: IconMusic,
    title: 'Songs',
    desc: 'Full tracks and instrumentals generated from a prompt or a vibe.',
  },
  {
    Icon: IconWaveform,
    title: 'Audio & Voice',
    desc: 'Voiceovers, sound design and audio editing, prompt-first.',
  },
  {
    Icon: IconAgent,
    title: 'Agentic Workflows',
    desc: 'Give it a goal, and an agent plans, generates and assembles the result.',
  },
]

const SUPPORT_EMAIL = 'support@snickles.ai'

function App() {
  return (
    <>
      <div className="bg" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <main className="page">
        <header className="nav">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 100 100" width="24" height="24">
                <path
                  d="M50 5 L61 39 L95 50 L61 61 L50 95 L39 61 L5 50 L39 39 Z"
                  fill="url(#navGrad)"
                />
                <defs>
                  <linearGradient id="navGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7c5cff" />
                    <stop offset="100%" stopColor="#00e0c6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="brand-name">Snickles</span>
          </div>
          <a className="pill" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
        </header>

        <section className="hero">
          <p className="badge">🚧 Under Construction</p>
          <h1>
            We're building something new,
            <br />
            <span className="gradient-text">and so is this site.</span>
          </h1>
          <p className="tagline">
            <span className="tagline-prompt">&gt;</span> Turning what's in your
            head into what's on your screen
            <span className="cursor" aria-hidden="true" />
          </p>
          <p className="lede">
            <strong>Snickles</strong> is a single, prompt-driven home for{' '}
            <strong>video</strong>, <strong>images</strong>,{' '}
            <strong>songs</strong> &amp; <strong>audio</strong>, plus agentic
            workflows that plan and create for you, and a full editing suite to
            refine what you make.
          </p>
          <p className="focus-note">
            <span className="dot" />
            <strong>We're building all of it</strong>: video, images, songs,
            audio, agentic creation and editing. This page included.
          </p>
        </section>

        <section className="features" aria-label="What's coming">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">
                <f.Icon />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <span className="tag tag-live">In focus</span>
            </div>
          ))}
        </section>

        <footer className="footer">
          <div className="social" aria-label="Social links">
            <a
              href="https://www.linkedin.com/company/snicklesai/"
              aria-label="LinkedIn"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
            <a
              href="https://x.com/SnicklesAI"
              aria-label="X / Twitter"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.9L4.4 22H1.3l8.1-9.3L1 2h7l4.9 6.3L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/snickles.ai/"
              aria-label="Instagram"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.7 0 3.05.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53c.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.3 2 12 2Zm0 1.8c-2.65 0-2.97.01-4.02.06-.86.04-1.33.18-1.64.3-.41.16-.7.35-1.01.66-.31.31-.5.6-.66 1.01-.12.31-.26.78-.3 1.64C4.31 9.03 4.3 9.35 4.3 12s.01 2.97.06 4.02c.04.86.18 1.33.3 1.64.16.41.35.7.66 1.01.31.31.6.5 1.01.66.31.12.78.26 1.64.3 1.05.05 1.37.06 4.02.06s2.97-.01 4.02-.06c.86-.04 1.33-.18 1.64-.3.41-.16.7-.35 1.01-.66.31-.31.5-.6.66-1.01.12-.31.26-.78.3-1.64.05-1.05.06-1.37.06-4.02s-.01-2.97-.06-4.02c-.04-.86-.18-1.33-.3-1.64a2.7 2.7 0 0 0-.66-1.01 2.7 2.7 0 0 0-1.01-.66c-.31-.12-.78-.26-1.64-.3C14.97 3.81 14.65 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3Zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7Zm5.35-1.99a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@SnicklesAI"
              aria-label="YouTube"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.6 2h-3.2v13.4a2.9 2.9 0 1 1-2.1-2.8v-3.3a6.2 6.2 0 1 0 5.3 6.1V8.9a8.4 8.4 0 0 0 4.9 1.6V7.3a5 5 0 0 1-4.9-5.3Z" />
              </svg>
            </a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Snickles. All rights reserved. ·{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
        </footer>
      </main>
    </>
  )
}

export default App
