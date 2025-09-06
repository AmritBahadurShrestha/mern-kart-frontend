import React from 'react'
import { Link } from 'react-router'
import { IoIosAdd } from "react-icons/io";

interface IProps {
    title: string
    sub_title?: string
    button_text?: string
    link_to?: string
}

const PageHeader: React.FC<IProps> = ({ title, sub_title, button_text, link_to }) => {
  return (
    <div className='flex justify-between items-center border border-gray-200 rounded-xl p-6 bg-white shadow-md'>
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold text-blue-600'>{title}</h1>
            {sub_title && <p className='text-sm font-medium text-gray-500 mt-1'>{sub_title}</p>}
        </div>

        {button_text && link_to && (
          <Link 
            to={link_to}
            className='flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition duration-200'
          >
            <IoIosAdd size={20}/>
            <span>{button_text}</span>
          </Link>
        )}
    </div>
  )
}

export default PageHeader
