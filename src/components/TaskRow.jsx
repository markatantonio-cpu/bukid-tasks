import { Link } from 'react-router-dom'

function TaskRow({ id, title, done, onToggleDone }) {
  return (
    <li className="flex items-start gap-3 px-4 py-3 hover:bg-stone-50 md:px-5">
      <input
        type="checkbox"
        checked={done}
        onChange={() => onToggleDone(id)}
        aria-label={`Mark task ${id} as ${done ? 'open' : 'done'}`}
        className="mt-0.5 h-5 w-5 shrink-0 accent-green-700"
      />
      <div>
        <Link
          to={`/tasks/${id}`}
          className={`block font-medium first-letter:uppercase ${done ? 'text-stone-400 line-through' : 'hover:underline'}`}
        >
          {title}
        </Link>
        <p className="mt-0.5 text-xs text-stone-400">
          Task #{id} {done && '· Done'}
        </p>
      </div>
    </li>
  )
}

export default TaskRow
