import { useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Fuse from 'fuse.js'
import { useAppContext } from '../context/AppContext'
import { ReviewStatusFilter } from '../types'

interface SidebarProps {
  isMobile?: boolean
  open?: boolean
  onMobileClose?: () => void
}

const filterLabels: Record<ReviewStatusFilter, string> = {
  all: 'All',
  reviewed: 'Reviewed',
  needsRevision: 'Needs Revision',
  favorites: 'Favorites'
}

function matchesFilter(status: ReviewStatusFilter, record: any) {
  if (status === 'all') {
    return true
  }
  if (status === 'reviewed') {
    return record.reviewed
  }
  if (status === 'needsRevision') {
    return record.needsRevision
  }
  if (status === 'favorites') {
    return record.favorite
  }
  return true
}

export default function Sidebar({ isMobile, open, onMobileClose }: SidebarProps) {
  const { topics, getRecord } = useAppContext()
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<ReviewStatusFilter>('all')
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({})

  const allProblems = useMemo(
    () => topics.flatMap((topic) => topic.problems),
    [topics]
  )

  const matchedProblems = useMemo(() => {
    const trimmed = query.trim()
    let candidates = allProblems
    if (trimmed.length > 0) {
      const fuse = new Fuse(allProblems, {
        keys: ['problemName', 'topicName'],
        threshold: 0.34,
        ignoreLocation: true
      })
      candidates = fuse.search(trimmed).map((result) => result.item)
    }
    return candidates.filter((problem) => matchesFilter(status, getRecord(`${problem.topicSlug}:${problem.problemSlug}`)))
  }, [allProblems, getRecord, query, status])

  const grouped = useMemo(() => {
    return matchedProblems.reduce<Record<string, typeof matchedProblems>>((acc, problem) => {
      if (!acc[problem.topicName]) {
        acc[problem.topicName] = []
      }
      acc[problem.topicName].push(problem)
      return acc
    }, {})
  }, [matchedProblems])

  const content = (
    <div className="flex h-full min-h-0 flex-col gap-4 overflow-y-auto rounded-3xl border border-slate-200 bg-slate-50/95 p-4 shadow-soft dark:border-slate-800 dark:bg-slate-950/95">
      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Search Notes</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Type / to focus. Ctrl/Cmd + K for quick jump.</p>
          </div>
          {isMobile && onMobileClose ? (
            <button onClick={onMobileClose} className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              Close
            </button>
          ) : null}
        </div>
        <input
          id="global-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search problems or topics..."
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-sky-500 dark:focus:ring-sky-500/30"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {Object.entries(filterLabels).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setStatus(key as ReviewStatusFilter)}
            className={`rounded-full border px-3 py-1 text-sm transition ${status === key ? 'border-sky-500 bg-sky-100 text-sky-900 dark:bg-sky-900/30 dark:text-sky-200' : 'border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'}`}
          >
            {label}
          </button>
        ))}
      </div>

      <nav className="pr-1 space-y-3">
        {Object.entries(grouped).map(([topicName, problems]) => {
          const isExpanded = expandedTopics[topicName] ?? false
          const toggleExpanded = () => {
            setExpandedTopics((prev) => ({
              ...prev,
              [topicName]: !prev[topicName]
            }))
          }

          return (
            <div key={topicName} className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <button
                onClick={toggleExpanded}
                className="mb-2 flex w-full items-center justify-between gap-2 rounded-2xl px-2 py-1 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <div className="font-semibold text-slate-800 dark:text-slate-100">{topicName}</div>
                <div className={`transition-transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="h-5 w-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>
              {isExpanded && (
                <div className="space-y-2">
                  {problems.map((problem) => (
                    <NavLink
                      key={problem.problemSlug}
                      to={`/topic/${problem.topicSlug}/problem/${problem.problemSlug}`}
                      className={({ isActive }) =>
                        `block rounded-2xl px-3 py-2 text-sm transition ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-50 text-slate-800 hover:bg-slate-100 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900'}`
                      }
                    >
                      {problem.problemName}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          )
        })}
        {matchedProblems.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            No matching problems found.
          </div>
        ) : null}
      </nav>

      <div className="mt-auto rounded-3xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
        <div className="font-medium text-slate-900 dark:text-slate-100">Quick links</div>
        <div className="mt-2 grid gap-2 text-sm">
          <Link to="/" className="rounded-2xl bg-white px-3 py-2 text-slate-700 shadow-sm transition hover:bg-slate-50 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900">
            Dashboard
          </Link>
          <Link to="/review" className="rounded-2xl bg-white px-3 py-2 text-slate-700 shadow-sm transition hover:bg-slate-50 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900">
            Review Queue
          </Link>
          <Link to="/favorites" className="rounded-2xl bg-white px-3 py-2 text-slate-700 shadow-sm transition hover:bg-slate-50 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900">
            Favorites
          </Link>
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <div className={`fixed inset-0 z-40 transition ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onMobileClose}></div>
        <div className="relative mx-4 my-8 h-[calc(100%-4rem)] overflow-hidden rounded-3xl bg-slate-50 p-4 shadow-2xl dark:bg-slate-950">
          {content}
        </div>
      </div>
    )
  }

  return content
}
