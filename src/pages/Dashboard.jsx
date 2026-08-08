import Achievements from '../components/dashboard/Achievements'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import ProgressOverview from '../components/dashboard/ProgressOverview'
import StandingCard from '../components/dashboard/StandingCard'
import StreakCard from '../components/dashboard/StreakCard'
import TodayTaskCard from '../components/dashboard/TodayTaskCard'
import ProfileSetupCard from '../components/dashboard/ProfileSetupCard'
import StudentStateNotice from '../components/dashboard/StudentStateNotice'
import { getChallengeStatus, getDay12Progress, getMockedStreak } from '../utils/challengeDayState'
import { getStatePath, getStudentState } from '../utils/studentState'

export default function Dashboard() {
  const state = getStudentState()
  const progress = getDay12Progress(state)
  const challenge = getChallengeStatus(progress, state)
  const streak = getMockedStreak(progress, state)

  return (
    <main className="min-h-screen bg-ab-bg pb-10">
      <div className="mx-auto w-full max-w-md px-4 pt-6 sm:px-5">
        <DashboardHeader student={state.student} />
        <div className="mt-7 space-y-4">
          <StudentStateNotice edgeCase={state.edgeCase} state={state} />
          <ProfileSetupCard edgeCase={state.edgeCase} />
          <StreakCard week={challenge.weeklyActivity} streak={streak} />
          <TodayTaskCard task={state.todayTask} challengePath={getStatePath('/day/12', state)} />
          <ProgressOverview challenge={challenge} />
          <StandingCard standing={state.dashboard.standing} />
          <Achievements achievements={state.dashboard.achievements} />
        </div>
      </div>
    </main>
  )
}
