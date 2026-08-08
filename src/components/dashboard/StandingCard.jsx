import DashboardIcon from './DashboardIcon'

export default function StandingCard() {
  return <section className="card flex items-center gap-4 p-4"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-yellow-400/10 text-yellow-300"><DashboardIcon name="trophy" className="h-6 w-6" /></div><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-ab-muted">YOUR STANDING</p><p className="mt-1 text-sm text-white">You&apos;re in the <span className="font-bold text-yellow-300">top 18%</span> this week</p></div><span className="rounded-lg bg-ab-success/10 px-2 py-1 text-xs font-semibold text-ab-success">↑ 6</span></section>
}
