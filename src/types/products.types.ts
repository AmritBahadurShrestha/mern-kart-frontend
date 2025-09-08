import type { IUser } from "./auth.types"
import type { IBrandResponse } from "./brand.types"
import type { ICategoryResponse } from "./category.types"
import type { IImage, IResponse } from "./global.types"

export interface IProductData {
    name: string
    description: string
    cover_image: File | FileList
    images?: File[] | FileList
    brand: string
    category: string
    stock: number
    price: number
    size?: string
    isFeatured: boolean
}

export interface IProduct extends IResponse {
    _id: string
    name: string
    cover_image: IImage
    images?: IImage[]
    brand: IBrandResponse
    category: ICategoryResponse
    createdBy: IUser
    isFeatured: boolean
    stock: number
    price: number
    description?: string;
    size?: string
    onAddToCart?: () => void;
}
