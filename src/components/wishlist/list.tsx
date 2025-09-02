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
    <div className="mt-6 pb-12">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-25">
        {isLoading ? (
          <div className="col-span-full flex justify-center items-center w-full h-64">
            <p className="text-[16px] text-gray-700">Loading wishlist...</p>
          </div>
        ) : (
          data?.data?.map((item: IProduct) => (
            <WishListCard key={item._id} wishlistItem={item} />
          ))
        )}
      </div>
    </div>

  )
};

export default WishList;
