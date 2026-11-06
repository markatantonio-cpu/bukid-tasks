function ErrorMessage({ message }) {
  return (
    <p role="alert" className="rounded border border-red-300 bg-red-50 p-4 text-red-700">
      {message}
    </p>
  )
}

export default ErrorMessage
