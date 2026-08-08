import DashboardIcon from './DashboardIcon'

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <p className="text-sm text-ab-muted">Saturday, 8 August</p>
        <h1 className="mt-1 font-display text-2xl font-bold tracking-tight text-white">Good evening, Aanya <span aria-hidden="true">👋</span></h1>
      </div>
      <div className="flex items-center gap-3">
        <button aria-label="Notifications" className="relative grid h-10 w-10 place-items-center rounded-full border border-ab-border bg-ab-card text-ab-text">
          <DashboardIcon name="bell" className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-ab-accent ring-2 ring-ab-card" />
        </button>
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-orange-300 to-rose-500 text-sm font-bold text-slate-950">AS</div>
      </div>
    </header>
  )
}
