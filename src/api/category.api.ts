import api from '.'

export const getAllCategory = async() => {
    try {
        const response = await api.get('/category')
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}
