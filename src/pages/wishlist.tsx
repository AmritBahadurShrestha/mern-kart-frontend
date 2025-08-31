import ComponentTitle from "../components/common/title-component"
import { WithAuth } from "../components/hoc/with-auth.hoc"
import WishList from "../components/wishlist/list"
import { Role } from "../types/enum"


const WishListPage = () => {
  return (
    <main className="w-full h-full px-36">
        <ComponentTitle
        title = 'Wishlist'
        sub_title= 'Items in my wishlist'
        />
        <div>
            <WishList/>
        </div>
    </main>
  )
}

const Page = WithAuth(WishListPage, [Role.USER])

export default Page
