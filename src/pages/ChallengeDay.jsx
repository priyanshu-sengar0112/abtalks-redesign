import { useState } from 'react'
import BuildChecklist from '../components/challenge/BuildChecklist'
import ChallengeHeader from '../components/challenge/ChallengeHeader'
import CompletionBanner from '../components/challenge/CompletionBanner'
import GuidanceCard from '../components/challenge/GuidanceCard'
import ProofSubmission from '../components/challenge/ProofSubmission'
import TaskOverview from '../components/challenge/TaskOverview'
import { getDay12Progress, getMockedStreak, isDay12Complete, saveDay12Progress } from '../utils/challengeDayState'

export default function ChallengeDay() {
  const [progress, setProgress] = useState(getDay12Progress)
  const challengeComplete = isDay12Complete(progress)
  const streak = getMockedStreak(progress)

  const submitProof = (proofType) => {
    const updatedProgress = { ...progress, [proofType]: true }
    setProgress(updatedProgress)
    saveDay12Progress(updatedProgress)
  }

  return <main className="min-h-screen bg-ab-bg pb-10"><div className="mx-auto w-full max-w-md px-4 py-6 sm:px-5"><ChallengeHeader streak={streak} /><div className="mt-6 space-y-4"><TaskOverview /><BuildChecklist /><GuidanceCard /><ProofSubmission type="GitHub" placeholder="https://github.com/your-username/project" submitted={progress.githubSubmitted} onSubmit={() => submitProof('githubSubmitted')} /><ProofSubmission type="LinkedIn" placeholder="https://www.linkedin.com/posts/your-post" submitted={progress.linkedinSubmitted} onSubmit={() => submitProof('linkedinSubmitted')} />{challengeComplete && <CompletionBanner streak={streak} />}</div></div></main>
}
