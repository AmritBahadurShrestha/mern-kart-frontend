// types/wishlist.types.ts
import type { IProduct } from "./products.types";

export interface IWishlist {
  _id: string;            // wishlist item ID
  userId: string;        // user who added it
  productId: string;     // product reference
  product: IProduct;     // actual product details
  createdAt: string;     // when it was added
}
