import { Helmet } from 'react-helmet'
import PageHeader from '../../../components/admin/header/page-header'
import ProductForm from '../../../components/admin/product/form'

const CreateProduct = () => {
  return (
    <main className='h-full w-full bg-gray-50 p-8'>
      <Helmet>
        <title>Create Product</title>
      </Helmet>
      <PageHeader
        key={'create-product'}
        title='Add New Product'
        sub_title='All Products'
        button_text='View List'
        link_to={'/admin/product'}
      />

      <div className='min-h-[400px] mt-5 p-6 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Product Form</h1>

        <ProductForm/>
        
      </div>
    </main>
  )
}

export default CreateProduct
