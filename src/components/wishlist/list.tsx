import { useQuery } from "@tanstack/react-query"
import type { IProduct } from "../../types/products.types"
import WishListCard from "./card"
import { get_wishlist } from "../../api/wishlist.api"


const WishList = () => {

  const {data} = useQuery({
    queryFn: get_wishlist,
    queryKey: ['get_wishlist']
  })
  console.log(data)

  return (
    <div className="w-full h-full">
      {/* <WishListCard product={{} as IProduct}/>
      <WishListCard product={{} as IProduct}/>
      <WishListCard product={{} as IProduct}/>
      <WishListCard product={{} as IProduct}/>
      <WishListCard product={{} as IProduct}/> */}
      
      
    </div>
  )
}

export default WishList
