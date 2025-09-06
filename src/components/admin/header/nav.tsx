import React from 'react'
import { useAuth } from '../../../context/auth.context'

const AdminNavbar = () => {
    const { user } = useAuth()
    return (
        <nav className='w-full h-full flex justify-between items-center px-8 py-4 bg-gray-300 shadow-md'>
            
            {/* Welcome Section */}
            <div>
                <p className='capitalize text-lg text-blue-600 font-medium'>
                    Welcome Back, {(user?.role ?? 'ADMIN').toLocaleLowerCase()}
                </p>
            </div>

            {/* User Info & Logout */}
            <div className='flex flex-col items-end gap-1'>
                <p className='text-lg font-semibold text-violet-600'>Super Admin</p>
                <div>
                    <p className='text-lg text-red-600 font-medium cursor-pointer hover:text-red-500 transition-colors'>
                        Logout
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default AdminNavbar
