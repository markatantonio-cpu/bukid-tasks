import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api/taskApi.js'

function AssignedUser({ userId }) {
  const { data: user, isLoading, isError } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    retry: false,
  })

  if (isLoading) return <span className="text-stone-400">Loading...</span>
  if (isError) return <span>User {userId}</span>
  return <span>{user.name}</span>
}

export default AssignedUser
