import PageHeader from '../../../components/admin/header/page-header';

const CategoryPage = () => {
  return (
    <main className='h-full w-full'>
      <PageHeader
        key={'list-category'}
        title='Category List'
        sub_title='All Products Categories'
        button_text='Add Category'
        link_to={'/admin/category/add'}
      />
    </main>
  )
}

export default CategoryPage
