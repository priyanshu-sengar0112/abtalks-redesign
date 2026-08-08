import ChallengeIcon from './ChallengeIcon'

export default function BuildChecklist({ build }) {
  return <section className="card p-5"><h2 className="font-display text-xl font-bold text-white">What to build</h2><p className="mt-2 text-sm leading-6 text-ab-muted">{build.description}</p><div className="mt-5 rounded-xl border border-ab-border bg-ab-surface/60 p-4"><p className="text-xs font-bold uppercase tracking-wider text-ab-muted">Expected output</p><p className="mt-2 text-sm font-medium text-white">{build.expectedOutput}</p></div><div className="mt-5 space-y-3">{build.checklist.map((item) => <div key={item} className="flex gap-3"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-ab-accent/40 text-ab-accent"><ChallengeIcon name="check" className="h-3 w-3" /></span><p className="text-sm leading-5 text-ab-text">{item}</p></div>)}</div></section>
}
