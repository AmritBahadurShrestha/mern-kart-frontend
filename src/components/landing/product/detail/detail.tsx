import React from 'react'
import type { IProduct } from '../../../../types/products.types'
import { IoMdStar } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa6";
import { CiShoppingTag } from "react-icons/ci";

interface IProps {
    product: IProduct
}

const Detail:React.FC<IProps> = ({product}) => {
  return (
    <div className='px-6'>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-violet-600'>{product.name}</h1>
        
            <div className='flex gap-1 items-center'>
                <span>4.5/5</span>
                <IoMdStar size={25} className='text-yellow-500'/>
            </div>
        </div>

        {/* price */}
        <div className='flex gap-2'>
            <div>
                <FaRupeeSign size={25} className='text-blue-600'/>
                <span>{product.price}</span>
            </div>

            <div>
                {
                    product.stock > 5 ? <span className='text-green-600'>In Stock</span> : <span className='text-red-600'>Out of Stock</span>
                }
            </div>
        </div>

        {/* brand & category */}
        <div className='mt-2 flex gap-3'>
            <div className='flex'>
                <CiShoppingTag size={25} className='text-blue-600'/>
                <span className='border rounded p-1 bg-gray-300'>{product.category.name}</span>
            </div>

            <div>
                
                <span className='border rounded p-1 bg-gray-300'>{product.brand.name}</span>
            </div>
        </div>

        {/* Description */}
        <div>
            <p>{product.description}</p>
        </div>

        {/* Quantity */}
        <div className='mt-3 mb-3'>
            <label htmlFor='quantity'>Quantity</label>
            <div className='border w-fit'>
                <button>-</button>
                <input id='quantity'/>
                <button>+</button>
            </div>
        </div>

        {/* Buttons */}
        <div className='flex w-full gap-5'>
            {/* Add to Cart */}
            <button className='w-full bg-violet-700 text-white text-lg font-bold p-2 rounded cursor-pointer'>
                Add To Cart
            </button>

            {/* Add to wishlist */}
            <button className='w-full bg-violet-700 text-white text-lg font-bold p-2 rounded cursor-pointer'>
                Add To Wishlist
            </button>
        </div>
      
    </div>
  )
}

export default Detail
