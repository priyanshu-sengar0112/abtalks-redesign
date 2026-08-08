import { Link } from 'react-router-dom'
import DashboardIcon from './DashboardIcon'

export default function TodayTaskCard({ task, challengePath = '/day/12' }) {
  return <section className="card p-5"><div className="flex items-center justify-between"><p className="min-w-0 text-sm font-semibold text-ab-muted">TODAY&apos;S TASK</p><span className="shrink-0 rounded-full bg-ab-track-ai/15 px-3 py-1 text-xs font-semibold text-purple-300">{task.category}</span></div><h2 className="mt-4 font-display text-xl font-bold leading-snug text-white">{task.title}</h2><p className="mt-2 text-sm leading-6 text-ab-muted">{task.shortDescription}</p><div className="mt-5 flex items-center justify-between gap-4"><div className="flex min-w-0 items-center gap-2 text-xs text-ab-muted"><span className="h-2 w-2 shrink-0 rounded-full bg-ab-success" />{task.estimatedTime}</div><Link to={challengePath} className="inline-flex min-h-[42px] shrink-0 items-center gap-2 rounded-xl bg-ab-accent px-4 text-sm font-semibold text-white transition hover:bg-ab-accent-hover active:scale-[0.98]">Start task <DashboardIcon name="arrow" className="h-4 w-4" /></Link></div></section>
}
