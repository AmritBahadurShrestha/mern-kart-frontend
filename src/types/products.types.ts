export interface IProductResponse {
    _id: string
    image: string;
    title: string;
    description: string;
    price: string;
    onAddToCart?: () => void;
}
