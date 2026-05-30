import type { NoteIndex, NoteProblem, NoteTopic } from '../types'
import notesData from '../data/notes-index.json'

const noteIndex = notesData as NoteIndex
const noteFiles: Record<string, () => Promise<string>> = import.meta.glob('../../notes/**/*.md', {
  query: '?raw',
  import: 'default'
})

export function getNoteIndex(): NoteIndex {
  return noteIndex
}

export function getTopicBySlug(topicSlug: string): NoteTopic | undefined {
  return noteIndex.topics.find((topic) => topic.topicSlug === topicSlug)
}

export function getProblemBySlugs(topicSlug: string, problemSlug: string): NoteProblem | undefined {
  const topic = getTopicBySlug(topicSlug)
  return topic?.problems.find((problem) => problem.problemSlug === problemSlug)
}

export async function fetchProblemMarkdown(problem: NoteProblem): Promise<string> {
  const fileKey = `../../notes/${problem.relativePath}`
  const loader = noteFiles[fileKey]
  if (!loader) {
    throw new Error(`Unable to load markdown file: ${fileKey}`)
  }
  return await loader()
}

export function getAllProblems(): NoteProblem[] {
  return noteIndex.topics.flatMap((topic) => topic.problems)
}
