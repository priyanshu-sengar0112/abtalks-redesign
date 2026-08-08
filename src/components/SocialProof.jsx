const achievements = [
  {
    name: 'Priya Sharma',
    college: 'VIT Vellore',
    track: 'Web Dev',
    streak: 60,
    outcome: 'Internship at startup',
    quote:
      'I coded every night after classes. By Day 40, recruiters were DMing me on LinkedIn.',
    avatar: 'PS',
  },
  {
    name: 'Arjun Mehta',
    college: 'DTU Delhi',
    track: 'DSA',
    streak: 58,
    outcome: 'Placed at product company',
    quote:
      'The daily streak forced me to solve problems even when I was tired. That consistency cracked my interviews.',
    avatar: 'AM',
  },
  {
    name: 'Sneha Reddy',
    college: 'IIIT Hyderabad',
    track: 'AI/ML',
    streak: 60,
    outcome: 'Research intern',
    quote:
      '60 small ML projects on GitHub did more for my profile than any certificate course.',
    avatar: 'SR',
  },
]

const trustStats = [
  { value: '4,000+', label: 'Students enrolled' },
  { value: '72%', label: 'Complete 30+ days' },
  { value: '150+', label: 'Got internships/placements' },
]

export default function SocialProof() {
  return (
    <section id="stories" className="py-16 sm:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Students Who Showed Up</h2>
          <p className="section-subheading">
            Real students. Real streaks. Real outcomes from 60 days of public proof of work.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:mt-12 sm:gap-6">
          {trustStats.map((stat) => (
            <div key={stat.label} className="card text-center !p-4 sm:!p-6">
              <div className="font-display text-xl font-bold text-ab-accent sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] font-medium text-ab-muted sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4 sm:mt-10">
          {achievements.map((student) => (
            <article
              key={student.name}
              className="card transition-all duration-300 hover:border-ab-accent/20"
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ab-accent to-orange-400 font-display text-sm font-bold text-white sm:h-14 sm:w-14 sm:text-base">
                  {student.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display font-bold">{student.name}</h3>
                    <span className="rounded-full bg-ab-success/15 px-2 py-0.5 text-[10px] font-semibold text-ab-success sm:text-xs">
                      {student.streak}-day streak ✓
                    </span>
                  </div>
                  <p className="text-xs text-ab-muted sm:text-sm">
                    {student.college} · {student.track}
                  </p>
                  <blockquote className="mt-3 text-sm leading-relaxed text-ab-text sm:text-base">
                    &ldquo;{student.quote}&rdquo;
                  </blockquote>
                  <p className="mt-2 text-xs font-semibold text-ab-accent sm:text-sm">
                    → {student.outcome}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
