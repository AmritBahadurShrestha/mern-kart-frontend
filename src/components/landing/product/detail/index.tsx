import ProductList from ".."
import type { IProduct } from "../../../../types/products.types"
import Detail from "./detail"
import ImageCarousel from "./image-carousel"


interface IProps {
    product: IProduct
}
const DetailSection:React.FC<IProps> = ({product}) => {
  return (
    <div className="grid grid-cols-5 gap-12">
        {/* image */}
        <div className="col-span-2">
            <ImageCarousel images={product.images ?? []}/>
        </div>

        {/* detail */}
        <div className="col-span-3">
            <Detail product={product}/>
        </div>

        {/* featured products */}
        <div className="col-span-5">
          <h1 className="text-2xl text-blue-700">Related Products</h1>
            <ProductList/>
        </div>

    </div>
  )
}

export default DetailSection
