import * as React from 'react'

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface IProps {
    columns: any[]
    data: any[]
    pagination?: {
      currentPage: number
      totalPages: number
      perPage: number
      total: number
    }
    onPageChange?: (page: number) => void
}

const Table:React.FC<IProps> = ({ columns, data=[], pagination, onPageChange }) => {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const handlePrev = () => {
    if (pagination && pagination.currentPage > 1) {
      onPageChange?.(pagination.currentPage - 1)
    }
  }

  const handleNext = () => {
    if (pagination && pagination.currentPage < pagination.totalPages) {
      onPageChange?.(pagination.currentPage + 1)
    }
  }

  const handlePageClick = (page: number) => {
    onPageChange?.(page)
  }

  // Calculate item range for display
  const startItem = pagination ? (pagination.currentPage - 1) * pagination.perPage + 1 : 0
  const endItem = pagination ? Math.min(startItem + data.length - 1, pagination.total) : 0

  return (
    <div className="w-full overflow-hidden rounded-xl shadow-lg border border-gray-200">
      <table className='w-full text-sm text-gray-700'>
        <thead className='bg-indigo-600 text-white'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                    key={header.id}
                    className="px-4 py-3 text-center font-semibold tracking-wide"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr className={`${index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-indigo-50 transition`} key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td className="px-4 py-3 text-center border-b border-gray-200" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {pagination && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={handlePrev}
            disabled={pagination.currentPage === 1}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: pagination.totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i + 1)}
              className={`px-3 py-1 rounded hover:bg-gray-300 ${
                pagination.currentPage === i + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            disabled={pagination.currentPage === pagination.totalPages}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

    </div>
  )
}

export default Table
