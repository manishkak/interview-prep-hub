import { useMemo } from 'react'
import { useAppContext } from '../context/AppContext'

interface StatusActionsProps {
  problemId: string
}

export default function StatusActions({ problemId }: StatusActionsProps) {
  const {
    getRecord,
    toggleFavoriteForProblem,
    toggleNeedsRevisionForProblem,
    markReviewedProblem
  } = useAppContext()

  const record = useMemo(() => getRecord(problemId), [getRecord, problemId])

  return (
    <div className="mb-6 grid gap-3 sm:grid-cols-3">
      <button
        onClick={() => markReviewedProblem(problemId)}
        className="rounded-3xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
      >
        {record.reviewed ? 'Reviewed Again' : 'Mark as Reviewed'}
      </button>
      <button
        onClick={() => toggleNeedsRevisionForProblem(problemId)}
        className={`rounded-3xl px-4 py-3 text-sm font-semibold transition ${record.needsRevision ? 'bg-amber-500 text-slate-950 hover:bg-amber-400' : 'bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'}`}
      >
        {record.needsRevision ? 'Needs Revision' : 'Mark Needs Revision'}
      </button>
      <button
        onClick={() => toggleFavoriteForProblem(problemId)}
        className={`rounded-3xl px-4 py-3 text-sm font-semibold transition ${record.favorite ? 'bg-rose-500 text-white hover:bg-rose-400' : 'bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'}`}
      >
        {record.favorite ? 'Favorite ✅' : 'Add Favorite'}
      </button>
    </div>
  )
}
