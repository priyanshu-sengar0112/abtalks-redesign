import ChallengeIcon from './ChallengeIcon'

export default function TaskOverview({ task }) {
  return <section className="overflow-hidden rounded-3xl border border-purple-400/15 bg-gradient-to-br from-purple-500/10 via-ab-card to-ab-card p-5"><span className="inline-flex items-center gap-2 rounded-full bg-ab-track-ai/15 px-3 py-1 text-xs font-semibold text-purple-300"><ChallengeIcon name="sparkle" className="h-3.5 w-3.5" />TODAY&apos;S TASK</span><h2 className="mt-4 font-display text-2xl font-bold leading-tight text-white">{task.title}</h2><p className="mt-3 text-sm leading-6 text-ab-muted">{task.description}</p><div className="mt-5 border-t border-white/10 pt-4"><p className="text-xs font-bold uppercase tracking-wider text-purple-300">Why this matters</p><p className="mt-2 text-sm leading-6 text-ab-text">{task.whyItMatters}</p></div></section>
}
