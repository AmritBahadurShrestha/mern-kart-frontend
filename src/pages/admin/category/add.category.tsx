import React from 'react'
import PageHeader from '../../../components/admin/header/page-header'

const CreateCategory = () => {
  return (
    <main className='h-full w-full'>
      <PageHeader
      key={'create-category'}
        title='Add New Category'
        sub_title='All Products Categories'
        button_text='View List'
        link_to={'/admin/category'}
      />

      <div className='min-h-[400px] shadow p-3 mt-5 bg-gray-300'>
        <h1>Category Form</h1>
      </div>
    </main>
  )
}

export default CreateCategory
