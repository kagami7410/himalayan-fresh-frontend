'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { useBasket } from '@/app/components/BasketContext/BasketContext';
import Loading from '@/app/components/Loading/Loading';
import Image from 'next/image';


interface FragRackItem extends BasketItem {
  colour: String;
  magnetNum: number;
  size: string;
  stockQuantity:number;
  photoUrls: string[];
  quantity: number;

}


interface BasketItem {
  id: number;
  title: string;
  price: number;
  code: string;
  description: string;
  quantity: number;
}




const page = ({ params }: { params: Promise<{ itemId: string }> }) => {
  const image_url = 'https://storage.googleapis.com/fragracks-web-images/test'
const [itemQuantity, setItemQuanity] = useState<number>(0);
  
  // asynchronous access of `params.id`.
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState('')
  const [item, setItem] = useState<FragRackItem>( );
  const [basketItem, setBasketItem] = useState<BasketItem>({  id: 0,
                                                              title: "",
                                                              price: 0,
                                                              code: "",
                                                              description: "",
                                                              quantity: 0});

  const { addItemToBasket } = useBasket();
  const [finishedLoading, setFinishedLoading] = useState(false) 
  const { itemId } = React.use(params)
  const handleAddToBasket = (item: BasketItem) => {
    addItemToBasket(item);
  };
  // const vaildPaths = ["getAll", "greenBeans", "darkRoastedBeans"]

  useEffect(() => {
    getItems()
    console.log(currentPage, ': page is clicked!')
    
  }, [currentPage])

  useEffect(()=>{
    setCurrentImage(`${image_url}/${item?.photoUrls[0]}.jpg`)
  }, [item])

  function getItems() {
    // if(vaildPaths.includes(beanType)){
    console.log('loading single page')
    setLoading(true)
    fetch(`/api/getFragRackById?itemId=${itemId}`)
      .then(res => res.json())
      .then(data =>{
         setItem(data)
         setBasketItem((prevItem) => ({
          ...prevItem,
          id:data.id,
          }));         
        setLoading(false)
         setFinishedLoading(true)
        })
  }

  const changeImageView = (event:React.MouseEvent<HTMLImageElement>) => {
    const imageSrc = event.currentTarget.src;
    setCurrentImage(imageSrc)

  }

  const increaseQuantity = () => {
    setItemQuanity(itemQuantity + 1)

  }

  useEffect(() => {
    setBasketItem((prevItem) => ({
      ...prevItem,
       quantity:itemQuantity,
      }));
    console.log(basketItem)
  }, [itemQuantity])







  const decreaseQuantity = () => {
    if(itemQuantity > 0) {
      setItemQuanity(itemQuantity - 1)
    }
    
  }




  return (
    <>
      {/* <h1 className='flex justify-center'> {params.beansType}</h1> */}

      <div>
        {loading? <Loading/>: <div className='flex justify-center flex-col  border'>
        <div className='flex flex-wrap border justify-center my-4 w-5/6'>
        <div key={item?.id} className='flex flex-col w-3/4 border p-3 lg:w-1/12'>
        {    item?.photoUrls.map(eachurl => {
      return(
        <img key={eachurl} src={`${image_url}/${eachurl}.jpg`} className='m-1 cursor-pointer' onClick={changeImageView}></img>
      )
    })}

          </div>
          <div className='flex flex-col w-3/4 border p-3 lg:w-3/12'>
          <img src={currentImage}></img>

          </div>
          <div className='flex flex-col w-3/4 border p-3   lg:w-3/6'>
            <h1 className='flex  border p-3 justify-center p-6 text-3xl font-semibold'>{item?.title}</h1>
            {/* <Image src={`https://photos.google.com/photo/AF1QipP7E1cD1rstzB6feRN1y1Qx4D9o7eLG1FO2bApm`} width={500} height={500} alt="Example" /> */}
            <h3 className='flex  border p-3  p-6 text-2xl font-semibold'>£{item?.price}</h3>
            <h4 className='border w-1/4 text-center m-1 text-stone-100 text-xs'>{item?.code}</h4>
            <div className='flex justify-center items-center w-5/6'>
            <div className='flex w-full  items-center justify-center m-4'>
            <button onClick={decreaseQuantity} className=' text-2xl  w-2/6 border' >-</button>
      <h1 className='flex text-md w-2/6 justify-center'>{itemQuantity}</h1>
      <button onClick={increaseQuantity} className=' text-2xl  w-2/6 border' >+</button>
             </div>
            <button onClick={() => { handleAddToBasket(basketItem) }} className=' btn w-1/2'> Add To Cart</button>
            </div>
          </div>
        </div>
        <div className='flex w-full min-h-screen border'></div>
      </div>}

      </div>

    </>
  )
}

export default page
