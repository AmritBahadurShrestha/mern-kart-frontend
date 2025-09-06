import React from 'react'
import { Link, useLocation } from 'react-router'
import { MdDashboard } from 'react-icons/md'
import { MdBrandingWatermark } from 'react-icons/md'
import { MdCategory } from 'react-icons/md'
import { FaProductHunt } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { FaListCheck } from 'react-icons/fa6'

const links = [
    {
        label: 'Dashboard',
        link: '/admin',
        icon: <MdDashboard />
    },
    {
        label: 'Brand',
        link: '/admin/brand',
        icon: <MdBrandingWatermark />
    },
    {
        label: 'Category',
        link: '/admin/category',
        icon: <MdCategory />
    },
    {
        label: 'Products',
        link: '/admin/products',
        icon: <FaProductHunt />
    },
    {
        label: 'Users',
        link: '/admin/users',
        icon: <FaUsers />
    },
    {
        label: 'Orders',
        link: '/admin/orders',
        icon: <FaListCheck />
    }
]

const SidebarLinks = () => {
    const location = useLocation()
    const active_path = location.pathname

    return (
        <div className='flex flex-col gap-1'>
            {
                links.map(item => (
                    <Link
                        key={item.link}
                        to={item.link}
                        className={`
                            flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                            hover:bg-indigo-50 hover:text-indigo-600
                            ${active_path === item.link 
                                ? 'bg-indigo-100 text-indigo-600 font-bold shadow-md'
                                : 'text-gray-700'
                            }
                        `}
                    >
                        <div className='text-xl'>
                            {item.icon}
                        </div>
                        <p className='text-md font-medium'>{item.label}</p>
                    </Link>
                ))
            }
        </div>
    )
}


export default SidebarLinks
