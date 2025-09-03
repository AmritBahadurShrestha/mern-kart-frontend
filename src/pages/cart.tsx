
import { WithAuth } from '../components/hoc/with-auth.hoc'
import { Role } from '../types/enum'

const CartPage = () => {
  return (
    <div>
        <h1>Cart Page</h1>
    </div>
  )
}

const ProtectedCartPage = WithAuth(CartPage, [Role.USER])
export default ProtectedCartPage
