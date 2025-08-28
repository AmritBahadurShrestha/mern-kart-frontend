import api from '.'

export const getFeaturedProduct = async() => {
    try {
        const response = await api.get('/product/featured')
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}
