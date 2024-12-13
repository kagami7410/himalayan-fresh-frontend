import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex flex-col px-2 items-center '>
        <div className='mt-4 sm:mt-8'>
          <h1 className=' text-center text-3xl'>SELECT BEANS TYPE</h1>
        </div>

        <div className='flex border w-4/5 flex-col items-center justify-center mt-4 sm:flex-row  sm:p-8 sm:m-8'>

          <div className='flex card border flex-col items-center justify-center w-4/5 mt-8  sm:mx-8'>
          <div className='flex flex-col  items-center border  rounded-md  z-50 w-full bg-slate-200'>
          <Link href={'shopBeans/roastedBeans'} className='flex  low-opacity-border rounded-md w-3/4 justify-center m-4'>
              {/* <Image className='coralsImage' src={SPS1} alt="Example" /> */}
            </Link>
            <Link href={'shopBeans/roastedBeans'} className="btn  opacity-90 btn-lg  border">Roasted Beans</Link>

          </div>

          </div>

          <div className='flex card border flex-col items-center justify-center w-3/4 mt-8  sm:mx-8'>
          <div className='flex flex-col  items-center border  rounded-md  z-50 w-full bg-slate-200'>
          <Link href={'shopBeans/greenBeans'} className='flex  low-opacity-border rounded-md w-3/4 justify-center m-4'>
              {/* <Image className='coralsImage' src={SPS1} alt="Example" /> */}
            </Link>
            <Link href={'shopBeans/greenBeans'} className="btn  opacity-90 btn-lg  border">Green Beans</Link>

          </div>
          </div>


        </div>

        <div className='flex  flex-col items-center justify-center w-3/4 mt-16 '>
        <Link href='/shopBeans/getAll' className="btn  opacity-90 btn-lg ">View All</Link>
        </div>



      </div>

    </div>
  )
}

export default page
