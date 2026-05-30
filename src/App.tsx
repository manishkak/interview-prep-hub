import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Dashboard from './pages/Dashboard'
import Favorites from './pages/Favorites'
import ProblemPage from './pages/ProblemPage'
import Recent from './pages/Recent'
import Review from './pages/Review'
import Settings from './pages/Settings'
import Sidebar from './components/Sidebar'
import CommandPalette from './components/CommandPalette'
import './styles.css'

function AppShell() {
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === '/') {
        event.preventDefault()
        const searchInput = document.querySelector<HTMLInputElement>('#global-search')
        searchInput?.focus()
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen((open) => !open)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="app-shell min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="border-b border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <button
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
            onClick={() => setDrawerOpen(true)}
          >
            ☰ Menu
          </button>
          <div className="text-center text-lg font-semibold">Interview Prep Hub</div>
          <Link
            to="/settings"
            className="inline-flex h-10 items-center rounded-xl border border-slate-200 bg-slate-100 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            Settings
          </Link>
        </div>
      </div>

      <div className="mx-auto flex flex-1 min-w-0 w-full max-w-full gap-6 px-4 py-6 lg:px-8">
        <aside className="hidden w-80 shrink-0 min-w-0 lg:block lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
          <Sidebar onMobileClose={() => setDrawerOpen(false)} />
        </aside>

        <main className="flex-1 min-w-0 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/topic/:topicSlug/problem/:problemSlug" element={<ProblemPage />} />
            <Route path="/review" element={<Review />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>

      <Sidebar isMobile open={drawerOpen} onMobileClose={() => setDrawerOpen(false)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppShell />
      </AppProvider>
    </BrowserRouter>
  )
}
