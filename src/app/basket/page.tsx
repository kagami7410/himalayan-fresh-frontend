'use client'
import React from 'react'
import { useBasket } from '@/app/components/BasketContext/BasketContext';

const Page = () => {
    const { basket, removeItemInBasket, addItemToBasket} = useBasket();

    const returnBasketItems = basket.map(eachItem => {
        return <>
        <div className='flex flex-col w-5/6  p-2 border items-center  lg:w-1/2 lg:p-6'>
            <h1>{eachItem.title}</h1>
            {/* <Image src={`${title}-${code}`} alt="Example" /> */}
            <h3>£{eachItem.price}</h3>
            <h4 className='border w-3/4 text-center m-1 text-stone-100 text-xs'>{eachItem.code}</h4>
            <div className='flex border items-center justify-center w-3/6 rounded-xl '>
              <button onClick={() => removeItemInBasket(eachItem)}  className=' text-2xl w-1/6'>-</button>
            <h4 className=' w-1/2 text-center text-stone-900 text-sm m-2'> Quantity: {eachItem.quantity}</h4>
              <button onClick={() => addItemToBasket(eachItem)} className=' text-2xl  w-1/6' >+</button>
            </div>
        </div>


        </>
    })

  return (
    <>
        <div className='flex flex-wrap border justify-center '>
        <div className='flex flex-col w-5/6 border items-center  '>
        <h1>Basket</h1>
        {returnBasketItems}
        </div>

    </div>
    <div className='flex justify-center'>   
               <button className='btn m-8 text-xl'> Checkout </button>
</div>
    </>


  )
}

export default Page
