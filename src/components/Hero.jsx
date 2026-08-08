export default function Hero() {
  const stats = [
    { value: '60', label: 'Days' },
    { value: '3', label: 'Tracks' },
    { value: '2', label: 'Daily Proofs' },
  ]

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up opacity-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-ab-accent/30 bg-ab-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ab-accent sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ab-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ab-accent" />
              </span>
              60-Day Challenge
            </span>
          </div>

          <h1 className="animate-fade-up animate-delay-100 mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight opacity-0 sm:text-5xl lg:text-6xl">
            Build every day.{' '}
            <span className="bg-gradient-to-r from-ab-accent to-orange-300 bg-clip-text text-transparent">
              Get hired faster.
            </span>
          </h1>

          <p className="animate-fade-up animate-delay-200 mx-auto mt-5 max-w-xl text-base leading-relaxed text-ab-muted opacity-0 sm:text-lg">
            ABTalks is a 60-day coding challenge for Indian college students.
            Pick a track, ship something daily, and prove it with a GitHub commit
            and LinkedIn post — so recruiters actually see your work.
          </p>

          <div className="animate-fade-up animate-delay-300 mt-8 flex flex-col items-center gap-3 opacity-0 sm:flex-row sm:justify-center">
            <a
              href="#start"
              className="btn-primary animate-pulse-glow w-full sm:w-auto"
            >
              Start Your 60-Day Journey
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#how-it-works" className="btn-secondary w-full sm:w-auto">
              See How It Works
            </a>
          </div>

          <div className="animate-fade-up animate-delay-400 mt-12 flex justify-center gap-8 opacity-0 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-ab-text sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ab-muted sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up animate-delay-400 mx-auto mt-14 max-w-lg opacity-0 sm:mt-16">
          <div className="card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ab-accent/5 to-transparent" />
            <div className="relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-ab-muted">Today&apos;s streak</span>
                <span className="rounded-full bg-ab-success/20 px-2.5 py-0.5 text-xs font-semibold text-ab-success">
                  Day 23 🔥
                </span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full ${
                      i < 5 ? 'bg-ab-accent' : 'bg-ab-border'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#24292e]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0a66c2]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <p className="text-sm text-ab-muted">
                  <span className="font-medium text-ab-text">Commit + Post</span> submitted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
