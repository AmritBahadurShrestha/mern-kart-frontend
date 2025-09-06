import React from 'react'

interface IProps {
    count: number
    label: string
}

const CountCard: React.FC<IProps> = ({ count, label }) => {
  return (
    <div className='rounded-md shadow-lg border p-6 flex flex-col gap-6 bg-gradient-to-r from-indigo-50 to-indigo-100 hover:shadow-xl transition-all duration-300'>
        <h1 className='text-2xl font-bold text-indigo-700'>
            {label}
        </h1>

        <span className='w-full text-end text-3xl font-semibold text-indigo-900'>
            {count}
        </span>

    </div>
  )
}

export default CountCard
