import { useParams } from "react-router"
import ComponentTitle from "../components/common/title-component"
import { useQuery } from "@tanstack/react-query"
import { get_by_id } from "../api/product.api"
import DetailSection from "../components/landing/product/detail"

const ProductDetailPage = () => {

  const {id} = useParams()

  const {data, isLoading} = useQuery({
    queryFn: () => {return get_by_id(id ?? '')},
    queryKey: ['get_product_by_id', id]
  })

  if(isLoading) {
    return <div className="flex justify-center items-center w-full h-full">
      <p className="text-[16px] text-gray-700">Loading...</p>
    </div>
  }
  console.log(data)

  return (
    <div className="min-h-screen px-36">
      <ComponentTitle
      title={data?.data.name}
      sub_title={data?.data.description}
      />

      {/* Detail Section */}
      <DetailSection product={data?.data}/>
    </div>
  )
}

export default ProductDetailPage
