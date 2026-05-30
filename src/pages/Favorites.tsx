import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function Favorites() {
  const { topics, getRecord } = useAppContext()

  const favorites = useMemo(
    () =>
      topics
        .map((topic) => ({
          topic,
          problems: topic.problems.filter((problem) => getRecord(`${problem.topicSlug}:${problem.problemSlug}`).favorite)
        }))
        .filter((group) => group.problems.length > 0),
    [getRecord, topics]
  )

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="mb-2 text-sm uppercase tracking-[0.24em] text-sky-600">Favorites</div>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-100">Bookmarked problems</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Review your starred problems grouped by topic.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
          No favorites yet. Mark problems as favorite to save them here.
        </div>
      ) : (
        <div className="space-y-4">
          {favorites.map(({ topic, problems }) => (
            <div key={topic.topicSlug} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{topic.topicName}</div>
              <div className="grid gap-3 sm:grid-cols-2">
                {problems.map((problem) => (
                  <Link
                    key={problem.problemSlug}
                    to={`/topic/${problem.topicSlug}/problem/${problem.problemSlug}`}
                    className="rounded-3xl border border-slate-200 bg-white p-4 text-slate-900 transition hover:border-sky-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    {problem.problemName}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
