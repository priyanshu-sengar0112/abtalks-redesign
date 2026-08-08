export default function ProfileSetupCard({ edgeCase }) {
  if (!edgeCase || edgeCase.type !== 'profile') return null

  return <section className="card p-5"><p className="text-xs font-bold uppercase tracking-wider text-ab-accent">Profile setup</p><h2 className="mt-2 font-display text-xl font-bold text-white">{edgeCase.title}</h2><p className="mt-2 text-sm leading-6 text-ab-muted">{edgeCase.description}</p><button type="button" className="btn-secondary mt-4 w-full !min-h-[44px] !py-2.5">{edgeCase.actionLabel}</button></section>
}
