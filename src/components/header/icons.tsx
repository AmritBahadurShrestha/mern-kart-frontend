import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";

const IconSection = () => {
    return(
        <div className="flex gap-5 items-center">
            <CiHeart size={30} className="text-indigo-500"/>
            <FaCartPlus size={30} className="text-indigo-500"/>
            <div className="flex items-center gap-3">
                <IoPersonCircleOutline size={30} className="text-indigo-500"/>
                <div className="mt-0">
                    <p className="font-bold">Amrit</p>
                    <p className="text-indigo-800">LogOut</p>
                </div>
            </div>
        </div>
    )
}

export default IconSection
