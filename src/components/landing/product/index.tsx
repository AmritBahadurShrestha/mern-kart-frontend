import { useQuery } from "@tanstack/react-query"
import ProductCard from "./card"
import { getFeaturedProduct } from "../../../api/product.api";
import type { IProduct } from './../../../types/products.types';


const ProductList = () => {

  const {data, isLoading} = useQuery({
    queryFn: getFeaturedProduct,
    queryKey: ['featured_product']
  })

  return (
    <div className="mt-6 pb-50">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <div className="col-span-full flex justify-center items-center w-full h-full">
            <p className="text-[16px] text-gray-700">Loading...</p>
          </div>
        ) : (
          data?.data.map((product: IProduct) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  )
}

export default ProductList
