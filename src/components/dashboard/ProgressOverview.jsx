export default function ProgressOverview() {
  const completion = 20
  return (
    <section className="grid grid-cols-[1fr_auto] gap-4 rounded-3xl border border-ab-border bg-ab-surface/70 p-5">
      <div><p className="text-sm font-semibold text-ab-muted">YOUR 60-DAY JOURNEY</p><h2 className="mt-2 font-display text-xl font-bold text-white">Day 12 of 60</h2><div className="mt-4 h-2 overflow-hidden rounded-full bg-ab-border"><div className="h-full w-1/5 rounded-full bg-gradient-to-r from-ab-accent to-orange-300" /></div><p className="mt-2 text-xs text-ab-muted">48 days to your next big leap.</p></div>
      <div className="relative grid h-20 w-20 place-items-center rounded-full" style={{ background: `conic-gradient(#ff6b35 ${completion * 3.6}deg, #243049 0deg)` }}><div className="grid h-[62px] w-[62px] place-items-center rounded-full bg-ab-surface"><span className="text-sm font-bold text-white">20%</span></div></div>
    </section>
  )
}
