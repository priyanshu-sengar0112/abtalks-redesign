export default function Footer() {
  const links = [
    { label: 'About', href: '#' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Community', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  return (
    <footer className="border-t border-ab-border py-10 sm:py-12">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <svg
              className="h-7 w-7"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <rect width="32" height="32" rx="8" fill="#ff6b35" />
              <path d="M8 22V10h3.2l4.8 7.2V10H19v12h-3.2L11 14.8V22H8z" fill="#0a0f1a" />
              <circle cx="24" cy="10" r="2" fill="#0a0f1a" />
            </svg>
            <span className="font-display text-base font-bold">ABTalks</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ab-muted transition-colors hover:text-ab-text"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-center text-xs text-ab-muted">
          © {new Date().getFullYear()} ABTalks. Built for Indian college students who show up every day.
        </p>
      </div>
    </footer>
  )
}
