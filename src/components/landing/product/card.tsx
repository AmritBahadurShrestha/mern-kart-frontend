import { useMutation } from "@tanstack/react-query";
import { add_to_wishlist } from "../../../api/wishlist.api";
import type { IProduct } from "../../../types/products.types";
import toast from "react-hot-toast";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {

  // Add to wishlist Mutation
  const {mutate, isPending} = useMutation({
    mutationFn: add_to_wishlist,
    onSuccess:(response) => {
      toast.success(response.message)
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const addToList = () => {
    mutate(product._id)
  }

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden border border-gray-200">
      {/* Product Image */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={product.cover_image.path}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-base text-gray-600 mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-4">
          <span className="text-2xl font-bold text-indigo-600">
            NPR {product.price}
          </span>
        </div>

        {/* Stock */}
        <div className="mt-4">
          <span className="text-2xl font-bold text-indigo-600">
            {product?.stock > 5 ? 'in stock' : 'out of stock'}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-5">
          <button className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
            View Details
          </button>
          <button onClick={addToList} disabled={isPending} className="disabled:cursor-not-allowed cursor-pointer px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            {isPending ? 'Adding to list...' : 'Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
