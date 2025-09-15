import PageHeader from '../../../components/admin/header/page-header'
import { useParams, useSearchParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import ProductForm from '../../../components/admin/product/form'
import { getProductById } from '../../../api/product.api'

const UpdateProduct = () => {

    const {id} = useParams()
    const search = useSearchParams()
    console.log(id, search[0].get('name'))

    const {isLoading, data} = useQuery({
        queryFn: () => {return getProductById(id || '')},
        queryKey: ['get_product_by_id', id]
    })

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-600 animate-pulse">Loading...</p>
        </div>
      )
    }

    console.log(isLoading, data?.data)

  return (
    <main className='h-full w-full bg-gray-50 p-8'>
      <PageHeader
        key={'update-product'}
        title='Update Product'
        sub_title={`update product ${search[0].get('name')}`}
        button_text='View List'
        link_to={'/admin/product'}
      />

      <div className='min-h-[400px] mt-5 p-6 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col gap-4'>
        {/* <h1 className='text-2xl font-bold text-gray-800 mb-4'>Product Form</h1> */}

        <ProductForm data={data?.data}/>
        
      </div>
    </main>
  )
}

export default UpdateProduct
