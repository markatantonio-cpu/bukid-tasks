function StatusBadge({ done }) {
  if (done) {
    return <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">Done</span>
  }
  return <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">Open</span>
}

export default StatusBadge
