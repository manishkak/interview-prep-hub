import { ReviewRecord, ReviewState } from '../types'

const STORAGE_KEY = 'interview-prep-hub-review-state'
const REVIEW_INTERVALS = [1, 3, 7, 14]

function getTodayString(): string {
  return new Date().toISOString().slice(0, 10)
}

function safeParseState(value: string | null): ReviewState {
  if (!value) {
    return getInitialReviewState()
  }

  try {
    return JSON.parse(value) as ReviewState
  } catch {
    return getInitialReviewState()
  }
}

export function getInitialReviewState(): ReviewState {
  return {
    updatedAt: getTodayString(),
    records: {}
  }
}

export function loadReviewState(): ReviewState {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  return safeParseState(raw)
}

export function saveReviewState(state: ReviewState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function ensureRecord(state: ReviewState, problemId: string): ReviewState {
  if (state.records[problemId]) {
    return state
  }
  return {
    ...state,
    records: {
      ...state.records,
      [problemId]: {
        problemId,
        favorite: false,
        reviewed: false,
        needsRevision: false,
        lastReviewedDate: null,
        reviewStage: 0,
        lastViewedAt: null,
        scrollPosition: 0
      }
    }
  }
}

export function getReviewRecord(state: ReviewState, problemId: string): ReviewRecord {
  return (
    state.records[problemId] ?? {
      problemId,
      favorite: false,
      reviewed: false,
      needsRevision: false,
      lastReviewedDate: null,
      reviewStage: 0,
      lastViewedAt: null,
      scrollPosition: 0
    }
  )
}

function updateRecord(state: ReviewState, problemId: string, updater: (record: ReviewRecord) => ReviewRecord): ReviewState {
  const nextState = ensureRecord(state, problemId)
  const record = nextState.records[problemId]
  const updated = updater(record)

  return {
    ...nextState,
    updatedAt: getTodayString(),
    records: {
      ...nextState.records,
      [problemId]: updated
    }
  }
}

export function toggleFavorite(state: ReviewState, problemId: string): ReviewState {
  return updateRecord(state, problemId, (record) => ({
    ...record,
    favorite: !record.favorite
  }))
}

export function toggleNeedsRevision(state: ReviewState, problemId: string): ReviewState {
  return updateRecord(state, problemId, (record) => ({
    ...record,
    needsRevision: !record.needsRevision,
    reviewed: record.needsRevision ? record.reviewed : false
  }))
}

export function markProblemReviewed(state: ReviewState, problemId: string): ReviewState {
  return updateRecord(state, problemId, (record) => ({
    ...record,
    reviewed: true,
    needsRevision: false,
    lastReviewedDate: getTodayString(),
    reviewStage: Math.min(record.reviewStage + 1, REVIEW_INTERVALS.length - 1)
  }))
}

export function markProblemViewed(state: ReviewState, problemId: string): ReviewState {
  return updateRecord(state, problemId, (record) => ({
    ...record,
    lastViewedAt: new Date().toISOString()
  }))
}

export function updateProblemScroll(state: ReviewState, problemId: string, scrollPosition: number): ReviewState {
  return updateRecord(state, problemId, (record) => ({
    ...record,
    scrollPosition
  }))
}

export function getDueDate(record: ReviewRecord): string | null {
  if (!record.lastReviewedDate) {
    return null
  }
  const stage = Math.min(record.reviewStage, REVIEW_INTERVALS.length - 1)
  const baseDate = new Date(record.lastReviewedDate)
  baseDate.setDate(baseDate.getDate() + REVIEW_INTERVALS[stage])
  return baseDate.toISOString().slice(0, 10)
}

export function getDaysUntilDue(record: ReviewRecord): number | null {
  const due = getDueDate(record)
  if (!due) {
    return null
  }
  const now = new Date(getTodayString())
  const dueDate = new Date(due)
  return Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}
