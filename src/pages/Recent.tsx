import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function Recent() {
  const { problems, getRecord } = useAppContext()

  const recentItems = useMemo(() => {
    return problems
      .map((problem) => ({
        problem,
        record: getRecord(`${problem.topicSlug}:${problem.problemSlug}`)
      }))
      .filter((item) => item.record.lastViewedAt)
      .sort((a, b) => Number(new Date(b.record.lastViewedAt || '')) - Number(new Date(a.record.lastViewedAt || '')))
      .slice(0, 10)
  }, [getRecord, problems])

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="mb-2 text-sm uppercase tracking-[0.24em] text-sky-600">Recent Activity</div>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-100">Last 10 viewed problems</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Resume learning where you left off with the most recently opened problems.</p>
      </div>

      {recentItems.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
          Start viewing problems to populate recent activity.
        </div>
      ) : (
        <div className="space-y-3">
          {recentItems.map(({ problem, record }) => (
            <Link
              key={problem.problemSlug}
              to={`/topic/${problem.topicSlug}/problem/${problem.problemSlug}`}
              className="block rounded-3xl border border-slate-200 bg-white p-4 text-slate-900 transition hover:border-sky-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold">{problem.problemName}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{problem.topicName}</div>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{new Date(record.lastViewedAt || '').toLocaleDateString()}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
