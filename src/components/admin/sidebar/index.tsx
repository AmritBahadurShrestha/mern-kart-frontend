import React from 'react'
import SidebarLinks from './sidebar-links'

const Sidebar = () => {
  return (
    <div className='h-full w-full p-2'>
        {/* Logo Section */}
        <div className='flex gap-2 items-center justify-center'>
            <img src='/Logo.png ' className='h-[25px] w-[25px]'/>

            <div>
                <p className='font-bold text-xl text-blue-600'>Mern Kart</p>
            </div>

        </div>

        {/* Link Section */}
        <div className='mt-6'>
            <SidebarLinks/>
        </div>
    
    </div>
  )
}

export default Sidebar
