import { Link } from 'react-router-dom'
import { getStatePath } from '../../utils/studentState'

export default function StudentStateNotice({ edgeCase, state }) {
  if (!edgeCase || edgeCase.type === 'profile') return null

  return <section className="rounded-3xl border border-ab-accent/25 bg-gradient-to-br from-ab-accent/10 to-ab-card p-5"><p className="text-xs font-bold uppercase tracking-wider text-ab-accent">{edgeCase.type === 'new' ? 'Welcome to ABTalks' : 'Keep going'}</p><h2 className="mt-2 font-display text-xl font-bold text-white">{edgeCase.title}</h2><p className="mt-2 text-sm leading-6 text-ab-muted">{edgeCase.description}</p><Link to={getStatePath('/day/12', state)} className="btn-primary mt-4 w-full !min-h-[44px] !py-2.5">{edgeCase.actionLabel}</Link></section>
}
