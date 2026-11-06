function LoadingSkeleton() {
  return (
    <div className="space-y-2">
      <div className="h-10 animate-pulse rounded bg-stone-200" />
      <div className="h-10 animate-pulse rounded bg-stone-200" />
      <div className="h-10 animate-pulse rounded bg-stone-200" />
      <p className="text-sm text-stone-500">Loading...</p>
    </div>
  )
}

export default LoadingSkeleton
