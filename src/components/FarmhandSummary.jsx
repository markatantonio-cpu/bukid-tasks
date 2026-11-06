function FarmhandSummary({ rows, totalOpen, totalDone }) {
  return (
    <table className="w-full border border-stone-200 bg-white text-sm">
      <thead className="border-b border-stone-200 text-left text-stone-500">
        <tr>
          <th className="px-3 py-2 md:px-5 md:py-3">Farmhand</th>
          <th className="px-3 py-2 text-right md:px-5 md:py-3">Open</th>
          <th className="px-3 py-2 text-right md:px-5 md:py-3">Done</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id} className="border-b border-stone-200">
            <td className="px-3 py-2 md:px-5 md:py-3">{row.name}</td>
            <td className="px-3 py-2 text-right md:px-5 md:py-3">{row.open}</td>
            <td className="px-3 py-2 text-right md:px-5 md:py-3">{row.done}</td>
          </tr>
        ))}
        <tr className="font-semibold">
          <td className="px-3 py-2 md:px-5 md:py-3">Total</td>
          <td className="px-3 py-2 text-right md:px-5 md:py-3">{totalOpen}</td>
          <td className="px-3 py-2 text-right md:px-5 md:py-3">{totalDone}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default FarmhandSummary
