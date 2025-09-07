// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
// import PageHeader from '../../../components/admin/header/page-header'
// import { FaEdit, FaTrash } from 'react-icons/fa'
// import { deleteCategory, getAllCategory } from '../../../api/category.api'

// interface Category {
//   _id: string
//   name: string
//   description: string
// }

// const CategoryPage = () => {
//   const queryClient = useQueryClient()

//   // Fetch categories
//   const {
//     data: categories,
//     isLoading,
//     isError,
//     error,
//   } = useQuery<Category[]>({
//     queryKey: ['categories'],
//     queryFn: getAllCategory,
//   })

//   // Delete mutation
//   const { mutate: removeCategory, isPending: isDeleting } = useMutation({
//     mutationFn: deleteCategory,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['categories'] }) // refresh category list
//     },
//     onError: (err: any) => {
//       alert(err.message) // show error message
//     },
//   })

//   // Handle delete button
//   const handleDelete = (id: string) => {
//     if (confirm('Are you sure you want to delete this category?')) {
//       removeCategory(id)
//     }
//   }

//   return (
//     <main className="h-full w-full bg-gray-50 p-8">
//       <PageHeader
//         key={'list-category'}
//         title="Category List"
//         sub_title="All Products Categories"
//         button_text="Add Category"
//         link_to={'/admin/category/add'}
//       />

//       <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-200 p-6 overflow-x-auto">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>

//         {isLoading && <p className="text-gray-500">Loading categories...</p>}
//         {isError && <p className="text-red-500">{(error as any)?.message ?? String(error)}</p>}

//         {!isLoading && !isError && categories && (
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="px-4 py-2 font-semibold text-gray-700">#</th>
//                 <th className="px-4 py-2 font-semibold text-gray-700">Name</th>
//                 <th className="px-4 py-2 font-semibold text-gray-700">Description</th>
//                 <th className="px-4 py-2 font-semibold text-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {categories?.map((category, index) => (
//                 <tr
//                   key={category._id}
//                   className={`border-b hover:bg-gray-50 ${
//                     index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
//                   }`}
//                 >
//                   <td className="px-4 py-2">{index + 1}</td>
//                   <td className="px-4 py-2">{category.name}</td>
//                   <td className="px-4 py-2">{category.description}</td>
//                   <td className="px-4 py-2 flex gap-3">
//                     <button className="text-blue-600 hover:text-blue-800 transition-colors">
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(category._id)}
//                       disabled={isDeleting}
//                       className="text-red-600 hover:text-red-800 transition-colors disabled:opacity-50"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </main>
//   )
// }

// export default CategoryPage
