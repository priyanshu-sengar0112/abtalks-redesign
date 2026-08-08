const storageKey = 'abtalks-day-12-progress'

const defaultProgress = {
  githubSubmitted: false,
  linkedinSubmitted: false,
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
  return isDay12Complete(progress) ? 13 : 12
}
