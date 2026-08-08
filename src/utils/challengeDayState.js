import mockData from '../data/mockData.json'

const storageKey = 'abtalks-day-12-progress'

const defaultProgress = {
  githubSubmitted: mockData.challengeDay.proofs.github.initialSubmitted,
  linkedinSubmitted: mockData.challengeDay.proofs.linkedin.initialSubmitted,
}

export function getDay12Progress() {
  if (typeof window === 'undefined') return defaultProgress

  try {
    const savedProgress = JSON.parse(window.localStorage.getItem(storageKey))
    return {
      githubSubmitted: Boolean(savedProgress?.githubSubmitted),
      linkedinSubmitted: Boolean(savedProgress?.linkedinSubmitted),
    }
  } catch {
    return defaultProgress
  }
}

export function saveDay12Progress(progress) {
  window.localStorage.setItem(storageKey, JSON.stringify({
    githubSubmitted: Boolean(progress.githubSubmitted),
    linkedinSubmitted: Boolean(progress.linkedinSubmitted),
  }))
}

export function isDay12Complete(progress) {
  return progress.githubSubmitted && progress.linkedinSubmitted
}

export function getMockedStreak(progress) {
  return isDay12Complete(progress)
    ? mockData.student.currentStreak + 1
    : mockData.student.currentStreak
}

export function getChallengeStatus(progress) {
  const completed = isDay12Complete(progress)
  const completedDays = mockData.challenge.completedDays + (completed ? 1 : 0)
  const totalDays = mockData.challenge.totalDays

  return {
    ...mockData.challenge,
    currentDay: completed ? mockData.challenge.currentDay + 1 : mockData.challenge.currentDay,
    completedDays,
    completionPercentage: Math.round((completedDays / totalDays) * 100),
    daysRemaining: totalDays - completedDays,
    weeklyActivity: mockData.challenge.weeklyActivity.map((day) => ({
      ...day,
      completed: day.completed || (completed && Boolean(day.display)),
    })),
  }
}
