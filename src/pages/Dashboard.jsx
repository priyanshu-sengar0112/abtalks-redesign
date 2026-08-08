import Achievements from '../components/dashboard/Achievements'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import ProgressOverview from '../components/dashboard/ProgressOverview'
import StandingCard from '../components/dashboard/StandingCard'
import StreakCard from '../components/dashboard/StreakCard'
import TodayTaskCard from '../components/dashboard/TodayTaskCard'
import mockData from '../data/mockData.json'
import { getChallengeStatus, getDay12Progress } from '../utils/challengeDayState'

export default function Dashboard() {
  const challenge = getChallengeStatus(getDay12Progress())

  return (
    <main className="min-h-screen bg-ab-bg pb-10">
      <div className="mx-auto w-full max-w-md px-4 pt-6 sm:px-5">
        <DashboardHeader student={mockData.student} />
        <div className="mt-7 space-y-4">
          <StreakCard week={challenge.weeklyActivity} />
          <TodayTaskCard task={mockData.todayTask} />
          <ProgressOverview challenge={challenge} />
          <StandingCard standing={mockData.dashboard.standing} />
          <Achievements achievements={mockData.dashboard.achievements} />
        </div>
      </div>
    </main>
  )
}
