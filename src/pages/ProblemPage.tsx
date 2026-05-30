import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import MarkdownRenderer from '../components/MarkdownRenderer'
import StatusActions from '../components/StatusActions'

export default function ProblemPage() {
  const { topicSlug, problemSlug } = useParams()
  const { getNote, fetchMarkdown, markViewedProblem, getRecord, getTopic, updateScrollPosition } = useAppContext()
  const [content, setContent] = useState('Loading...')
  const [error, setError] = useState('')

  const note = useMemo(() => {
    if (!topicSlug || !problemSlug) return undefined
    return getNote(topicSlug, problemSlug)
  }, [getNote, problemSlug, topicSlug])

  const record = useMemo(() => {
    if (!note) return null
    return getRecord(`${note.topicSlug}:${note.problemSlug}`)
  }, [getRecord, note])

  useEffect(() => {
    if (!note) {
      setError('Problem not found.')
      return
    }
    fetchMarkdown(note)
      .then(setContent)
      .catch((loadError) => {
        setError(loadError.message)
        setContent('')
      })
  }, [fetchMarkdown, note])

  useEffect(() => {
    if (note) {
      markViewedProblem(`${note.topicSlug}:${note.problemSlug}`)
    }
  }, [markViewedProblem, note])

  useEffect(() => {
    if (record?.scrollPosition) {
      window.scrollTo(0, record.scrollPosition)
    }
  }, [record])

  useEffect(() => {
    const handler = () => {
      if (!note) return
      updateScrollPosition(`${note.topicSlug}:${note.problemSlug}`, window.scrollY)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [note, updateScrollPosition])

  if (!note) {
    return <div className="text-slate-700 dark:text-slate-200">Problem not found.</div>
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="mb-2 text-sm uppercase tracking-[0.24em] text-sky-600">{getTopic(note.topicSlug)?.topicName ?? note.topicName}</div>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-100">{note.problemName}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Problem details, examples, approach, and review controls are available below.</p>
      </div>

      <StatusActions problemId={`${note.topicSlug}:${note.problemSlug}`} />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        {error ? (
          <div className="text-red-600 dark:text-red-400">{error}</div>
        ) : (
          <MarkdownRenderer content={content} />
        )}
      </div>
    </div>
  )
}
