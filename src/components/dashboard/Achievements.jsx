import DashboardIcon from './DashboardIcon'

export default function Achievements({ achievements }) {
  if (!achievements.length) {
    return <section><div className="flex items-center justify-between"><h2 className="font-display text-lg font-bold text-white">Achievements</h2></div><div className="mt-3 rounded-2xl border border-dashed border-ab-border bg-ab-surface/50 p-5 text-center"><p className="text-sm font-semibold text-white">Your first badge is waiting.</p><p className="mt-1 text-xs text-ab-muted">Complete Day 1 to unlock it.</p></div></section>
  }

  return <section><div className="flex items-center justify-between"><h2 className="font-display text-lg font-bold text-white">Achievements</h2><button className="text-sm font-semibold text-ab-accent">See all</button></div><div className="mt-3 grid grid-cols-3 gap-3">{achievements.map((badge) => <article key={badge.name} className={`rounded-2xl border p-3 text-center ${badge.unlocked ? 'border-ab-border bg-ab-card' : 'border-ab-border/60 bg-ab-surface/40 opacity-60'}`}><div className={`mx-auto grid h-10 w-10 place-items-center rounded-xl ${badge.unlocked ? 'bg-ab-accent/15 text-ab-accent' : 'bg-ab-border text-ab-muted'}`}><DashboardIcon name={badge.icon} className="h-5 w-5" /></div><h3 className="mt-2 text-xs font-bold text-white">{badge.name}</h3><p className="mt-1 text-[10px] text-ab-muted">{badge.label}</p></article>)}</div></section>
}
