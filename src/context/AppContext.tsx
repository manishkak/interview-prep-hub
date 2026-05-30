import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { NoteIndex, NoteProblem, NoteTopic, ReviewRecord, ReviewState, ThemeMode } from '../types'
import { fetchProblemMarkdown, getNoteIndex, getProblemBySlugs, getTopicBySlug } from '../services/notes'
import {
  getInitialReviewState,
  getReviewRecord,
  loadReviewState,
  saveReviewState,
  toggleFavorite,
  toggleNeedsRevision,
  markProblemReviewed,
  markProblemViewed,
  updateProblemScroll
} from '../services/reviewService'

interface AppContextValue {
  noteIndex: NoteIndex
  problems: NoteProblem[]
  topics: NoteTopic[]
  getNote: (topicSlug: string, problemSlug: string) => NoteProblem | undefined
  fetchMarkdown: (problem: NoteProblem) => Promise<string>
  getTopic: (topicSlug: string) => NoteTopic | undefined
  reviewState: ReviewState
  getRecord: (problemId: string) => ReviewRecord
  setTheme: (theme: ThemeMode) => void
  theme: ThemeMode
  toggleFavoriteForProblem: (problemId: string) => void
  toggleNeedsRevisionForProblem: (problemId: string) => void
  markReviewedProblem: (problemId: string) => void
  markViewedProblem: (problemId: string) => void
  updateScrollPosition: (problemId: string, scrollPosition: number) => void
}

const AppContext = createContext<AppContextValue | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const noteIndex = getNoteIndex()
  const problems = useMemo(
    () => noteIndex.topics.flatMap((topic) => topic.problems),
    [noteIndex]
  )
  const topics = noteIndex.topics
  const [reviewState, setReviewState] = useState<ReviewState>(() => loadReviewState())
  const [theme, setThemeState] = useState<ThemeMode>('light')

  useEffect(() => {
    setThemeState((current) => {
      const stored = window.localStorage.getItem('interview-prep-hub-theme') as ThemeMode | null
      return stored ?? current
    })
  }, [])

  useEffect(() => {
    saveReviewState(reviewState)
  }, [reviewState])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('interview-prep-hub-theme', theme)
  }, [theme])

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme)
  }

  const value: AppContextValue = {
    noteIndex,
    problems,
    topics,
    getNote: (topicSlug, problemSlug) => getProblemBySlugs(topicSlug, problemSlug),
    fetchMarkdown: fetchProblemMarkdown,
    getTopic: getTopicBySlug,
    reviewState,
    getRecord: (problemId: string) => getReviewRecord(reviewState, problemId),
    setTheme,
    theme,
    toggleFavoriteForProblem: (problemId) => setReviewState(toggleFavorite(reviewState, problemId)),
    toggleNeedsRevisionForProblem: (problemId) => setReviewState(toggleNeedsRevision(reviewState, problemId)),
    markReviewedProblem: (problemId) => setReviewState(markProblemReviewed(reviewState, problemId)),
    markViewedProblem: (problemId) => setReviewState(markProblemViewed(reviewState, problemId)),
    updateScrollPosition: (problemId, scrollPosition) => setReviewState(updateProblemScroll(reviewState, problemId, scrollPosition))
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}
