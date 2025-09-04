import type { ICartItem } from "../../types/cart.types";
import CartCard from "./card";

interface IProps {
  cartItems: ICartItem[];
}

const CartList: React.FC<IProps> = ({ cartItems }) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <span className="text-lg font-semibold text-gray-900">Total</span>
            <span className="text-xl font-bold text-indigo-600">
              ₹{subtotal.toLocaleString()}
            </span>
          </div>

          {/* Checkout */}
          <button className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartList;
