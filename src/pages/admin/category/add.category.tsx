import React from 'react'
import PageHeader from '../../../components/admin/header/page-header'

const CreateCategory = () => {
  return (
    <main className='h-full w-full bg-gray-50 p-8'>
      <PageHeader
        key={'create-category'}
        title='Add New Category'
        sub_title='All Products Categories'
        button_text='View List'
        link_to={'/admin/category'}
      />

      <div className='min-h-[400px] mt-5 p-6 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Category Form</h1>

        <form className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='name' className='text-gray-700 font-medium mb-1'>Category Name</label>
            <input
              id='name'
              type='text'
              placeholder='Enter category name'
              className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='description' className='text-gray-700 font-medium mb-1'>Description</label>
            <textarea
              id='description'
              placeholder='Enter category description'
              className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
              rows={4}
            />
          </div>

          <button
            type='button'
            className='self-start cursor-pointer bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-200'
          >
            Add Category
          </button>
        </form>
      </div>
    </main>
  )
}

export default CreateCategory
