
import PageHeader from '../../../components/admin/header/page-header'
import ProductList from '../../../components/admin/product/list'

const ProductPage = () => {

  return (
    <main className="h-full w-full bg-gray-50 p-8">
      <PageHeader
        key={'list-product'}
        title="Product List"
        sub_title="All Products"
        button_text="Add Product"
        link_to={'/admin/product/add'}
      />

      <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-200 p-6 overflow-x-auto">
        <ProductList/>
      </div>
    </main>
  )
}

export default ProductPage
