import { useQuery } from "@tanstack/react-query";
import { get_wishlist } from "../../api/wishlist.api";
import WishListCard from "./card";
import type { IProduct } from "../../types/products.types";

const WishList = () => {
  const { data, isLoading } = useQuery({
    queryFn: get_wishlist,
    queryKey: ["get_wishlist"],
  });

  console.log(data)

  return (

    <div className="mt-6 pb-50">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div>
        {
          isLoading && <div className="flex justify-center items-center w-full h-full">
            <p className="text-[16px] text-gray-700">Loading wishlist...</p>
          </div>
        }
      </div>
      {!isLoading && data?.data?.map((item: IProduct) => (
        <WishListCard
          key={item._id}
          wishlistItem={item}
        />
      ))}
      </div>
    </div>
  )
};

export default WishList;
