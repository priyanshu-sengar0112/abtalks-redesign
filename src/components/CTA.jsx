export default function CTA() {
  return (
    <section id="start" className="py-16 sm:py-24">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl border border-ab-accent/30 bg-gradient-to-br from-ab-card via-ab-surface to-ab-bg p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-ab-accent/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-ab-track-ai/15 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Your 60 days start{' '}
              <span className="bg-gradient-to-r from-ab-accent to-orange-300 bg-clip-text text-transparent">
                tonight.
              </span>
            </h2>
            <p className="mt-4 text-base text-ab-muted sm:text-lg">
              Join thousands of Indian college students building in public.
              Pick your track, submit your first proof, and start your streak.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href="#signup" className="btn-primary w-full sm:w-auto">
                Start Challenge
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
              <a href="#login" className="btn-secondary w-full sm:w-auto">
                I already have an account
              </a>
            </div>

            <p className="mt-6 text-xs text-ab-muted sm:text-sm">
              Free to join · No credit card · Start anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
