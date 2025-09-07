import React from 'react'

interface IProps {
    isPending: boolean
    label: string
    type: 'submit' | 'button'
}

const Button:React.FC<IProps> = ({isPending, label, type='button'}) => {
  return (
    <div>
        <button
            type={type}
            disabled={isPending}
            className='self-start mt-4 cursor-pointer bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-200'
            >
                {label}
        </button>
    </div>
  )
}

export default Button
