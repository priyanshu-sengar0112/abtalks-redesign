import DashboardIcon from './DashboardIcon'

const week = [
  ['M', true], ['T', true], ['W', true], ['T', true], ['F', true], ['S', true], ['S', false],
]

export default function StreakCard() {
  return (
    <section className="overflow-hidden rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/20 via-ab-card to-ab-card p-5 shadow-[0_12px_40px_rgba(255,107,53,0.1)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-orange-100/75">Current streak</p>
          <div className="mt-1 flex items-end gap-2"><span className="font-display text-5xl font-bold leading-none text-white">12</span><span className="mb-1 text-sm text-ab-muted">days strong</span></div>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500/20 text-orange-300"><DashboardIcon name="flame" className="h-7 w-7" /></div>
      </div>
      <div className="mt-5 flex justify-between border-t border-white/10 pt-4">
        {week.map(([day, complete], index) => <div key={`${day}-${index}`} className="flex flex-col items-center gap-2"><span className="text-[11px] text-ab-muted">{day}</span><span className={`grid h-7 w-7 place-items-center rounded-full text-[10px] ${complete ? 'bg-orange-500 text-white' : 'border border-ab-border bg-ab-surface text-ab-muted'}`}>{complete ? <DashboardIcon name="check" className="h-3.5 w-3.5" /> : '7'}</span></div>)}
      </div>
    </section>
  )
}
