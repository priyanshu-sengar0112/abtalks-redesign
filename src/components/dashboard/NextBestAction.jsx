import { Link } from 'react-router-dom'
import { getStatePath } from '../../utils/studentState'

export default function NextBestAction({ state }) {
  if (!state) return null

  if (state.id === 'newStudent') {
    return (
      <section className="card p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ab-accent">Next Best Action</p>
        <h2 className="mt-2 font-display text-xl font-bold text-white">Start your 60-day journey</h2>
        <p className="mt-2 text-sm leading-6 text-ab-muted">Your first challenge is waiting for you.</p>
        <Link to={getStatePath('/day/12', state)} className="btn-primary mt-4 w-full !min-h-[44px] !py-2.5">Start Day 1</Link>
      </section>
    )
  }

  if (state.id === 'missedDay') {
    return (
      <section className="card p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ab-accent">Next Best Action</p>
        <h2 className="mt-2 font-display text-xl font-bold text-white">Get back on track</h2>
        <p className="mt-2 text-sm leading-6 text-ab-muted">You missed Day 11. Don't worry—continue today's challenge and rebuild your streak.</p>
        <Link to={getStatePath('/day/12', state)} className="btn-primary mt-4 w-full !min-h-[44px] !py-2.5">Continue Challenge</Link>
      </section>
    )
  }

  if (state.id === 'emptyProfile') {
    return (
      <section className="card p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ab-accent">Next Best Action</p>
        <h2 className="mt-2 font-display text-xl font-bold text-white">Complete your profile</h2>
        <p className="mt-2 text-sm leading-6 text-ab-muted">Add your information so your learning journey is ready to be shared.</p>
        <button type="button" className="btn-secondary mt-4 w-full !min-h-[44px] !py-2.5">Complete Profile</button>
      </section>
    )
  }

  return (
    <section className="card p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-ab-accent">Next Best Action</p>
      <h2 className="mt-2 font-display text-xl font-bold text-white">Today's goal</h2>
      <p className="mt-2 text-sm leading-6 text-ab-muted">Complete Day 12 and submit both proofs.</p>
      <Link to="/day/12" className="btn-primary mt-4 w-full !min-h-[44px] !py-2.5">Continue Day 12</Link>
    </section>
  )
}
