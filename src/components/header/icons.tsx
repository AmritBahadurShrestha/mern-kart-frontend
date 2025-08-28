import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/auth.context";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { logout } from "../../api/auth.api";

const IconSection = () => {

    // const user = JSON.parse(localStorage.getItem('user') as string) ?? null
    const {user, setUser, setToken} = useAuth()
    const navigate = useNavigate()

    const {mutate, isPending} = useMutation({
        mutationFn: logout,
        onSuccess: (data) => {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            setUser(null)
            setToken(null)
            navigate('/login', {replace: true})
            toast.success(data.message || 'Logged Out')
        },
        onError: (error) => {
        toast.error(error?.message || 'Something went wrong')
        }
    })

    const get_user_full_name = (user: any) => {
        return`${user.first_name} ${user.last_name}`
    }
    return(
        <div className="flex gap-5 items-center">
            <Link to={'/wishlist'}><CiHeart size={30} className="text-indigo-500"/></Link>
            <Link to={'/cart'}><FaCartPlus size={30} className="text-indigo-500"/></Link>

            { user ? <div className="flex items-center gap-3">
                <IoPersonCircleOutline size={30} className="text-indigo-500"/>
                <div className="mt-0">
                    <p className="font-bold">{get_user_full_name(user)}</p>
                    <p onClick={() => {mutate()}} className="text-indigo-800">{isPending ? 'Logged Out' : 'logout'}</p>
                </div>
            </div>
            :
            <Link to= {'/login'}>
            <div className="sursor-pointer border border-indigo-700 px-6">
                <IoMdLogIn size={16} className="text-indigo-600"/>
                <span className="text-indigo-700 font-semibold">Login</span>
            </div>
            </Link>
            }

        </div>
    )
}

export default IconSection
