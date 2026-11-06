// if I ticked/unticked the task, flip the value from the API
export function isDone(task, toggledIds) {
  if (toggledIds.includes(task.id)) {
    return !task.completed
  }
  return task.completed
}
