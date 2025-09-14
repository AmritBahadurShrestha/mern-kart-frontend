import { CiEdit } from "react-icons/ci"
import { CiTrash } from "react-icons/ci"
import { Link } from 'react-router'

interface IProps {
    onDelete: () => void,
    edit_link?: string
}

const ActionButtons:React.FC<IProps> = ({edit_link='#', onDelete}) => {
    return (
        <div className='flex items-center gap-3'>
                <Link to = {edit_link} className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700 transition">
                    <CiEdit size={20} className='text-violet-500 cursor-pointer'/>
                </Link>
                <button
                    onClick={onDelete}
                    className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition cursor-pointer"
                >
                    <CiTrash size={20}/>
                </button>

            </div>
    )
}

export default ActionButtons
