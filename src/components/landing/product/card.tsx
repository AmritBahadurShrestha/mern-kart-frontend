import type { IProductResponse } from "../../../types/products.types";

interface IProps {
  product: IProductResponse;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden border border-gray-200">
      {/* Product Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-indigo-600">
            ${product.price}
          </span>
          <button className="px-3 py-1.5 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
