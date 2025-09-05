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
    <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 border">
      {/* Product */}
      <div className="flex items-center gap-4">
        <img
          src={item.product.cover_image.path}
          alt={item.product.name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <h3 className="font-medium text-gray-900">{item.product.name}</h3>
          <div className="flex items-center gap-1 text-indigo-600 font-semibold">
            <FaRupeeSign size={14} />
            <span>{item.product.price}</span>
          </div>
        </div>
      </div>

      {/* Qty + Remove */}
      <div className="flex items-center gap-3">
        <div className="flex items-center border rounded-md">
          <button
            onClick={() =>
              updateQty({ id: item._id, quantity: item.quantity - 1 })
            }
            disabled={item.quantity <= 1}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
          >
            <FaMinus size={12} />
          </button>
          <span className="px-3">{item.quantity}</span>
          <button
            onClick={() =>
              updateQty({ id: item.product._id, quantity: item.quantity + 1 })
            }
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
          >
            <FaPlus size={12} />
          </button>
        </div>
        <button
          onClick={() => removeItem(item.product._id)}
          className="text-red-600 hover:text-red-700"
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
