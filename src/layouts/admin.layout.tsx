import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/admin/sidebar'

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
            Nav
        </div>

        <div className='flex-1'>
            <Outlet/>
        </div>

      </div>
    </main>
  )
}

export default AdminLayout
