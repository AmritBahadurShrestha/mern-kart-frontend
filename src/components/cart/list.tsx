import { useNavigate } from "react-router";
import type { ICartItem } from "../../types/cart.types";
import CartCard from "./card";
import { FaRupeeSign } from "react-icons/fa6";

interface IProps {
  cartItems: ICartItem[];
}

const CartList: React.FC<IProps> = ({ cartItems }) => {

   const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-8 border-t pt-6">
            <span className="text-lg font-semibold text-gray-800">Total</span>
            <span className="flex items-center text-2xl font-bold text-indigo-600">
              <FaRupeeSign className="mr-1" size={20} />
              {subtotal.toLocaleString()}
            </span>
          </div>

          {/* Checkout */}
          <button
            onClick={() => navigate("/checkout", { state: { cartItems } })}
            className="cursor-pointer mt-6 mb-12 w-full bg-indigo-600 text-white py-4 rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all font-semibold text-lg">
              Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartList;
