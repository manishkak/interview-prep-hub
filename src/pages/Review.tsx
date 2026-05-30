import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { getDaysUntilDue, getDueDate } from '../services/reviewService'

function DueSection({ title, problems }: { title: string; problems: any[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
      <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
      {problems.length === 0 ? (
        <div className="rounded-3xl bg-white px-4 py-5 text-slate-600 dark:bg-slate-900 dark:text-slate-400">No problems are due in this timeframe.</div>
      ) : (
        <div className="space-y-3">
          {problems.map((problem) => (
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
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  Due {getDueDate(problem.record)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Review() {
  const { problems, getRecord } = useAppContext()

  const dueGroups = useMemo(() => {
    const today: any[] = []
    const tomorrow: any[] = []
    const thisWeek: any[] = []

    problems.forEach((problem) => {
      const record = getRecord(`${problem.topicSlug}:${problem.problemSlug}`)
      const days = getDaysUntilDue(record)
      if (days === 0) {
        today.push({ ...problem, record })
      } else if (days === 1) {
        tomorrow.push({ ...problem, record })
      } else if (days !== null && days > 1 && days <= 7) {
        thisWeek.push({ ...problem, record })
      }
    })

    return { today, tomorrow, thisWeek }
  }, [getRecord, problems])

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="mb-2 text-sm uppercase tracking-[0.24em] text-sky-600">Review Queue</div>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-100">Spaced repetition due list</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Plan your next review session by due date and focus on problems that need attention.</p>
      </div>
      <DueSection title="Due Today" problems={dueGroups.today} />
      <DueSection title="Due Tomorrow" problems={dueGroups.tomorrow} />
      <DueSection title="Due This Week" problems={dueGroups.thisWeek} />
    </div>
  )
}
