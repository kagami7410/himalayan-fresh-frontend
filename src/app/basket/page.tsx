'use client'
import React from 'react'
import { useBasket } from '@/app/components/BasketContext/BasketContext';
import Link from 'next/link'

const Page = () => {
  const { basket, removeItemInBasket, getBasketTotal, getBasketCount, addItemToBasket } = useBasket();


  // Define a type for the item
  interface BasketItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }


  const returnBasketItems = basket.map(eachItem => {
    if (eachItem.id) {
      return <div key={eachItem.id} className='flex flex-col w-5/6  p-2 border items-center  lg:w-1/2 lg:p-6'>
        <h1>{eachItem.title}</h1>
        {/* <Image src={`${title}-${code}`} alt="Example" /> */}
        <h3>£{eachItem.price}</h3>
        <h4 className='border w-3/4 text-center m-1 text-stone-100 text-xs'>{eachItem.code}</h4>
        <div className='flex border items-center justify-center w-3/6 rounded-xl '>
          <button onClick={() => removeItemInBasket(eachItem)} className=' text-2xl w-1/6'>-</button>
          <h4 className=' w-1/2 text-center text-stone-900 text-sm m-2'> Quantity: {eachItem.quantity}</h4>
          <button onClick={() => addItemToBasket(eachItem)} className=' text-2xl  w-1/6' >+</button>
        </div>
      </div>
    }
    else {
      return <h2>Basket is empty</h2>
    }

  })

  return (
    <>
      <div className='flex flex-col  border justify-center md:flex-row'>
        <div className='flex flex-col md:w-4/6 border items-center  '>
          <h1>Basket</h1>
          {returnBasketItems}
        </div>
        <div className='border items-center pt-4 rounded-md flex flex-col border'>
        <div className='border items-center w-2/5 pt-2 rounded-md flex-col flex bg-slate-200 md:pt-4 md:w-full'>
          <h2 className=' text-center'>Subtotal ( {getBasketCount()} items ) </h2>
          <h2 className=' text-center'> £{getBasketTotal()} </h2>
          <Link href='/userDetailsCheckout'>
          <button className=' btn m-2 text-xl'> Checkout </button>

          </Link>
        </div>

        </div>
      </div>

    </>


  )
}

export default Page
