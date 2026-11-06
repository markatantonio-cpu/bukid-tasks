import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchTodo } from '../api/taskApi.js'
import { isDone } from '../utils/tasks.js'
import StatusBadge from '../components/StatusBadge.jsx'
import AssignedUser from '../components/AssignedUser.jsx'
import LoadingSkeleton from '../components/LoadingSkeleton.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import EmptyState from '../components/EmptyState.jsx'

function TaskDetailPage({ toggledIds, onToggleDone }) {
  const { id } = useParams() // id is a string

  const { data: task, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['todos', id],
    queryFn: () => fetchTodo(id),
    retry: false,
  })

  return (
    <section>
      <Link to="/" className="text-sm text-green-800 hover:underline">
        ← Back to tasks
      </Link>

      <div className="mt-4">
        {isLoading && <LoadingSkeleton />}
        {isError && <ErrorMessage message="Something went wrong loading this task. Please try again." />}
        {isSuccess && !task && <EmptyState message={`Task #${id} was not found.`} />}

        {task && (
          <div className="rounded border border-stone-200 bg-white p-5 md:p-8">
            <h1 className="text-xl font-bold first-letter:uppercase md:text-2xl">{task.title}</h1>
            <div className="mt-2">
              <StatusBadge done={isDone(task, toggledIds)} />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 border-t border-stone-200 pt-4 text-sm sm:grid-cols-2">
              <div>
                <p className="text-stone-500">Assigned to</p>
                <p className="font-semibold">
                  <AssignedUser userId={task.userId} />
                </p>
              </div>
              <div>
                <p className="text-stone-500">Task number</p>
                <p className="font-semibold">{task.id}</p>
              </div>
            </div>

            <button
              onClick={() => onToggleDone(task.id)}
              className="mt-5 rounded bg-green-700 px-4 py-2 text-sm text-white hover:bg-green-800"
            >
              {isDone(task, toggledIds) ? 'Mark as open' : 'Mark done'}
            </button>
            <p className="mt-2 text-xs text-stone-500">Not saved to the API. Resets when you refresh.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default TaskDetailPage
