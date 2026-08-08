import mockData from '../data/mockData.json'

const queryAliases = {
  new: 'newStudent',
  newStudent: 'newStudent',
  missed: 'missedDay',
  missedDay: 'missedDay',
  empty: 'emptyProfile',
  emptyProfile: 'emptyProfile',
}

const stateQueryAliases = {
  normal: null,
  newStudent: 'new',
  missedDay: 'missed',
  emptyProfile: 'empty',
}

export function getMockStateFromQuery() {
  if (typeof window === 'undefined') {
    return 'normal'
  }

  const searchParams = new URLSearchParams(window.location.search)
  const stateValue = searchParams.get('state') || searchParams.get('mockState') || 'normal'

  if (!stateValue || stateValue === 'normal') {
    return 'normal'
  }

  const normalized = queryAliases[stateValue]
  return normalized || 'normal'
}

export function getStudentState() {
  const stateId = getMockStateFromQuery()
  const overrides = mockData.mockStates[stateId] || {}

  return {
    id: mockData.mockStates[stateId] ? stateId : 'normal',
    student: { ...mockData.student, ...overrides.student },
    challenge: { ...mockData.challenge, ...overrides.challenge },
    todayTask: { ...mockData.todayTask, ...overrides.todayTask },
    dashboard: {
      ...mockData.dashboard,
      ...overrides.dashboard,
      standing: { ...mockData.dashboard.standing, ...overrides.dashboard?.standing },
      achievements: overrides.dashboard?.achievements ?? mockData.dashboard.achievements,
    },
    challengeDay: {
      ...mockData.challengeDay,
      ...overrides.challengeDay,
      task: { ...mockData.challengeDay.task, ...overrides.challengeDay?.task },
      build: { ...mockData.challengeDay.build, ...overrides.challengeDay?.build },
      guidance: overrides.challengeDay?.guidance ?? mockData.challengeDay.guidance,
    },
    edgeCase: overrides.edgeCase || null,
  }
}

export function getStatePath(path, state) {
  if (state.id === 'normal') {
    return path
  }

  const alias = stateQueryAliases[state.id]
  return alias ? `${path}?state=${alias}` : path
}
