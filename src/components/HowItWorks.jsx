const steps = [
  {
    number: '01',
    title: 'Pick a track',
    description:
      'Choose Web Development, AI/ML, or DSA. Each track has daily prompts tailored for college students.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Build every day',
    description:
      'Ship something small each day — even 30 minutes after college counts. Consistency beats perfection.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Submit proof',
    description:
      'Share your GitHub commit and LinkedIn post. Your public streak keeps you accountable and visible.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading">
            Three simple steps. No fluff. Just daily progress that compounds over 60 days.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="card group relative transition-all duration-300 hover:border-ab-accent/30 hover:shadow-lg hover:shadow-ab-glow"
            >
              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 hidden h-px w-6 bg-ab-border sm:block"
                />
              )}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ab-accent/15 text-ab-accent transition-colors group-hover:bg-ab-accent group-hover:text-white">
                  {step.icon}
                </div>
                <span className="font-display text-3xl font-bold text-ab-border transition-colors group-hover:text-ab-accent/40">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold sm:text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ab-muted sm:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
