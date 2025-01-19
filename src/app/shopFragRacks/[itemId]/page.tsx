'use client'
import React, { useEffect, useState } from 'react'
import { useBasket } from '@/src/app/components/BasketContext/BasketContext';
import Loading from '@/src/app/components/Loading/Loading';


interface FragRackItem extends BasketItem {
  colour: string;
  magnetNum: number;
  size: string;
  stockQuantity: number;
  photoUrls: string[];
  quantity: number;

}


interface BasketItem {
  id: number;
  title: string;
  price: number;
  code: string;
  quantity: number;
}




const Page = ({ params }: { params: Promise<{ itemId: string }> }) => {
  const image_url = 'https://storage.googleapis.com/fragracks-web-images/test'
  const [itemQuantity, setItemQuanity] = useState<number>(0);

  // asynchronous access of `params.id`.
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState('')
  const [item, setItem] = useState<FragRackItem>();
  const [basketItem, setBasketItem] = useState<BasketItem>({
    id: 0,
    title: "",
    price: 0,
    code: "",
    quantity: 0,
  });

  const { addItemToBasket } = useBasket();
  const { itemId } = React.use(params)
  const handleAddToBasket = (item: BasketItem) => {
    if (itemQuantity > 0) {
      addItemToBasket(item);
      setItemQuanity(0)
    }

  };
  // const vaildPaths = ["getAll", "greenBeans", "darkRoastedBeans"]

  useEffect(() => {
    getItems()
  }, [])

  useEffect(() => {
    setCurrentImage(`${image_url}/${item?.photoUrls[0]}.jpg`)
  }, [item])

  function getItems() {
    // if(vaildPaths.includes(beanType)){
    console.log('loading single page')
    setLoading(true)
    fetch(`/api/getFragRackById?itemId=${itemId}`)
      .then(res => res.json())
      .then(data => {
        setItem(data)
        setBasketItem((prevItem) => ({
          ...prevItem,
          id: data.id,
          price: data.price,
        }));
        setLoading(false)
      })
  }

  const changeImageView = (event: React.MouseEvent<HTMLImageElement>) => {
    const imageSrc = event.currentTarget.src;
    setCurrentImage(imageSrc)

  }

  const increaseQuantity = () => {
    setItemQuanity(itemQuantity + 1)

  }

  useEffect(() => {
    setBasketItem((prevItem) => ({
      ...prevItem,
      quantity: itemQuantity,
    }));
    console.log(basketItem)
  }, [itemQuantity])







  const decreaseQuantity = () => {
    if (itemQuantity > 0) {
      setItemQuanity(itemQuantity - 1)
    }

  }




  return (
    <>

      <div className='flex-col w-full border justify-items-center  bg-slate-500 md:p-2 '>
        {loading ? <Loading /> : <div className='flex-col align-middle justify-items-center w-11/12 md:w-5/6 bg-orange-600 p-4'>
          {/* <Loading/> */}
          <div className='flex border flex-col md:flex-row  justify-center  my-4 w-full bg-lime-500'>
            <div className='flex flex-col w-full justify-center items-center bg-red-800 md:p-2 md:w-1/2 md:flex-row md:align-  border  '>
              <div className='flex  border p-1  bg-slate-100 w-full'>
                <img src={currentImage} />

              </div>
              <div key={item?.id} className='flex  items-center justify-center md:flex-col  w-full border bg-yellow-400  md:w-1/4 '>
                {item?.photoUrls.map(eachurl => {
                  return (
                    <div key={eachurl} className='flex  border w-full'>
                      <img key={eachurl} src={`${image_url}/${eachurl}.jpg`} className='border bg-slate-400   cursor-pointer' onClick={changeImageView}></img>

                    </div>
                  )
                })}
              </div>

            </div>
            <div className='flex flex-col w-full border p-2  lg:w-3/6 bg-amber-400 md:mt-2'>
              <h1 className='flex  border  justify-center p-2 text-2xl md:text-3xl font-semibold'>{item?.title}</h1>
              <h3 className='flex  border  p-6 text-2xl font-semibold'>£{item?.price}</h3>
              <h4 className='border w-1/4 text-center m-1 text-stone-100 text-xs'>{item?.code}</h4>
              <div className='flex justify-center items-center bg-orange-900 w-full md:w-4/6'>
                <div className='flex w-full h-full bg-slate-400 items-center justify-center  mr-4 md:mr-8'>
                  <button onClick={decreaseQuantity} className=' text-2xl  w-2/6 border' >-</button>
                  <h1 className='flex text-md w-2/6 justify-center'>{itemQuantity}</h1>
                  <button onClick={increaseQuantity} className=' text-2xl  w-2/6 border' >+</button>
                </div>
                <button onClick={() => { handleAddToBasket(basketItem) }} className=' btn w-1/2'> Add To Cart</button>
              </div>









              <div className='flex flex-col w-full border p-2  lg:w-full bg-slate-400 md:mt-1'>
                <div className='my-2  flex-col border w-full ' >
                  <h1 className=' text-center text-xl md:text-3xl'> Description </h1>
                  <div className='flex  justify-center items-center border p-2 md:p-4'>
                    {/* <video className='w-[80%] rounded-3xl  '
          src="http://localhost:8000/contents/video?videoName=video1"
          loop
          autoPlay
          controls/> */}
                    <div className='mt-4 border'>
                      <h1>🚨 Transform Your Reef Tank with the Ultimate Coral Frag Rack! 🚨</h1>
                      <h1>🔷 Aqua-Print 21cm Honeycomb Frag Rack </h1>
                      <h1>💎 Available Now at Kraken Corals & Aquatics 💎</h1>
                      <ul className='list-disc list-inside mt-4'>
                        <strong>✅ Innovative Honeycomb Design</strong>
                        <li>Maximize coral placement with full usability of all frag holes!</li>
                        <li>Designed to minimize shadowing and boost upward flow, perfect for SPS coral growth.</li>
                      </ul>

                      <ul className='list-disc list-inside mt-4'>
                        <strong>✅ Heavy-Duty Magnets Included</strong>
                        <li>Attach securely to glass up to 20mm thick—no slipping, no worries!</li>
                        <li>Single magnet is all you need for a strong and sturdy hold but hey if you want two go for it!</li>
                      </ul>

                      <ul className='list-disc list-inside mt-4'>
                        <strong>🌊 Stylish, Durable, and Functional</strong>
                        <li>Polyreef frag racks combine aesthetics with performance to give your tank a professional edge.</li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>


            </div>


          </div>


          <div className='flex w-full md:min-h-screen border bg-blue-900'></div>

        </div>}

      </div>

    </>
  )
}

export default Page
