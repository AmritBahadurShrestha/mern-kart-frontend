import axios from "axios"
import type { ILoginData, IRegisterData } from "../types/auth.types"

export const login = async(data: ILoginData) => {

    try {
        
        const response = await axios.post('https://mern-kart-mn96.onrender.com/api/auth/login', data)

        console.log(response)
        return response.data

    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}

export const register = async(data: IRegisterData) => {

    try {
        
        const response = await axios.post('https://mern-kart-mn96.onrender.com/api/auth/register', data)

        console.log(response)
        return response.data

    } catch (error: any) {
        console.log(error)
        throw error.response.data
    }
}
