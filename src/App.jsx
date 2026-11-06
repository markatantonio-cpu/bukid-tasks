import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import TaskListPage from './pages/TaskListPage.jsx'
import TaskDetailPage from './pages/TaskDetailPage.jsx'
import StatsPage from './pages/StatsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  // ids of the tasks I ticked or unticked
  // it's here because the list, detail and stats pages all need it
  const [toggledIds, setToggledIds] = useState([])

  function toggleDone(id) {
    setToggledIds((prev) =>
      prev.includes(id) ? prev.filter((toggledId) => toggledId !== id) : [...prev, id]
    )
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-4xl px-4 py-6 md:px-6 md:py-10">
        <Routes>
          <Route
            path="/"
            element={<TaskListPage toggledIds={toggledIds} onToggleDone={toggleDone} />}
          />
          <Route
            path="/tasks/:id"
            element={<TaskDetailPage toggledIds={toggledIds} onToggleDone={toggleDone} />}
          />
          <Route path="/stats" element={<StatsPage toggledIds={toggledIds} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
