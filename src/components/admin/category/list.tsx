
import { createColumnHelper } from '@tanstack/react-table'
import Table from '../../common/table/table'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteCategory, getAllCategory } from '../../../api/category.api'
import ActionButtons from '../../common/table/action-button'
import toast from 'react-hot-toast'


const CategoryList = () => {

    const QueryClient = useQueryClient()

    const {data, isLoading} = useQuery({
        queryFn: getAllCategory,
        queryKey: ['get_all_category']
    })

    // Delete Mutation
    const {mutate, isPending} = useMutation({
        mutationFn: deleteCategory,
        onSuccess: (response) => {
            toast.success(response.message ?? 'Category deleted')
            QueryClient.invalidateQueries({queryKey: ['get_all_category']})
        },
        onError: (error) => {
            toast.error(error.message ?? 'Category could not deleted')
        }
    })

    const onDelete = (id:string) => {
        mutate(id)
    }

    const columnHelper = createColumnHelper<any>()
    
    const columns = [
      columnHelper.accessor('name', {
        header: () => <span>Category Name</span>,
        cell: info => info.getValue(),
        footer: info => info.column.id
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
            return <ActionButtons edit_link={`/admin/category/edit/${original?._id}?name=${original.name}`} onDelete={ () => {onDelete(original?._id)}}/>
        }
      }),
    ]

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-600 animate-pulse">Loading categories...</p>
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
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Categories</h2>
      <div className="h-full w-full overflow-x-auto">
        <Table columns={columns} data={data?.data}/>
      </div>
    </div>
  )
}

export default CategoryList
