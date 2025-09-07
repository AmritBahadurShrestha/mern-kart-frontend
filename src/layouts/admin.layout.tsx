import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/admin/sidebar'
import AdminNavbar from '../components/admin/header/nav'
import { WithAuth } from '../components/hoc/with-auth.hoc'
import { Role } from '../types/enum'

const AdminLayout = () => {
  return (
    <main className='h-screen flex'>
        {/* Side Bar */}
      <div className='w-[200px] border-r border-gray-300'>
        <Sidebar/>
      </div>

        {/* Nav Bar & Outlet */}
      <div className='flex-1 h-full flex flex-col overflow-auto'>
        <div className='border-gray-300 h-16 shadow'>
            <AdminNavbar/>
        </div>

        <div className='flex-1'>
            <Outlet/>
        </div>

      </div>
    </main>
  )
}

const Component = WithAuth(AdminLayout, [Role.ADMIN, Role.SUPER_ADMIN])
export default Component
