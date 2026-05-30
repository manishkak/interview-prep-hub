import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Fuse from 'fuse.js'
import { useAppContext } from '../context/AppContext'

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const { topics } = useAppContext()
  const [query, setQuery] = useState('')

  const allProblems = useMemo(
    () => topics.flatMap((topic) => topic.problems),
    [topics]
  )

  const results = useMemo(() => {
    if (!query.trim()) {
      return allProblems.slice(0, 8)
    }
    const fuse = new Fuse(allProblems, {
      keys: ['problemName', 'topicName'],
      threshold: 0.35,
      ignoreLocation: true
    })
    return fuse.search(query.trim()).map((result) => result.item).slice(0, 8)
  }, [allProblems, query])

  useEffect(() => {
    if (!open) {
      setQuery('')
    }
  }, [open])

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-2xl">
        <div className="mb-4 text-slate-100">Command palette</div>
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a problem or topic..."
          className="w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
        />

        <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-950 p-3">
          {results.map((problem) => (
            <Link
              key={problem.problemSlug}
              to={`/topic/${problem.topicSlug}/problem/${problem.problemSlug}`}
              onClick={onClose}
              className="block rounded-2xl px-3 py-3 text-slate-100 transition hover:bg-slate-800"
            >
              <div className="font-medium">{problem.problemName}</div>
              <div className="text-sm text-slate-500">{problem.topicName}</div>
            </Link>
          ))}
          {results.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-700 px-3 py-4 text-sm text-slate-500">No matches found.</div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 inline-flex rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-700"
        >
          Close
        </button>
      </div>
    </div>
  )
}
