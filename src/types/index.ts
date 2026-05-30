export type ThemeMode = 'light' | 'dark'

export type ReviewStatusFilter = 'all' | 'reviewed' | 'needsRevision' | 'favorites'

export interface NoteProblem {
  topicName: string
  topicSlug: string
  problemName: string
  problemSlug: string
  fileName: string
  relativePath: string
}

export interface NoteTopic {
  topicName: string
  topicSlug: string
  problems: NoteProblem[]
}

export interface NoteIndex {
  topics: NoteTopic[]
}

export interface ReviewRecord {
  problemId: string
  favorite: boolean
  reviewed: boolean
  needsRevision: boolean
  lastReviewedDate: string | null
  reviewStage: number
  lastViewedAt: string | null
  scrollPosition: number
}

export interface ReviewState {
  updatedAt: string
  records: Record<string, ReviewRecord>
}
