const DataTable = ({ columns, rows, loading, emptyText = 'No records found' }) => {
  if (loading) return <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-500">Loading data...</div>
  if (!rows?.length) return <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">{emptyText}</div>

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-black uppercase tracking-wide text-slate-500">
            <tr>{columns.map((column) => <th key={column.key} className="px-4 py-3">{column.label}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => (
              <tr key={row._id || row.id || JSON.stringify(row).slice(0, 30)} className="hover:bg-orange-50/40">
                {columns.map((column) => <td key={column.key} className="px-4 py-3 align-middle text-slate-700">{column.render ? column.render(row) : row[column.key]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable
