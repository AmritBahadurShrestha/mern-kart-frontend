import type { IProduct } from "./products.types";

export interface ICartItem {
  _id: string; // cart item id
  product: IProduct;
  quantity: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ICartResponse {
  items: ICartItem[];
  total: number;
  message?: string;
}
