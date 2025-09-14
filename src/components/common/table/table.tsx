import * as React from 'react'

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface IProps {
    columns: any[]
    data: any[]
}

const Table:React.FC<IProps> = ({columns, data=[]}) => {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

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

        {/* Pagination */}
        <div>

        </div>
      </table>
    </div>
  )
}

export default Table
