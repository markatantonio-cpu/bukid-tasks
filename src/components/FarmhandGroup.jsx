import { useState } from 'react'
import TaskRow from './TaskRow.jsx'
import { isDone } from '../utils/tasks.js'

// how many tasks to show before "Show all"
const ROWS_SHOWN = 5

function FarmhandGroup({ name, openCount, tasks, toggledIds, onToggleDone }) {
  const [showAll, setShowAll] = useState(false)

  // open tasks first, then done tasks
  const openTasks = tasks.filter((task) => !isDone(task, toggledIds))
  const doneTasks = tasks.filter((task) => isDone(task, toggledIds))
  const sortedTasks = [...openTasks, ...doneTasks]

  const shownTasks = showAll ? sortedTasks : sortedTasks.slice(0, ROWS_SHOWN)

  return (
    <div className="mb-8">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="text-lg font-semibold">{name}</h2>
        <span className="text-sm text-stone-500">{openCount} open</span>
      </div>

      <ul className="divide-y divide-stone-200 rounded border border-stone-200 bg-white">
        {shownTasks.map((task) => (
          <TaskRow
            key={task.id}
            id={task.id}
            title={task.title}
            done={isDone(task, toggledIds)}
            onToggleDone={onToggleDone}
          />
        ))}
      </ul>

      {sortedTasks.length > ROWS_SHOWN && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 w-full rounded border border-stone-300 bg-white py-2 text-sm font-medium text-green-800 hover:bg-stone-100"
        >
          {showAll ? 'Show fewer' : `Show all ${sortedTasks.length} tasks`}
        </button>
      )}
    </div>
  )
}

export default FarmhandGroup
