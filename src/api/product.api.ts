import api from '.'

export const getAllProduct = async() => {
    try {
        const response = await api.get('/product')
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}
