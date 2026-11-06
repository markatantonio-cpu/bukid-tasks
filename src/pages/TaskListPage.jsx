import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchTodos, fetchUsers } from '../api/taskApi.js'
import { isDone } from '../utils/tasks.js'
import FilterBar from '../components/FilterBar.jsx'
import FarmhandGroup from '../components/FarmhandGroup.jsx'
import LoadingSkeleton from '../components/LoadingSkeleton.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import EmptyState from '../components/EmptyState.jsx'

function TaskListPage({ toggledIds, onToggleDone }) {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('open')
  const [userId, setUserId] = useState('all')

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

  function clearFilters() {
    setSearch('')
    setStatus('all')
    setUserId('all')
  }

  // the tasks are grouped by farmhand, so wait for both
  if (isLoading || usersLoading) return <LoadingSkeleton />
  if (isError || usersError) {
    return <ErrorMessage message="Something went wrong loading tasks. Please try again." />
  }
  if (tasks.length === 0) return <EmptyState message="No tasks yet." />

  const filteredTasks = tasks.filter((task) => {
    const done = isDone(task, toggledIds)
    if (status === 'open' && done) return false
    if (status === 'done' && !done) return false
    if (userId !== 'all' && task.userId !== Number(userId)) return false
    return task.title.toLowerCase().includes(search.toLowerCase())
  })

  const openTasks = tasks.filter((task) => !isDone(task, toggledIds))

  return (
    <section>
      <h1 className="text-2xl font-bold md:text-3xl">Farm tasks</h1>
      <p className="mb-4 text-stone-600">
        {openTasks.length} open jobs for {users.length} farmhands
      </p>

      <FilterBar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        userId={userId}
        onUserChange={setUserId}
        users={users}
      />

      {filteredTasks.length === 0 && (
        <EmptyState message="No tasks match your filters." onClear={clearFilters} />
      )}

      {users.map((user) => {
        const userTasks = filteredTasks.filter((task) => task.userId === user.id)
        if (userTasks.length === 0) return null

        return (
          <FarmhandGroup
            key={user.id}
            name={user.name}
            openCount={openTasks.filter((task) => task.userId === user.id).length}
            tasks={userTasks}
            toggledIds={toggledIds}
            onToggleDone={onToggleDone}
          />
        )
      })}
    </section>
  )
}

export default TaskListPage
