
import PageHeader from '../../../components/admin/header/page-header'



const CategoryPage = () => {

  return (
    <main className="h-full w-full bg-gray-50 p-8">
      <PageHeader
        key={'list-category'}
        title="Category List"
        sub_title="All Products Categories"
        button_text="Add Category"
        link_to={'/admin/category/add'}
      />

      <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-200 p-6 overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>

      </div>
    </main>
  )
}

export default CategoryPage
