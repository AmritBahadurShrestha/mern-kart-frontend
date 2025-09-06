import React from 'react'
import SidebarLinks from './sidebar-links'

const Sidebar = () => {
  return (
    <div className='h-full w-full p-4 bg-white shadow-lg rounded-2xl flex flex-col'>
      
      {/* Logo Section */}
      <div className='flex gap-3 items-center justify-center py-4 border-b border-gray-200'>
        <img 
          src='/Logo.png' 
          className='h-12 w-12 rounded-full object-cover shadow-md' 
          alt='Logo'
        />
        <div>
          <p className='font-bold text-xl text-blue-600'>Mern Kart</p>
        </div>
      </div>

      {/* Link Section */}
      <div className='mt-8 flex-1'>
        <SidebarLinks />
      </div>

      {/* Footer / Optional */}
      <div className='mt-auto text-center text-gray-400 text-sm py-4'>
        &copy; 2025 Mern Kart
      </div>

    </div>
  )
}

export default Sidebar
