
import { createColumnHelper } from '@tanstack/react-table'
import Table from '../../common/table/table'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import ActionButtons from '../../common/table/action-button'
import toast from 'react-hot-toast'
import { deleteBrand, getAllBrand } from '../../../api/brand.api'


const BrandList = () => {

    const QueryClient = useQueryClient()

    const {data, isLoading} = useQuery({
        queryFn: getAllBrand,
        queryKey: ['get_all_brand']
    })

    // Delete Mutation
    const {mutate, isPending} = useMutation({
        mutationFn: deleteBrand,
        onSuccess: (response) => {
            toast.success(response.message ?? 'Brand deleted')
            QueryClient.invalidateQueries({queryKey: ['get_all_brand']})
        },
        onError: (error) => {
            toast.error(error.message ?? 'Brand could not deleted')
        }
    })

    const onDelete = (id:string) => {
        mutate(id)
    }

    const columnHelper = createColumnHelper<any>()
    
    const columns = [
      columnHelper.accessor('name', {
        header: () => <span>Brand Name</span>,
        cell: (info) => {
            return (
                <div className='flex items-center gap-4 justify-center'>
                    <div className='h-12 w-12 flex-shrink-0'>
                        <img src={info.row.original.logo.path}
                        className="h-full w-full object-contain rounded-md border border-gray-200 shadow-sm bg-white p-1"
                    />
                    </div>
                    <span className="font-medium text-gray-800">{info.getValue()}</span>
                </div>
            )
        }
      }),
      columnHelper.accessor('description', {
        id: 'description',
        cell: info => <span className='line-clamp-1 max-w-[300px]'> <i>{info.getValue() ?? '-'}</i> </span>,
        header: () => <span className='line-clamp-1 max-w-[300px]'>Description</span>
      }),
      columnHelper.accessor('createdAt', {
        header: () => 'Created At',
        cell: info => <span>{new Intl.DateTimeFormat('en-us', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        }).format(new Date(info.renderValue()))}</span>
      }),
      columnHelper.accessor('updatedAt', {
        header: () => <span>Updated At</span>,
        cell: info => <span>{new Intl.DateTimeFormat('en-us', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        }).format(new Date(info.renderValue()))}</span>
      }),
      columnHelper.accessor('_', {
        header: () => <span>Actions</span>,
        footer: info => info.column.id,
        cell: ({row:{original}}) => {
            return <ActionButtons onDelete={ () => {onDelete(original?._id)}}/>
        }
      }),
    ]

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-600 animate-pulse">Loading brands...</p>
        </div>
      )
    }
    
    if (isPending) {
      return (
        <div className="flex justify-center items-center h-64 bg-white/60 rounded-xl shadow-inner">
          <p className="text-blue-600 font-medium animate-bounce">Please Wait...</p>
        </div>
      )
    }

  return (
    <div className="h-full w-full bg-white rounded-2xl border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Brands</h2>
      <div className="h-full w-full overflow-x-auto">
        <Table columns={columns} data={data?.data}/>
      </div>
    </div>
  )
}

export default BrandList
