import type { IBrandResponse } from "./brand.types"
import type { ICategoryResponse } from "./category.types"
import type { IImage, IResponse } from "./global.types"

export interface IProduct {
    _id: string
    name: string
    cover_image: IImage
    images?: IImage[]
    brand: IBrandResponse
    category: ICategoryResponse
    createdBy: IResponse
    isFeatured: boolean
    stock: number
    price: number
    description?: string;
    size?: string
    onAddToCart?: () => void;
}
