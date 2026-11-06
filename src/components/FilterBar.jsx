function FilterBar({ search, onSearchChange, status, onStatusChange, userId, onUserChange, users }) {
  const inputClass = 'w-full rounded border border-stone-300 bg-white px-3 py-2 text-sm'

  return (
    <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search tasks..."
        aria-label="Search tasks"
        className={inputClass}
      />

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        aria-label="Filter by status"
        className={inputClass}
      >
        <option value="open">Status: Open</option>
        <option value="done">Status: Done</option>
        <option value="all">Status: All</option>
      </select>

      <select
        value={userId}
        onChange={(e) => onUserChange(e.target.value)}
        aria-label="Filter by farmhand"
        className={inputClass}
      >
        <option value="all">Farmhand: All</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar
