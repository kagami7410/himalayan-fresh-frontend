'use client'
import React, { useEffect, useState } from 'react'
import { useBasket } from '@/src/app/components/BasketContext/BasketContext';
import { useRouter } from 'next/navigation'
import Loading from '../components/Loading/Loading';


const Page = () => {


  // Define a type for the item
interface BasketItem {
  id: number;
  title: string;
  price: number;
  code: string;
  quantity: number;
}
  const { basket, removeItemInBasket, getBasketTotal, getBasketCount, addSingleItemToBasket } = useBasket();
  const [noItems, setNoItems] = useState(false);
  const [ itemExistsInBasket, setItemExistsInBasket] = useState(false)
  const [basketItems, setBasketItems] = useState<BasketItem[]>()
  const router = useRouter() // may be null or a NextRouter instance
  const [loading, setLoading] = useState(true);

useEffect(() => {
  setLoading(true)
  setBasketItems(basket)
  if(basket.length === 0){
    setItemExistsInBasket(false)
  }
  else{
    setItemExistsInBasket(true)

  }
  setLoading(false)

}, [basket])


  const returnBasketItems = basketItems?.map(eachItem => {
    if (eachItem.id) {
      return <div key={eachItem.id} className='flex flex-col w-5/6  p-2 border items-center  lg:w-1/2 lg:p-6 m-2 md:m-4'>
        <h1>{eachItem.title}</h1>
        {/* <Image src={`${title}-${code}`} alt="Example" /> */}
        <h3>£{eachItem.price}</h3>
        <h4 className='border w-3/4 text-center m-1 text-stone-100 text-xs'>{eachItem.code}</h4>
        <div className='flex border items-center justify-center w-3/6 rounded-xl '>
          <button onClick={() => removeItemInBasket(eachItem)} className=' text-2xl w-1/6'>-</button>
          <h4 className=' w-1/2 text-center text-stone-900 text-sm m-2'> Quantity: {eachItem.quantity}</h4>
          <button onClick={() =>{addSingleItemToBasket(eachItem)}} className=' text-2xl  w-1/6' >+</button>
        </div>
      </div>
    }
    else {
      return <div key='' className='flex flex-col w-5/6  p-2 border items-center  lg:w-1/2 lg:p-6 m-2 md:m-4'>
        <h2>Basket is empty</h2>
        </div>
    }

  }) 

  const routeToCheckout = () => {
    if(basket.length > 0){
      router.push('/userDetailsCheckout')
    }
    else{
      setNoItems(true)
    }
  }

  return (
    <>
    {loading?<Loading/>:<><div className='flex flex-col  border items-center justify-center p-4 '>
      <div className=' items-center w-full pt-4 rounded-t-2xl flex-col flex bg-orange-100 md:pt-8 md:w-4/6'>
          <h2 className='  text-xl text-center font-semibold md:text-2xl'>Your basket Total is   £{getBasketTotal()} ( {getBasketCount()} items ) </h2>
          <button onClick={routeToCheckout} className=' btn  text-xl'> Checkout </button>

        </div>
        <div className='flex flex-col w-full md:w-4/6 border items-center p-4 md:p-6 '>
          {itemExistsInBasket?returnBasketItems:<h1 className='p-10 text-2xl md:p-20 md:text-3xl font-bold'>Your Basket is Empty!</h1>}
        </div>

        {/* <div className="border-b w-4/6 border-gray-550 m-4"></div> */}

        <div className=' items-center rounded-md flex flex-col w-5/6 '>
        <div className=' items-center w-3/5 pt-2 rounded-md flex-col flex md:pt-4 md:w-full'>
        <div className='flex'>
        <h2 className=' p-2 text-2xl text-center font-semibold'>Total  </h2>
        {/* <h2 className=' p-2 text-2xl text-center font-semibold'> £{getBasketTotal()} </h2> */}

        </div>
          <button onClick={routeToCheckout} className=' btn  text-xl'> Checkout </button>
        </div>
        </div>
      </div>
      <div>
        {noItems ? <div className=" modal-box fixed top-1/3 left-1/2 -translate-x-1/2  m-auto bg-slate-200">
          <h3 className="font-bold text-lg">Your Basket is Empty</h3>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => {
                setNoItems(false)
              }}
                className="btn">Close</button>
            </form>
          </div>
        </div> : <></>}
      </div>
      </>
      }


    </>


  )
}

export default Page
