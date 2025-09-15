import api from '.'
import type { ICategoryData, ICategoryResponse } from '../types/category.types'

export const getAllCategory = async() => {
    try {
        const response = await api.get('/category')
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const postCategory = async(data: ICategoryData) => {
    try {
        const response = await api.post('/category', data)
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const getCategoryById = async(id:string) => {
    try {
        const response = await api.get(`/category/${id}`)
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const updateCategory = async({ _id, ...data } : Partial<ICategoryResponse>) => {
    try {
        const response = await api.put(`/category/${_id}`, data)
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export const deleteCategory = async(id:string) => {
    try {
        
        const response = await api.delete(`/category/${id}`)
        return response.data
    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}
