import { CiTrash } from "react-icons/ci";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { IWishlist } from "../../types/wishlist.types";
import { delete_wishlist } from "../../api/wishlist.api";

interface IProps {
  wishlistItem: IWishlist;
}

const WishListCard: React.FC<IProps> = ({ wishlistItem }) => {
  const queryClient = useQueryClient();

   const { mutate: removeWishlist } = useMutation({
    mutationFn: (id: string) => delete_wishlist(id),
    onSuccess: (response) => {
      toast.success(response.message || "Removed from wishlist");
      queryClient.invalidateQueries({ queryKey: ["get_wishlist"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to remove");
    },
  });

  return (
    <div className="relative max-w-md w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden border border-gray-200">
      {/* Remove from list button */}
      <div
        className="w-fit absolute top-2 right-3 cursor-pointer z-20"
        onClick={() => removeWishlist(wishlistItem._id)}
      >
        <CiTrash
          size={26}
          className="text-red-500 hover:text-red-700"
        />
      </div>

      {/* Product Image */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={wishlistItem.product.cover_image.path}
          alt={wishlistItem.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {wishlistItem.product.name}
        </h3>
        <p className="text-base text-gray-600 mt-2 line-clamp-3">
          {wishlistItem.product.description}
        </p>

        {/* Price */}
        <div className="mt-4">
          <span className="text-2xl font-bold text-indigo-600">
            NPR {wishlistItem.product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
