import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { getDaysUntilDue } from '../services/reviewService'

function ProgressBar({ label, value, total }: { label: string; value: number; total: number }) {
  const percent = total === 0 ? 0 : Math.round((value / total) * 100)
  return (
    <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div className="h-full rounded-full bg-sky-500" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="text-xs text-slate-500 dark:text-slate-400">{value} / {total} problems</div>
    </div>
  )
}

export default function Dashboard() {
  const { topics, problems, getRecord } = useAppContext()

  const totals = useMemo(() => {
    const reviewed = problems.filter((problem) => getRecord(`${problem.topicSlug}:${problem.problemSlug}`).reviewed).length
    const favorites = problems.filter((problem) => getRecord(`${problem.topicSlug}:${problem.problemSlug}`).favorite).length
    const needsRevision = problems.filter((problem) => getRecord(`${problem.topicSlug}:${problem.problemSlug}`).needsRevision).length
    const dueToday = problems.filter((problem) => {
      const record = getRecord(`${problem.topicSlug}:${problem.problemSlug}`)
      const days = getDaysUntilDue(record)
      return days === 0
    }).length
    return {
      topics: topics.length,
      problems: problems.length,
      reviewed,
      favorites,
      needsRevision,
      dueToday
    }
  }, [getRecord, problems, topics.length])

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="mb-3 text-sm uppercase tracking-[0.24em] text-sky-600">Dashboard</div>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-100">Study Progress Overview</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Track your review progress, upcoming practice, and performance metrics.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Quick stats</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
              <p className="text-sm text-slate-500">Total Topics</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">{totals.topics}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
              <p className="text-sm text-slate-500">Total Problems</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">{totals.problems}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
              <p className="text-sm text-slate-500">Due Today</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">{totals.dueToday}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
              <p className="text-sm text-slate-500">Favorites</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">{totals.favorites}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <ProgressBar label="Reviewed" value={totals.reviewed} total={totals.problems} />
          <ProgressBar label="Needs Revision" value={totals.needsRevision} total={totals.problems} />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Next actions</h2>
            <p className="text-slate-500 dark:text-slate-400">Jump directly into review, favorites, or your most recent activity.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/review" className="rounded-3xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-500">
              Review Queue
            </Link>
            <Link to="/favorites" className="rounded-3xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900">
              Favorites
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
