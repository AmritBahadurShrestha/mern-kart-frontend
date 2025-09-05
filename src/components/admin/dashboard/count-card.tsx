import React from 'react'

interface IProps {
    count: number
    label: string
}

const CountCard:React.FC<IProps> = ({count, label}) => {
  return (
    <div className='rounded-md shadow border p-4 flex flex-col gap-6'>
        <h1 className='text-2xl font-bold text-gray-600'>
            {label}
        </h1>

        <span className='w-full text-end'>
            {count}
        </span>
      
    </div>
  )
}

export default CountCard
