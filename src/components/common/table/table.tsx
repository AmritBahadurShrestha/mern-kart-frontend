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
      next_page: number | null,
      prev_page: number | null,
      has_next_page: boolean,
      has_prev_page: boolean
    }
    onPageChange?: (page: number) => void
}

const Table:React.FC<IProps> = ({ columns, data=[], pagination, onPageChange }) => {
  console.log(pagination)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const handlePrev = () => {
    if (pagination && pagination.has_prev_page) {
      onPageChange && onPageChange(pagination.prev_page ?? 1)
    }
  }

  const handleNext = () => {
    if (pagination && pagination.has_next_page) {
      onPageChange && onPageChange(pagination.next_page ?? pagination.totalPages)
    }
  }

  const handlePageClick = (page: number) => {
    onPageChange?.(page)
  }

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
            disabled={!pagination.has_prev_page}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
          >
            Prev
          </button>
          {Array.from({ length: pagination.totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i + 1)}
              className={`px-3 py-1 rounded hover:bg-gray-300 ${
                pagination.has_prev_page  ? 'bg-indigo-600 text-white' : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            disabled={!pagination.has_next_page}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      )}

    </div>
  )
}

export default Table
