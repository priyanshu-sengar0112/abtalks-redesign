const benefits = [
  {
    title: 'Build consistency',
    description:
      '60 days of showing up rewires how you work. Late nights after college become your edge, not your excuse.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    highlight: 'Day 1 → Day 60',
  },
  {
    title: 'Build portfolio',
    description:
      '60 projects beats one resume line. Every commit is proof you can ship — not just watch tutorials.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    highlight: '60 real projects',
  },
  {
    title: 'Get visible to recruiters',
    description:
      'Daily LinkedIn posts + a green GitHub graph put you in front of hiring managers while peers are still applying blindly.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    highlight: 'Public proof of work',
  },
]

export default function WhyABTalks() {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Why ABTalks?</h2>
          <p className="section-subheading">
            Most students have skills but no visibility. ABTalks turns daily effort into
            something recruiters can actually find.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ab-accent/15 text-ab-accent">
                {benefit.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg font-bold sm:text-xl">
                    {benefit.title}
                  </h3>
                  <span className="rounded-full border border-ab-border bg-ab-surface px-3 py-0.5 text-xs font-medium text-ab-muted">
                    {benefit.highlight}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ab-muted sm:text-base">
                  {benefit.description}
                </p>
              </div>
              <div
                aria-hidden="true"
                className="hidden font-display text-5xl font-bold text-ab-border/50 sm:block"
              >
                {String(index + 1).padStart(2, '0')}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
