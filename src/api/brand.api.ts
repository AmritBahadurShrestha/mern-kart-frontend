import api from '.'

export const getAllBrand = async() => {
    try {
        const response = await api.get('/brand')
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const postBrand = async(data: FormData) => {
    try {
        const response = await api.post('/brand', data)
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}
