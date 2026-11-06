import { useQuery } from '@tanstack/react-query'
import { fetchTodos, fetchUsers } from '../api/taskApi.js'
import { isDone } from '../utils/tasks.js'
import LoadingSkeleton from '../components/LoadingSkeleton.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import EmptyState from '../components/EmptyState.jsx'
import FarmhandSummary from '../components/FarmhandSummary.jsx'

function StatsPage({ toggledIds }) {
  // same keys as the list page so it uses the cache
  const { data: tasks = [], isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    retry: false,
  })
  const {
    data: users = [],
    isLoading: usersLoading,
    isError: usersError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    retry: false,
  })

  if (isLoading || usersLoading) return <LoadingSkeleton />
  if (isError || usersError) {
    return <ErrorMessage message="Something went wrong loading the stats. Please try again." />
  }
  if (tasks.length === 0) return <EmptyState message="No tasks yet." />

  const rows = users.map((user) => {
    const userTasks = tasks.filter((task) => task.userId === user.id)
    const doneCount = userTasks.filter((task) => isDone(task, toggledIds)).length

    return {
      id: user.id,
      name: user.name,
      open: userTasks.length - doneCount,
      done: doneCount,
    }
  })

  const totalDone = tasks.filter((task) => isDone(task, toggledIds)).length

  return (
    <section>
      <h1 className="text-2xl font-bold md:text-3xl">Stats</h1>
      <p className="mb-4 text-stone-600">Open and finished jobs for each farmhand.</p>
      <FarmhandSummary rows={rows} totalOpen={tasks.length - totalDone} totalDone={totalDone} />
    </section>
  )
}

export default StatsPage
