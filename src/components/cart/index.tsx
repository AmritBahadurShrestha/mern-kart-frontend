import { useQuery } from "@tanstack/react-query";
import { get_cart } from "../../api/cart.api";
import type { ICartItem } from "../../types/cart.types";
import CartList from "./list";

const Cart = () => {
  const { data, isLoading } = useQuery({
    queryFn: get_cart,
    queryKey: ["get_cart"],
  });

  return (
    <div className="mt-6 pb-12">
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-64">
          <p className="text-[16px] text-gray-700">Loading cart...</p>
        </div>
      ) : data?.items && data.items.length > 0 ? (
        <CartList cartItems={data.items as ICartItem[]} />
      ) : (
        <div className="flex justify-center items-center w-full h-64">
          <p className="text-[16px] text-gray-700">Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
