import api from '.'

export const add_to_cart = async(data: {productId:string, quantity: number}) => {

    try {
        
        const response = await api.post(`/cart`, data)
        return response.data

    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}
