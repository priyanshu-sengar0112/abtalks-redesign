import ChallengeIcon from './ChallengeIcon'

export default function CompletionBanner({ streak }) {
  return <section className="rounded-3xl border border-ab-success/30 bg-gradient-to-br from-ab-success/15 to-ab-card p-5 text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-ab-success text-ab-bg"><ChallengeIcon name="check" className="h-6 w-6" /></div><h2 className="mt-3 font-display text-xl font-bold text-white">Day 12 completed!</h2><p className="mt-2 text-sm leading-6 text-ab-muted">Both proofs are saved on this device. Your streak is now {streak} days.</p></section>
}
