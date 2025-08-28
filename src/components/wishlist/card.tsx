import { CiTrash } from "react-icons/ci";
import type { IProduct } from "../../types/products.types";


interface IProps {
  product: IProduct;
}

const WishListCard: React.FC<IProps> = ({ product }) => {
  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden border border-gray-200">

        {/* Remove from list button */}
        <div className="w-fit absolute top-2 right-3 cursor-pointer z-20">
            <CiTrash size={26} className="text-red-500"/>
        </div>
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

        {/* Buttons */}
        <div className="flex items-center justify-between mt-5">
          <button className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
