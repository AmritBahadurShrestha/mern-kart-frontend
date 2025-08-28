import type { IProduct } from "../../types/products.types"
import WishListCard from "./card"


const WishList = () => {
  return (
    <div className="w-full h-full">
      <WishListCard product={{} as IProduct}/>
      <WishListCard product={{} as IProduct}/>
      <WishListCard product={{} as IProduct}/>
      <WishListCard product={{} as IProduct}/>
      <WishListCard product={{} as IProduct}/>
      
      
    </div>
  )
}

export default WishList
