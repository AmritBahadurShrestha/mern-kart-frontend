import PageHeader from '../../../components/admin/header/page-header'
import BrandForm from '../../../components/admin/brand/form'

const CreateBrand = () => {
  return (
    <main className='h-full w-full bg-gray-50 p-8'>
      <PageHeader
        key={'create-brand'}
        title='Add New Brand'
        sub_title='All Products Brands'
        button_text='View List'
        link_to={'/admin/brand'}
      />

      <div className='min-h-[400px] mt-5 p-6 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Brand Form</h1>

        <BrandForm/>
        
      </div>
    </main>
  )
}

export default CreateBrand
