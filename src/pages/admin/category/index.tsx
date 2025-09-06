import React from 'react'
import PageHeader from '../../../components/admin/header/page-header'
import { FaEdit, FaTrash } from 'react-icons/fa'

const dummyCategories = [
  { id: 1, name: 'Electronics', description: 'Electronic gadgets and devices' },
  { id: 2, name: 'Fashion', description: 'Clothes, shoes and accessories' },
  { id: 3, name: 'Home & Kitchen', description: 'Household items' },
  { id: 4, name: 'Books', description: 'Fiction, non-fiction, educational books' },
  { id: 5, name: 'Sports', description: 'Sports equipment and accessories' },
  { id: 6, name: 'Toys', description: 'Toys for kids of all ages' },
  { id: 7, name: 'Beauty & Health', description: 'Cosmetics and healthcare products' },
  { id: 8, name: 'Automotive', description: 'Car accessories and tools' },
  { id: 9, name: 'Groceries', description: 'Daily essentials and food items' },
  { id: 10, name: 'Music & Instruments', description: 'Musical instruments and accessories' },
]

const CategoryPage = () => {
  return (
    <main className='h-full w-full bg-gray-50 p-8'>
      <PageHeader
        key={'list-category'}
        title='Category List'
        sub_title='All Products Categories'
        button_text='Add Category'
        link_to={'/admin/category/add'}
      />

      <div className='mt-6 bg-white rounded-xl shadow-md border border-gray-200 p-6 overflow-x-auto'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Categories</h2>

        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='px-4 py-2 font-semibold text-gray-700'>#</th>
              <th className='px-4 py-2 font-semibold text-gray-700'>Name</th>
              <th className='px-4 py-2 font-semibold text-gray-700'>Description</th>
              <th className='px-4 py-2 font-semibold text-gray-700'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyCategories.map((category, index) => (
              <tr
                key={category.id}
                className={`border-b hover:bg-gray-50 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className='px-4 py-2'>{index + 1}</td>
                <td className='px-4 py-2'>{category.name}</td>
                <td className='px-4 py-2'>{category.description}</td>
                <td className='px-4 py-2 flex gap-3'>
                  <button className='text-blue-600 hover:text-blue-800 transition-colors'>
                    <FaEdit />
                  </button>
                  <button className='text-red-600 hover:text-red-800 transition-colors'>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default CategoryPage
