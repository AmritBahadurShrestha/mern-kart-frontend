import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";

const IconSection = () => {

    const user = JSON.parse(localStorage.getItem('user') as string) ?? null

    const get_user_full_name = (user: any) => {
        return`${user.first_name} ${user.last_name}`
    }
    return(
        <div className="flex gap-5 items-center">
            <CiHeart size={30} className="text-indigo-500"/>
            <FaCartPlus size={30} className="text-indigo-500"/>

            { user ? <div className="flex items-center gap-3">
                <IoPersonCircleOutline size={30} className="text-indigo-500"/>
                <div className="mt-0">
                    <p className="font-bold">{get_user_full_name(user)}</p>
                    <p className="text-indigo-800">LogOut</p>
                </div>
            </div>
            :
            <div className="sursor-pointer border border-indigo-700 px-6">
                <IoMdLogIn size={16} className="text-indigo-600"/>
                <span className="text-indigo-700 font-semibold">Login</span>
            </div>
            }

        </div>
    )
}

export default IconSection
