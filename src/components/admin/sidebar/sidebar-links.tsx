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
                <Link key={item.link} to={item.link} className={`flex items-center gap-2 border p-2 rounded-md hover:bg-gray-500
                    ${active_path === item.link ? 'font-bold text-indigo-500' : 'text-gray-950'}
                    `}>
                    <div>
                        {item.icon}
                    </div>
                    <p className='text-lg font-semibold'>{item.label}</p>
                </Link>
            ))
        }
    </div>
  )
}

export default SidebarLinks
