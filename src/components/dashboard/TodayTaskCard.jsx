import { Link } from 'react-router-dom'
import DashboardIcon from './DashboardIcon'

export default function TodayTaskCard({ task }) {
  return <section className="card p-5"><div className="flex items-center justify-between"><p className="text-sm font-semibold text-ab-muted">TODAY&apos;S TASK</p><span className="rounded-full bg-ab-track-ai/15 px-3 py-1 text-xs font-semibold text-purple-300">{task.category}</span></div><h2 className="mt-4 font-display text-xl font-bold leading-snug text-white">{task.title}</h2><p className="mt-2 text-sm leading-6 text-ab-muted">{task.shortDescription}</p><div className="mt-5 flex items-center justify-between gap-4"><div className="flex items-center gap-2 text-xs text-ab-muted"><span className="h-2 w-2 rounded-full bg-ab-success" />{task.estimatedTime}</div><Link to="/day/12" className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-ab-accent px-4 text-sm font-semibold text-white transition hover:bg-ab-accent-hover active:scale-[0.98]">Start task <DashboardIcon name="arrow" className="h-4 w-4" /></Link></div></section>
}
