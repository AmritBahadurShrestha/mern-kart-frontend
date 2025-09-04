
import Cart from '../components/cart'
import ComponentTitle from '../components/common/title-component'
import { WithAuth } from '../components/hoc/with-auth.hoc'
import { Role } from '../types/enum'

const CartPage = () => {
  return (
    <main className="w-full h-full px-36">

      <ComponentTitle
      title= "All Carts Items"
      sub_title="Explore All Carts"
      />

      <div>
        <Cart/>
      </div>

    </main>
  )
}

const ProtectedCartPage = WithAuth(CartPage, [Role.USER])
export default ProtectedCartPage
