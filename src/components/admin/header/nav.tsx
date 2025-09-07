import React from 'react'
import { useAuth } from '../../../context/auth.context'
import type { IUser } from '../../../types/auth.types'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import { logout } from '../../../api/auth.api'
import { useMutation } from '@tanstack/react-query'

const AdminNavbar = () => {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()
    const {mutate, isPending} = useMutation({
        mutationFn: logout,
        onSuccess: (data) => {
            setUser(null)
            navigate('/login', {replace: true})
            toast.success(data.message || 'Logged Out')
        },
        onError: (error) => {
        toast.error(error?.message || 'Something went wrong')
        }
    })
    console.log(user)

    const get_user_full_name = (user: IUser | null) => {
        return`${user?.first_name} ${user?.last_name}`
    }

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
                <p className='text-lg font-semibold text-violet-600'>{get_user_full_name(user)}</p>
                <div>
                    <p onClick={() => {mutate()}} className='text-lg text-red-600 font-medium cursor-pointer hover:text-red-500 transition-colors'>
                        {isPending ? 'Pending' : 'Logout'}
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default AdminNavbar
