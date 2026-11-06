const API_URL = 'https://jsonplaceholder.typicode.com'

// my 3 farmhands are users 1, 2 and 3
const FARMHAND_IDS = [1, 2, 3]

// for testing the states: 'slow', 'empty' or 'error' (keep it null)
const FORCE = null

export async function fetchTodos() {
  if (FORCE === 'slow') await new Promise((resolve) => setTimeout(resolve, 3000))
  if (FORCE === 'error') throw new Error('Forced error')
  // gives todos?userId=1&userId=2&userId=3
  const response = await fetch(`${API_URL}/todos?userId=${FARMHAND_IDS.join('&userId=')}`)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  const data = await response.json()
  return FORCE === 'empty' ? [] : data
}

export async function fetchTodo(id) {
  const response = await fetch(`${API_URL}/todos/${id}`)
  if (response.status === 404) return null
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  const task = await response.json()
  // not one of my farmhands' tasks, so treat it as not found
  if (!FARMHAND_IDS.includes(task.userId)) return null
  return task
}

export async function fetchUsers() {
  // gives users?id=1&id=2&id=3
  const response = await fetch(`${API_URL}/users?id=${FARMHAND_IDS.join('&id=')}`)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  return response.json()
}

export async function fetchUser(id) {
  const response = await fetch(`${API_URL}/users/${id}`)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  return response.json()
}
