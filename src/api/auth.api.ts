import api from './'
import type { ILoginData, IRegisterData } from "../types/auth.types"


export const login = async(data: ILoginData) => {

    try {
        
        const response = await api.post(`/auth/login`, data)

        console.log(response)
        return response.data

    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}

export const register = async(data: IRegisterData) => {

    try {
        
        const response = await api.post(`/auth/register`, data)

        console.log(response)
        return response.data

    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}

export const logout = async() => {

    try {
        
        const response = await api.post(`/auth/logout`)

        console.log(response)
        return response.data

    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}
