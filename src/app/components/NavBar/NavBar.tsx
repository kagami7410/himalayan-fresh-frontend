'use client'
import { CiUser } from "react-icons/ci";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useBasket } from "../BasketContext/BasketContext";


const NavBar = () => {

  // Export a custom hook to use the BasketContext
  const { getBasketCount, getBasketTotal } = useBasket();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window == 'object') {
      // Safe to use window or document here
      setIsClient(true);
    }
  }, []);


  
  useEffect(()=>{
    console.log("basket count is: ", getBasketCount())
  
    if(getBasketCount() === 0){
      console.log('basket is empty')
    }
  
  }, [getBasketCount()])
  

  const borderVisibile = ''





  return (
    <div className={`navbar h-8 md:h-10  bg-base-100 ${borderVisibile}`}>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>

      <div className={` ${borderVisibile} `}>
        <Link href={'/'} className={`btn btn-ghost text-xl mr-6 md:text-2xl md:mr-10 md:w-72`}> REEFIN 3D</Link>
      </div>

      <div className="flex  w-11/12 ">
      <div className="navbar bg-base-100  opacity-0 md:opacity-100 pr-10">
        <div className="navbar">
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className='text-lg'>
                  <Link href="/corals">Beans</Link>
                </summary>
                <ul className="p-2  z-10 flex-col">
                  <li><a>Roasted</a></li>
                  <li><a>Normal</a></li>
                  <li><a>Premium</a></li>
                </ul>
              </details>
            </li>
            <li><a className='text-lg'>About</a></li>

            <li><a className='text-lg'>Story</a></li>

            <li><a className='text-lg'>Special Offers</a></li>
          </ul>
        </div>
        <div className="navbar">
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 21 21.5"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-md indicator-item bg-slate-200">
                {isClient ? getBasketCount() : 0}

              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="rounded-md card-compact dropdown-content bg-base-100 z-[2] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">{isClient ? getBasketCount() : 0} Items</span>
              <span className="text-info">Total:  £{isClient ? getBasketTotal() : 0}</span>
              <div className="card-actions">
                <Link href={"/basket"} className=" btn btn-primary btn-block">View cart</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end m-2">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div className="w-100 rounded-full">
              <CiUser style={{
                display: "flex",
                fontSize: "2.3em",
                justifyContent: "center",
                alignItems: "center"

              }} />

            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
      </div>





      {/* <div className={`navbar-center hidden lg:flex ${borderVisibile} justify-center flex-1`}>
    <ul className={`menu menu-horizontal px-1 ${borderVisibile}`}>
    <li>
        <details>
          <summary>Corals</summary>
          <ul className="p-2">
            <li><a>LPS</a></li>
            <li><a>SPS</a></li>
            <li><a>Soft Corals</a></li>

          </ul>
        </details>
      </li>

      <li><a>LiveStocks</a></li>

      <li><a>Special Offers</a></li>
    </ul>
  </div>
 */}

    </div>


  )
}

export default NavBar
