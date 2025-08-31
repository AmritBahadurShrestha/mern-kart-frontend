import api from '.'

export const add_to_wishlist = async(id:string) => {

    try {
        
        const response = await api.post(`/wish_list`, {id})
        return response.data

    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}

export const get_wishlist = async() => {

    try {
        
        const response = await api.get(`/wish_list`)
        return response.data

    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}

export const delete_wishlist = async (id: string) => {
  try {
    const response = await api.delete(`/wish_list/${id}`)
    return response.data
  } catch (error: any) {
    console.log(error)
    throw error.response.data
  }
}
