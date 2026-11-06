function EmptyState({ message, onClear }) {
  return (
    <div className="rounded border border-dashed border-stone-300 bg-white p-6 text-center">
      <p className="text-stone-600">{message}</p>
      {onClear && (
        <button
          onClick={onClear}
          className="mt-3 rounded border border-green-700 px-4 py-1.5 text-sm text-green-800 hover:bg-green-50"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}

export default EmptyState
