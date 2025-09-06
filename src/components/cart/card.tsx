import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FaRupeeSign, FaTrash, FaMinus, FaPlus } from "react-icons/fa6";
import { remove_from_cart, update_cart_quantity } from "../../api/cart.api";
import type { ICartItem } from "../../types/cart.types";

interface IProps {
  item: ICartItem;
}

const CartCard: React.FC<IProps> = ({ item }) => {
  const queryClient = useQueryClient();

  // Remove
  const { mutate: removeItem } = useMutation({
    mutationFn: remove_from_cart,
    onSuccess: (response) => {
      toast.success(response.message || "Removed from cart");
      queryClient.invalidateQueries({ queryKey: ["get_cart"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  // Update qty
  const { mutate: updateQty } = useMutation({
    mutationFn: update_cart_quantity,
    onSuccess: (response: any) => {
      toast.success(response.message || "Quantity updated");
      queryClient.invalidateQueries({ queryKey: ["get_cart"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  return (
    <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all duration-200">
      {/* Product */}
      <div className="flex items-center gap-5">
        <img
          src={item.product.cover_image.path}
          alt={item.product.name}
          className="w-20 h-20 object-cover rounded-lg border border-gray-200"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-lg leading-tight">
            {item.product.name}
          </h3>
          <div className="flex items-center gap-1 text-indigo-600 font-bold text-base mt-1">
            <FaRupeeSign size={14} />
            <span>{item.product.price.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Qty + Remove */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-lg overflow-hidden">
          <button
            onClick={() =>
              updateQty({ id: item.product._id, quantity: item.quantity - 1 })
            }
            disabled={item.quantity <= 1}
            className="cursor-pointer px-3 py-2 text-indigo-600 bg-gray-50 hover:bg-indigo-100 disabled:opacity-40 disabled:cursor-not-allowed border-r"
          >
            <FaMinus size={12} />
          </button>
          <span className="px-4 py-2 font-medium text-gray-900 bg-white min-w-[40px] text-center border-x-0">
            {item.quantity}
          </span>
          <button
            onClick={() =>
              updateQty({ id: item.product._id, quantity: item.quantity + 1 })
            }
            className="cursor-pointer px-3 py-2 text-indigo-600 bg-gray-50 hover:bg-indigo-100 border-l"
          >
            <FaPlus size={12} />
          </button>
        </div>
        <button
          onClick={() => removeItem(item.product._id)}
          className="cursor-pointer text-red-500 hover:text-red-600 transition-colors"
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
