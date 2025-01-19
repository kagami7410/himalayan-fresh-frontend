'use client'
import React, { useEffect, useState } from 'react'
import { useBasket } from '@/src/app/components/BasketContext/BasketContext';
import Loading from '../components/Loading/Loading';


interface BasketItem {
  id: number;
  title: string;
  price: number;
  code: string;
  quantity: number;
}



const Page = () => {

  // asynchronous access of `params.id`.
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<BasketItem[]>([]);
  const { addSingleItemToBasket } = useBasket();

  // const vaildPaths = ["getAll", "greenBeans", "darkRoastedBeans"]

  useEffect(() => {
    getItems()
    console.log(currentPage, ': page is clicked!')

  }, [currentPage])

  function getItems() {
    setLoading(true)

      fetch(`/api/getAllFragRacks?pageNumber=${currentPage}&pageSize=2`)
        .then(res => res.json())
        .then(data => {
          setItems(data.data.content)
          setLoading(false)

        }
      )
  

  }

  const handlePageClick = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {placeholder} = e.target;
    const currentSelectedPage = Number(placeholder)
    // console.log(currentSelectedPage, ': page is clicked!')
    setCurrentPage(currentSelectedPage - 1)
  }


  const jsxreturnedAllItems = items.map(eachItem => {
    return (
      <div key={eachItem.id} className='flex flex-col w-3/4 rounded-md p-4 md:p-8 border m-4 p-3 lg:w-1/4'>
        <a href={`/shopFragRacks/${eachItem.id}`}>{eachItem.title}</a>
        {/* <Image src={`${title}-${code}`} alt="Example" /> */}
        <h3>£{eachItem.price}</h3>
        <h4 className='border w-1/4 text-center m-1 text-stone-100 text-xs'>{eachItem.code}</h4>
        <button onClick={() => { addSingleItemToBasket(eachItem) }} className='btn w-1/2'> Add To Cart</button>
      </div>
    )
  })




  return (
    <>
    <div>
    {loading ? <Loading/>: <div><div className='flex justify-center  '>
        <div className='flex flex-wrap  justify-center my-4 w-5/6'>
          {jsxreturnedAllItems}
        </div>
      </div>


      </div>
}
    </div>
    <div className='flex justify-center mt-6 md:mt-10'>
      <div className="join" >
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" value={currentPage} placeholder='1'  onChange={handlePageClick} defaultChecked />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" value={currentPage} placeholder='2'onChange={handlePageClick}/>
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" value={currentPage} placeholder='3'onChange={handlePageClick}/>
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" value={currentPage} placeholder='4'onChange={handlePageClick}/>
      </div>


      </div>


    </>
  )
}

export default Page
