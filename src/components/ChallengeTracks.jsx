const trackStyles = {
  web: { iconBg: 'bg-blue-500/15', iconText: 'text-blue-400' },
  ai: { iconBg: 'bg-purple-500/15', iconText: 'text-purple-400' },
  dsa: { iconBg: 'bg-amber-500/15', iconText: 'text-amber-400' },
}

const tracks = [
  {
    id: 'web',
    name: 'Web Development',
    description: 'Build responsive apps, APIs, and full-stack projects. React, Node, and modern tooling.',
    tags: ['React', 'Node.js', 'APIs'],
    students: '1,200+',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 'ai',
    name: 'AI / ML',
    description: 'Train models, build AI apps, and ship ML projects that solve real problems.',
    tags: ['Python', 'LLMs', 'Data'],
    students: '850+',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'dsa',
    name: 'DSA',
    description: 'Crack coding interviews with daily problem-solving. Patterns, contests, and consistency.',
    tags: ['Arrays', 'Graphs', 'DP'],
    students: '2,100+',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6M9 13h4" />
      </svg>
    ),
  },
]

export default function ChallengeTracks() {
  return (
    <section id="tracks" className="py-16 sm:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Challenge Tracks</h2>
          <p className="section-subheading">
            Pick the path that matches your goals. Switch tracks anytime before Day 7.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <article
              key={track.id}
              className="card group flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-ab-border hover:shadow-xl"
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${trackStyles[track.id].iconBg} ${trackStyles[track.id].iconText}`}
              >
                {track.icon}
              </div>

              <h3 className="font-display text-xl font-bold">{track.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ab-muted">
                {track.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {track.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-ab-border bg-ab-surface px-2.5 py-1 text-xs font-medium text-ab-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-ab-border pt-4">
                <span className="text-xs text-ab-muted">
                  <span className="font-semibold text-ab-text">{track.students}</span> students
                </span>
                <a
                  href="#start"
                  className="text-sm font-semibold text-ab-accent transition-colors hover:text-ab-accent-hover"
                >
                  Choose track →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
