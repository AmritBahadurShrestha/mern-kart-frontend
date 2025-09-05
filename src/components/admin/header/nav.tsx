import React from 'react'
import { useAuth } from '../../../context/auth.context'

const AdminNavbar = () => {
    const {user} = useAuth()
  return (
    <nav className='w-full h-full flex justify-between items-center'>
        <div>
            <p className='capitalize text-lg text-blue-600'>Welcome Back, {(user?.role ?? 'ADMIN').toLocaleLowerCase()}</p>
        </div>

        <div>
            <p className='text-lg font-semibold text-violet-600'>Super Admin</p>
            <div>
                <p className='text-lg text-red-600'>Logout</p>
            </div>
        </div>
    </nav>
  )
}

export default AdminNavbar
