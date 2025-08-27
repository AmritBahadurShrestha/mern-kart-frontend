import { createContext, useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { type IUser } from './../types/auth.types';

interface IContext {
    user: null | IUser,
    setUser: Dispatch<SetStateAction<null>>,
    isLoading: boolean,
    token: string | null,
    setToken: Dispatch<SetStateAction<string | null>>
    logout: () => void
}

const initial_value = {
    user: null,
    setUser: () => {},
    isLoading: true,
    token: null,
    setToken: () => {},
    logout: () => {}
}

export const AuthContext = createContext<IContext>(initial_value)

// Provider
const AuthProvider: React.FC<{children:React.ReactNode}> = ({children}) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        try {
            const data = localStorage.getItem('user')
        const token = localStorage.getItem('token')
        if (data && token) {
            setUser(JSON.parse(data))
            setToken(token)
        }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const logout = (cb=()=>{}) => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser(null)
        setToken(null)
        cb()
    }


  return (
    <AuthContext.Provider value={{user,setUser,token,setToken,isLoading, logout}}>
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
