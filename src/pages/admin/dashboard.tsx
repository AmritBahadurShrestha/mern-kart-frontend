import { useQuery } from '@tanstack/react-query'
import CountCard from '../../components/admin/dashboard/count-card'
import { fetchDashboard } from '../../api/dashboard.api'

interface DashboardData {
  categories: number
  products: number
  users: number
  brands: number
  orders: number
}

const Dashboard = () => {
  const { data, isLoading } = useQuery<DashboardData, Error>({
    queryFn: fetchDashboard,
    queryKey: ['dashboard']
  })

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
      </div>
    )

  return (
    <main className='h-full w-full p-8 bg-gray-50'>
      <h1 className='text-2xl font-bold text-gray-800 mb-4'>Dashboard</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        <CountCard
          label='Categories'
          count={data?.categories || 0}
        />
        <CountCard
          label='Products'
          count={data?.products || 0}
        />
        <CountCard
          label='Users'
          count={data?.users || 0}
        />
        <CountCard
          label='Brands'
          count={data?.brands || 0}
        />
        <CountCard
          label='Orders'
          count={data?.orders || 0}
        />
      </div>
    </main>
  )
}

export default Dashboard
