import type { IImage, IResponse } from "./global.types"

export interface IBrandData{
    name: string
    logo: File | FileList
    description: string
}

export interface IBrandResponse extends IResponse{
    name: string
    logo: IImage
    description?: string
}
