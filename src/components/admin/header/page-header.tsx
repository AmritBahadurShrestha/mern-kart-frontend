import React from 'react'
import { Link } from 'react-router'
import { IoIosAdd } from "react-icons/io";

interface IProps {
    title: string
    sub_title?: string
    button_text?: string
    link_to?: string
}

const PageHeader: React.FC<IProps> = ({title, sub_title, button_text, link_to}) => {
  return (
    <div className='flex justify-between items-center border border-gray-600 rounded-md p-5'>
        <div className='flex flex-col'>
            <h1 className='text-lg font-bold text-blue-600'>{title}</h1>
            <p className='text-sm font-semibold text-gray-600'>{sub_title}</p>
        </div>

        {button_text && link_to && <Link to={link_to}
            className='flex items-center gap-1 p-2 rounded-lg bg-blue-600 text-white'
        >
            <IoIosAdd size={25}/>
            <p>{button_text}</p>
        </Link>}

      </div>
  )
}

export default PageHeader
