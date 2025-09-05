import React from 'react'
import CountCard from '../../components/admin/dashboard/count-card'

const Dashboard = () => {
  return (
    <main className='h-full w-full '>
      <h1>Dashboard Page</h1>
      <div className='grid grid-cols-4 gap-6'>
        <CountCard
          label='Categories'
          count={10}
        />
        <CountCard
          label='Products'
          count={10}
        />
        <CountCard
          label='Users'
          count={10}
        />
        <CountCard
          label='Brands'
          count={10}
        />
        <CountCard
          label='Orders'
          count={10}
        />
      </div>
    </main>
  )
}

export default Dashboard
