import ComponentTitle from "../components/common/title-component"
import WishList from "../components/wishlist/list"


const WishListPage = () => {
  return (
    <main className="w-full h-full px-36">
        <ComponentTitle
        title = 'Wishlist'
        sub_title= 'Items in my wishlist'
        />
        // Product List
        <div>
            <WishList/>

        </div>
    </main>
  )
}

export default WishListPage
