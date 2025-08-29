import { createContext, useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { type IUser } from './../types/auth.types';
import { get_profile } from "../api/auth.api";

interface IContext {
    user: null | IUser,
    setUser: Dispatch<SetStateAction<null>>,
    isLoading: boolean,
    // token: string | null,
    // setToken: Dispatch<SetStateAction<string | null>>
    logout: () => void
}

const initial_value = {
    user: null,
    setUser: () => {},
    isLoading: true,
    // token: null,
    // setToken: () => {},
    logout: () => {}
}

export const AuthContext = createContext<IContext>(initial_value)

// Provider
const AuthProvider: React.FC<{children:React.ReactNode}> = ({children}) => {

    const [user, setUser] = useState(null)
    // const [token, setToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchUser(){
        try {
            const data = await get_profile()
            console.log(data)
            setUser(data.data)
        } catch (error) {
            console.log(error)
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }
    fetchUser()
    }, [])

    const logout = (cb=()=>{}) => {
        localStorage.removeItem('user')
        // localStorage.removeItem('token')
        setUser(null)
        // setToken(null)
        cb()
    }


  return (
    <AuthContext.Provider value={{user,setUser, isLoading, logout}}>
      {children}
    </AuthContext.Provider>
  )
}


// Custom Hook
export const useAuth = () => {

    if (!AuthContext) {
        console.log('useAuth hook must used inside auth provider')
    }
    return useContext(AuthContext)
}



export default AuthProvider
