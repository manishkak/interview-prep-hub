import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

export default function Settings() {
  const { theme, setTheme } = useAppContext()
  const [message, setMessage] = useState('')

  const resetProgress = () => {
    window.localStorage.removeItem('interview-prep-hub-review-state')
    setMessage('Review progress has been reset. Reload the page to refresh state.')
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="mb-2 text-sm uppercase tracking-[0.24em] text-sky-600">Settings</div>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-100">Personalization & data</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Manage theme preference and review storage.</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Theme</div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setTheme('light')}
            className={`rounded-3xl px-5 py-3 text-sm font-semibold transition ${theme === 'light' ? 'bg-sky-600 text-white' : 'bg-white text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200'}`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`rounded-3xl px-5 py-3 text-sm font-semibold transition ${theme === 'dark' ? 'bg-sky-600 text-white' : 'bg-white text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200'}`}
          >
            Dark
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Data</div>
        <p className="mb-4 text-slate-600 dark:text-slate-400">Reset all review progress and status tags. This cannot be undone.</p>
        <button
          onClick={resetProgress}
          className="rounded-3xl bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-400"
        >
          Reset review data
        </button>
        {message ? <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">{message}</p> : null}
      </div>
    </div>
  )
}
