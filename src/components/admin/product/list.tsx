
import { createColumnHelper } from '@tanstack/react-table'
import Table from '../../common/table/table'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import ActionButtons from '../../common/table/action-button'
import toast from 'react-hot-toast'
import { deleteProduct, getAllProduct } from '../../../api/product.api'
import { useState } from 'react'
import ConfirmationModal from '../../modal/confirmation.modal'


const ProductList = () => {

  // const [page, setPage] = useState(1)
  // const perPage = 10

    const [show, setShow] = useState(false)
    const [selectedProduct, setselectedProduct] = useState(null)

    const QueryClient = useQueryClient()

    const {data, isLoading} = useQuery({
        queryFn: getAllProduct,
        queryKey: ['get_all_product']
    })

    // Delete Mutation
    const {mutate, isPending} = useMutation({
        mutationFn: deleteProduct,
        onSuccess: (response) => {
            toast.success(response.message ?? 'Product deleted')
            QueryClient.invalidateQueries({queryKey: ['get_all_product']})
            setShow(false)
        },
        onError: (error) => {
            toast.error(error.message ?? 'Product could not deleted')
        }
    })

    const onDelete = (id:string) => {
        mutate(id)
    }

    const columnHelper = createColumnHelper<any>()
    
    const columns = [
        columnHelper.accessor('name', {
          header: () => <span>Product Name</span>,
          cell: (info) => {
              const product = info.row.original
              return (
                  <div className='flex items-center gap-4 justify-center'>
                      <div className='h-12 w-12 flex-shrink-0'>
                          <img src={product.cover_image.path}
                          className="h-full w-full object-contain rounded-md border border-gray-200 shadow-sm bg-white p-1"
                      />
                      </div>

                      {/* Product Name + Images */}
                      <div className="flex flex-col">
                        {/* Name */}
                        <span className="font-medium text-gray-800">{info.getValue()}</span>

                        {/* Images */}
                        {product.images?.length > 0 && (
                          <div className="flex gap-1 mt-1">
                            {product.images.map((img: any, idx: any) => (
                              <div key={idx} className="h-6 w-6 flex-shrink-0">
                                <img
                                  src={img.path}
                                  alt={`img-${idx}`}
                                  className="h-full w-full object-cover rounded border border-gray-200 shadow-sm"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>    
                  </div>
              )
          }
        }),
        columnHelper.accessor('description', {
          id: 'description',
          cell: info => <span className='line-clamp-1 max-w-[300px]'> <i>{info.getValue() ?? '-'}</i> </span>,
          header: () => <span className='line-clamp-1 max-w-[300px]'>Description</span>
        }),

        // Brand
        columnHelper.accessor('brand.name', {
          header: () => <span>Brand</span>,
          cell: (info) => <span>{info.getValue() ?? '-'}</span>,
        }),
    
        // Category
        columnHelper.accessor('category.name', {
          header: () => <span>Category</span>,
          cell: (info) => <span>{info.getValue() ?? '-'}</span>,
        }),

        // Price
        columnHelper.accessor('price', {
          header: () => <span>Price</span>,
          cell: (info) => <span className="font-semibold text-green-600">Rs.{info.getValue()}</span>,
        }),
    
        // Stock
        columnHelper.accessor('stock', {
          header: () => <span>Stock</span>,
          cell: (info) => <span>{info.getValue()}</span>,
        }),

        // Featured
        columnHelper.accessor('isFeatured', {
          header: () => <span>Featured</span>,
          cell: (info) => (
            info.getValue()
              ? <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Yes</span>
              : <span className="px-2 py-1 text-xs bg-gray-100 text-gray-500 rounded">No</span>
          ),
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
              return <ActionButtons edit_link={`/admin/product/edit/${original?._id}?name=${original.name}`} onDelete={ () => {
                setselectedProduct(original?._id)
              setShow(true)
            }}/>
          }
        }),
    ]

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-600 animate-pulse">Loading products...</p>
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
    <>
      <div className="h-full w-full bg-white rounded-2xl border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Products</h2>
        <div className="h-full w-full overflow-x-auto">
          <Table
            columns={columns}
            data={data?.data}
            // pagination={data?.data.length || 0 }
            // onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      </div>
      {show && <ConfirmationModal onCancel={() => {setShow(false)}} onConfirm={() => {onDelete(selectedProduct ?? '') }}/>}
    </>
  )
}

export default ProductList
