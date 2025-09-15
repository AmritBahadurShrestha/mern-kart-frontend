import PageHeader from '../../../components/admin/header/page-header'
import { useParams, useSearchParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import BrandForm from '../../../components/admin/brand/form'
import { getBrandById } from '../../../api/brand.api'

const UpdateBrand = () => {

    const {id} = useParams()
    const search = useSearchParams()
    console.log(id, search[0].get('name'))

    const {isLoading, data} = useQuery({
        queryFn: () => {return getBrandById(id || '')},
        queryKey: ['get_brand_by_id', id]
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
        key={'update-brand'}
        title='Update Brand'
        sub_title={`update brand ${search[0].get('name')}`}
        button_text='View List'
        link_to={'/admin/brand'}
      />

      <div className='min-h-[400px] mt-5 p-6 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col gap-4'>
        {/* <h1 className='text-2xl font-bold text-gray-800 mb-4'>Brand Form</h1> */}

        <BrandForm data={data?.data}/>
        
      </div>
    </main>
  )
}

export default UpdateBrand
