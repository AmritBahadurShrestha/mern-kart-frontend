import React, { useState } from 'react'
import type { IProduct } from '../../../../types/products.types'
import { IoMdStar } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa6";
import { CiShoppingTag } from "react-icons/ci";
import { TbBrandAppgallery } from "react-icons/tb";
import QuantityInput from '../../../common/inputs/quantity-input';
import { useMutation } from '@tanstack/react-query';
import { add_to_cart } from '../../../../api/cart.api';
import toast from 'react-hot-toast';
import { add_to_wishlist } from '../../../../api/wishlist.api';

interface IProps {
    product: IProduct
}

const Detail:React.FC<IProps> = ({product}) => {

  const [quantity, setQuantity] = useState(1);

  const {mutate: cart_mutate, isPending: is_cart_Pending} = useMutation({
    mutationFn: add_to_cart,
    onSuccess: (response) => {
      toast.success(response.message ?? 'Product added to cart');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // Add to wishlist Mutation
  const {mutate: wishlist_mutate, isPending: is_wishlist_pending} = useMutation({
    mutationFn: add_to_wishlist,
    onSuccess:(response) => {
      toast.success(response.message)

    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  // Mutate Wishlist
  const handle_wishlist = () => {
    wishlist_mutate(product._id)
  }

  //Mutate Cart
  const handle_cart = () => {
    cart_mutate({quantity, productId: product._id})
  }

  return (
    <div className='px-6'>
        <div className='flex items-center justify-between mb-4'>
            {/* product name */}
            <h1 className='text-2xl font-bold text-violet-700 tracking-wide'>
              {product.name}
            </h1>

            {/* rating */}
            <div className='flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-lg shadow-sm'>
              <span className='text-sm font-semibold text-gray-800'>4.5/5</span>
              <IoMdStar size={22} className='text-yellow-500 drop-shadow-sm'/>
            </div>
        </div>

        {/* price */}
        <div className='flex items-center justify-between mt-3'>
          <div className='flex items-center gap-1 text-xl font-semibold text-blue-600'>
            <FaRupeeSign size={20}/>
            <span>{product.price}</span>
          </div>
        
          <div>
            {product.stock > 5 ? (
              <span className='text-green-600 font-medium'>In Stock</span>
            ) : (
              <span className='text-red-600 font-medium'>Out of Stock</span>
            )}
          </div>
        </div>
        
        {/* brand & category */}
        <div className='mt-4 flex gap-4 items-center'>
          <div className='flex items-center gap-1'>
            <CiShoppingTag size={22} className='text-blue-600'/>
            <span className='px-2 py-1 rounded-md bg-gray-200 text-sm font-medium'>
              {product.category.name}
            </span>
          </div>
            <TbBrandAppgallery size={22} className='text-blue-600'/>
            <span className='px-2 py-1 rounded-md bg-gray-200 text-sm font-medium'>
                {product.brand.name}
            </span>
        </div>
        
        {/* description */}
        <div className='mt-4'>
          <p className='text-gray-700 leading-relaxed'>{product.description}</p>
        </div>
        
        {/* Quantity */}
        <QuantityInput quantity={quantity} setQuantity={setQuantity}/>
        
        {/* buttons */}
        <div className='flex w-full gap-4'>
          <button
            onClick={handle_cart}
            disabled={is_cart_Pending}
            className= 'disabled:cursor-not-allowed cursor-pointer w-full bg-violet-700 hover:bg-violet-800 text-white text-lg font-semibold py-2 rounded-lg shadow'
          >
            {is_cart_Pending ? 'Adding... ' : 'Add To Cart'}
          </button>

          <button
            onClick={handle_wishlist}
            disabled={is_cart_Pending || is_wishlist_pending}
            className='cursor-pointer w-full bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold py-2 rounded-lg shadow'
          >
            Add To Wishlist
          </button>

        </div>

    </div>
  )
}

export default Detail
