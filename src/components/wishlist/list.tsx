import { useQuery } from "@tanstack/react-query";
import { get_wishlist } from "../../api/wishlist.api";
import type { IWishlist } from "../../types/wishlist.types";
import WishListCard from "./card";

const WishList = () => {
  const { data=[], isLoading } = useQuery({
    queryFn: get_wishlist,
    queryKey: ["get_wishlist"],
  });

  return (

    <div className="mt-6 pb-50">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div>
        {
          isLoading && <div className="flex justify-center items-center w-full h-full">
            <p className="text-[16px] text-gray-700">Loading wishlist...</p>
          </div>
        }
      </div>
      {data.map((item: IWishlist) => (
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
