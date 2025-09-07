import PageHeader from '../../../components/admin/header/page-header'
import CategoryForm from '../../../components/admin/category/form'

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

        <CategoryForm/>
        
      </div>
    </main>
  )
}

export default CreateCategory
