import Achievements from '../components/dashboard/Achievements'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import ProgressOverview from '../components/dashboard/ProgressOverview'
import StandingCard from '../components/dashboard/StandingCard'
import StreakCard from '../components/dashboard/StreakCard'
import TodayTaskCard from '../components/dashboard/TodayTaskCard'

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-ab-bg pb-10">
      <div className="mx-auto w-full max-w-md px-4 pt-6 sm:px-5">
        <DashboardHeader />
        <div className="mt-7 space-y-4">
          <StreakCard />
          <TodayTaskCard />
          <ProgressOverview />
          <StandingCard />
          <Achievements />
        </div>
      </div>
    </main>
  )
}
