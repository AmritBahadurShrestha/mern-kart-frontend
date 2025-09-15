import api from '.'

export const getFeaturedProduct = async() => {
    try {
        const response = await api.get('/product/featured')
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const get_by_id = async(id:string) => {
    try {
        const response = await api.get(`/product/${id}`)
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const getAllProduct = async() => {
    try {
        const response = await api.get('/product')
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const postProduct = async(data: FormData) => {
    try {
        const response = await api.post('/product', data)
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const deleteProduct = async(id:string) => {
    try {
        const response = await api.delete(`/product/${id}`)
        return response.data
    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}


export const getProductById = async(id:string) => {
    try {
        const response = await api.get(`/product/${id}`)
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const updateProduct = async({ _id, formData }: { _id: string, formData: FormData }) => {
  try {
    const response = await api.put(`/product/${_id}`, formData)
    return response.data
  } catch (error: any) {
    throw error.response.data
  }
}
