import { useLocation, useNavigate } from "react-router";
import { FaRupeeSign } from "react-icons/fa6";
import type { ICartItem } from "../types/cart.types";

interface LocationState {
  cartItems: ICartItem[];
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const cartItems = state?.cartItems || [];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 2000 ? 0 : 100;
  const total = subtotal + shipping;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
        Checkout
      </h2>

      {/* Order Summary */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Order Summary
        </h3>

        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b pb-3 mb-3"
          >
            <div>
              <p className="font-medium text-gray-900">{item.product.name}</p>
              <p className="text-sm text-gray-500">
                Qty: {item.quantity} ×{" "}
                <span className="flex items-center text-indigo-600 font-semibold">
                  <FaRupeeSign size={12} className="mr-1" />
                  {item.product.price.toLocaleString()}
                </span>
              </p>
            </div>
            <span className="flex items-center font-semibold text-gray-800">
              <FaRupeeSign size={14} className="mr-1" />
              {(item.product.price * item.quantity).toLocaleString()}
            </span>
          </div>
        ))}

        {/* Totals */}
        <div className="pt-4 space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="flex items-center">
              <FaRupeeSign size={12} className="mr-1" />
              {subtotal.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span className="flex items-center">
              <FaRupeeSign size={12} className="mr-1" />
              {shipping}
            </span>
          </div>
          <div className="flex justify-between font-bold text-lg text-gray-900 border-t pt-2">
            <span>Total</span>
            <span className="flex items-center text-indigo-600">
              <FaRupeeSign size={16} className="mr-1" />
              {total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Button → Payment */}
      <button
        onClick={() => navigate("/payment", { state: { total } })}
        className="w-full mb-22 cursor-pointer bg-indigo-600 text-white py-4 rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all font-semibold text-lg"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Checkout;
