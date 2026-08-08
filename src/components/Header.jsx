import { useState } from 'react'

function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#ff6b35" />
      <path
        d="M8 22V10h3.2l4.8 7.2V10H19v12h-3.2L11 14.8V22H8z"
        fill="#0a0f1a"
      />
      <circle cx="24" cy="10" r="2" fill="#0a0f1a" />
    </svg>
  )
}

export default function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Stories', href: '#stories' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ab-border/60 bg-ab-bg/90 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between sm:h-[72px]">
        <a href="/" className="flex items-center gap-2.5" aria-label="ABTalks home">
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
            ABTalks
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ab-muted transition-colors hover:text-ab-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#login" className="btn-secondary !min-h-[44px] !px-5 !py-2.5 !text-sm">
            Login
          </a>
          <a href="#start" className="btn-primary !min-h-[44px] !px-5 !py-2.5 !text-sm">
            Start Challenge
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-ab-border bg-ab-surface/60 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-b border-ab-border bg-ab-bg/95 backdrop-blur-lg md:hidden">
          <nav className="section-container flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base font-medium text-ab-muted transition-colors hover:bg-ab-card hover:text-ab-text"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-ab-border pt-4">
              <a href="#login" onClick={closeMenu} className="btn-secondary w-full">
                Login
              </a>
              <a href="#start" onClick={closeMenu} className="btn-primary w-full">
                Start Challenge
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
