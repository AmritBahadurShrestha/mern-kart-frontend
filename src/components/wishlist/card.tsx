import { CiTrash } from "react-icons/ci";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { delete_wishlist } from "../../api/wishlist.api";
import type { IProduct } from "../../types/products.types";
import { FaRupeeSign } from "react-icons/fa6";
import { Link } from "react-router";

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
    <div className="relative w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Remove from list button */}
      <div
        className="absolute top-3 right-3 z-20 opacity-80 hover:opacity-100 transition"
        onClick={() => removeWishlist(wishlistItem._id)}
      >
        <CiTrash
          size={24}
          className="text-red-500 hover:text-red-600 transition-colors"
        />
      </div>

      {/* Product Image */}
      <div className="h-56 w-full overflow-hidden relative">
        <img
          src={wishlistItem.cover_image.path}
          alt={wishlistItem.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {wishlistItem.name}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {wishlistItem.description}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-center gap-1 text-xl font-semibold text-blue-600">
          <FaRupeeSign size={20} />
          <span>{wishlistItem.price}</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center mt-4">
          <Link to={`/product/${wishlistItem._id}`}>
          <button className="cursor-pointer px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
