'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useBasket } from '../components/BasketContext/BasketContext';
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter() // may be null or a NextRouter instance


  interface OrderBasketItem {
    itemId: number,
    itemQuantity: number
  }


  const { basket, removeBasketState } = useBasket();

  const { responseStatus, setResponseStatus} = useState();

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    postCode: "",
    town: "",
    phoneNumber: ""

  });

  // Define a type for the item
interface BasketItem {
  id: number;
  title: string;
  price: number;
  code: string;
  description: string;
  quantity: number;
}

  const orderBasketItems: OrderBasketItem[] = [];


  const getOrderedItems = () => {
     basket.forEach((eachItem) => {
      orderBasketItems.push({itemId: eachItem.id, itemQuantity: eachItem.quantity})})
      return orderBasketItems;
  }


  const getSubmitOrderBody = () => {
    return {
      registerRequest: userDetails,
      orderedItems: getOrderedItems()
    }
  }

  


  const handleSubmit =  async () => {

    const response = await fetch("/api/postOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getSubmitOrderBody()),
    });
    console.log('status: ', response.status)

    if(response.status === 202){
      setResponseStatus(202)
      localStorage.setItem('basket', JSON.stringify([]))
      removeBasketState()
      // setTimeout(()=> {
      //   router.push('/')

      // },)

    }
  };






  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update the specific field
    setUserDetails((prevUser) => ({
      ...prevUser, // Keep the existing fields intact
      [name]: value, // Update the specific field
    }));
  };

  return (
    <div className='flex-col flex border items-center '>
      <h1 className='text-2xl m-4'>Personal Details</h1>

      <form className='flex flex-col w-5/6  items-center md:w-2/5  md:p-4 rounded-md bg-slate-100 md:items-start' >
      <div className='flex flex-col md:flex-row  w-full items-center'>
      <label className="form-control w-full max-w-xs mr-0 md:mr-2">
          <div className="label">
            <span className="label-text"> First Name*  </span>
          </div>
          <input name="firstName" value={userDetails.firstName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  onChange={handleChange} />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text"> Last Name*  </span>
          </div>
          <input name="lastName" value={userDetails.lastName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  onChange={handleChange} />
        </label>

      </div>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text"> Email*  </span>
          </div>
          <input name="email" value={userDetails.email} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  onChange={handleChange} />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text"> Confirm Email*  </span>
          </div>
          <input name="email" value={userDetails.email} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  onChange={handleChange} />
        </label>
        <h1 className='text-2xl m-4'>Delivery Details</h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text"> Address*  </span>
          </div>
          <input name="address" value={userDetails.address} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  onChange={handleChange} />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text"> ZIP/Post code*  </span>
          </div>
          <input name="postCode" value={userDetails.postCode} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  onChange={handleChange} />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text"> Town*  </span>
          </div>
          <input name="town" value={userDetails.town} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  onChange={handleChange} />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text"> Phone Number*  </span>
          </div>
          <input name="phoneNumber" value={userDetails.phoneNumber} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  onChange={handleChange} />
        </label>
      </form>
      <div  className='flex w-full justify-center mt-2 md:mt-4'>
        <button onClick={handleSubmit} className=' btn m-2 text-xl'> Checkout </button>
        </div>

        



        <div>()=>{document.getElementById('my_modal_1').showModal()}</div>
        <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>


  )
}

export default page
