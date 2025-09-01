import { CiTrash } from "react-icons/ci";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { delete_wishlist } from "../../api/wishlist.api";
import type { IProduct } from "../../types/products.types";

interface IProps {
  wishlistItem: IProduct;
}

const WishListCard: React.FC<IProps> = ({ wishlistItem }) => {
  const queryClient = useQueryClient();
  console.log("object")

  console.log(wishlistItem)
  const { mutate: removeWishlist } = useMutation({
    mutationFn: (id: string) => delete_wishlist(id),
    onSuccess: (response) => {
      toast.success(response.message);
      queryClient.invalidateQueries({ queryKey: ["get_wishlist"] });
    },
    onError: (error) => {
      toast.error(error.message);
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
          src={wishlistItem.cover_image.path}
          alt={wishlistItem.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {wishlistItem.name}
        </h3>
        <p className="text-base text-gray-600 mt-2 line-clamp-3">
          {wishlistItem.description}
        </p>

        {/* Price */}
        <div className="mt-4">
          <span className="text-2xl font-bold text-indigo-600">
            NPR {wishlistItem.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-6">
          <button className="cursor-pointer px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default WishListCard;
