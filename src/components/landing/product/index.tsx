import { useQuery } from "@tanstack/react-query"
import ProductCard from "./card"
import { getAllProduct } from "../../../api/product.api";
import type { IProductResponse } from './../../../types/products.types';


const ProductList = () => {

  const {data} = useQuery({
    queryFn: getAllProduct,
    queryKey: ['get_all_product']
  })
  return (
    <div className="mt-6 pb-50">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.data.map((product: IProductResponse) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
      </div>
  )
}

export default ProductList
