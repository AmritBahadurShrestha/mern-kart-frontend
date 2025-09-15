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

export const getBrandById = async(id:string) => {
    try {
        const response = await api.get(`/brand/${id}`)
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const updateBrand = async({ _id, formData }: { _id: string, formData: FormData }) => {
  try {
    const response = await api.put(`/brand/${_id}`, formData)
    return response.data
  } catch (error: any) {
    throw error.response.data
  }
}

export const deleteBrand = async(id:string) => {
    try {
        const response = await api.delete(`/brand/${id}`)
        return response.data
    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}
