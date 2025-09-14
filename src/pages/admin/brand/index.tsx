
import BrandList from '../../../components/admin/brand/list'
import PageHeader from '../../../components/admin/header/page-header'

const BrandPage = () => {

  return (
    <main className="h-full w-full bg-gray-50 p-8">
      <PageHeader
        key={'list-brand'}
        title="Brand List"
        sub_title="All Products Brands"
        button_text="Add Brand"
        link_to={'/admin/brand/add'}
      />

      <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-200 p-6 overflow-x-auto">
        <BrandList/>
      </div>
    </main>
  )
}

export default BrandPage
