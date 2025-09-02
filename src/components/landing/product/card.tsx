import { useMutation, useQueryClient } from "@tanstack/react-query";
import { add_to_wishlist } from "../../../api/wishlist.api";
import type { IProduct } from "../../../types/products.types";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { FaRupeeSign } from "react-icons/fa6";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {

  const queryClient = useQueryClient();

  // Add to wishlist Mutation
  const {mutate, isPending} = useMutation({
    mutationFn: add_to_wishlist,
    onSuccess:(response) => {
      toast.success(response.message)
      
      // Refresh wishlist data
      queryClient.invalidateQueries({ queryKey: ["get_wishlist"] });
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const addToList = () => {
    mutate(product._id)
  }

  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100">
  {/* Product Image */}
  <div className="h-50 w-full overflow-hidden">
    <img
      src={product.cover_image.path}
      alt={product.name}
      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
    />
  </div>

  {/* Product Info */}
  <div className="p-5">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
      {product.name}
    </h3>
    <p className="text-sm sm:text-base text-gray-500 mt-2 line-clamp-3">
      {product.description}
    </p>

    {/* Price */}
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-1 text-xl font-bold text-indigo-600">
        <FaRupeeSign size={18} />
        <span>{product.price}</span>
      </div>

      {/* Stock */}
      <div>
        {product?.stock > 5 ? (
          <span className="text-xs sm:text-sm font-medium text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
            In Stock
          </span>
        ) : (
          <span className="text-xs sm:text-sm font-medium text-red-700 bg-red-100 px-2.5 py-1 rounded-full">
            Out of Stock
          </span>
        )}
      </div>
    </div>

    {/* Buttons */}
    <div className="flex items-center justify-between gap-3 mt-6">
      <Link to={`/product/${product?._id}?name=${product?.name}`} className="w-1/2">
        <button className="cursor-pointer w-full px-4 py-2 text-sm font-medium bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 border border-gray-200 transition-colors">
          View Details
        </button>
      </Link>
      <button
        onClick={addToList}
        disabled={isPending}
        className="cursor-pointer w-1/2 disabled:cursor-not-allowed px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        {isPending ? "Adding..." : "Add to Wishlist"}
      </button>
    </div>
  </div>
</div>


  );
};

export default ProductCard;
