import mockData from '../data/mockData.json'
import { getStudentState } from './studentState'

const storageKey = 'abtalks-day-12-progress'

function getStorageKey(state) {
  return state.id === 'normal' ? storageKey : `${storageKey}-${state.id}`
}

function getDefaultProgress(state) {
  return {
    githubSubmitted: state.challengeDay.proofs.github.initialSubmitted,
    linkedinSubmitted: state.challengeDay.proofs.linkedin.initialSubmitted,
  }
}

export function getDay12Progress(state = getStudentState()) {
  const defaultProgress = getDefaultProgress(state)
  if (typeof window === 'undefined') return defaultProgress

  try {
    const savedProgress = JSON.parse(window.localStorage.getItem(getStorageKey(state)))
    return {
      githubSubmitted: Boolean(savedProgress?.githubSubmitted),
      linkedinSubmitted: Boolean(savedProgress?.linkedinSubmitted),
    }
  } catch {
    return defaultProgress
  }
}

export function saveDay12Progress(progress, state = getStudentState()) {
  window.localStorage.setItem(getStorageKey(state), JSON.stringify({
    githubSubmitted: Boolean(progress.githubSubmitted),
    linkedinSubmitted: Boolean(progress.linkedinSubmitted),
  }))
}

export function isDay12Complete(progress) {
  return progress.githubSubmitted && progress.linkedinSubmitted
}

export function getMockedStreak(progress, state = getStudentState()) {
  return isDay12Complete(progress)
    ? state.student.currentStreak + 1
    : state.student.currentStreak
}

export function getChallengeStatus(progress, state = getStudentState()) {
  const completed = isDay12Complete(progress)
  const completedDays = state.challenge.completedDays + (completed ? 1 : 0)
  const totalDays = state.challenge.totalDays

  return {
    ...state.challenge,
    currentDay: completed ? state.challenge.currentDay + 1 : state.challenge.currentDay,
    completedDays,
    completionPercentage: Math.round((completedDays / totalDays) * 100),
    daysRemaining: totalDays - completedDays,
    weeklyActivity: state.challenge.weeklyActivity.map((day) => ({
      ...day,
      completed: day.completed || (completed && Boolean(day.display)),
    })),
  }
}
