"use client"
import styles from './LandingPage.module.css'
import '/src/app/globals.css'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LandingPage = () => {

  const [opacityEnabled, setOpacity] = useState(0);

  const [xPosition, setXPosition] = useState(0);



  const [showVideo, setShowVideo] = useState('recentlyAddedCoralsContainer');


  const [border, setBorder] = useState('');
  const observedElement = useRef(null);

  const [isMobile, setIsMobile] = useState(false)
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    handleResize()
    if (screenSize < 760) {
      setIsMobile(true)
      console.log("Device is Mobile")
    }
    else {
      setIsMobile(false)
      console.log('Device is Desktop')
    }
  }, [screenSize])




  useEffect(() => {
    // Get the new X position (for example, randomly)

    if (isMobile) {
      console.log(isMobile)
      const newXPosition = 0
      setXPosition(newXPosition);
    }


    if (!isMobile) {
      console.log("is mobile: ", isMobile)
      const newXPosition = 20
      setXPosition(newXPosition);
      setTimeout(() => {
        setOpacity(1)
        // setBorder('border')

      }, 1)
    }
    else {
      setTimeout(() => {
        setOpacity(1)

      }, 1)
    }


    // Set the new X position
  }, [isMobile]);






  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo('recently-added-corals-container video-visible')

          console.log('Element is in view!');
        } else {
          setShowVideo('recently-added-corals-container ')

          console.log('Element is out of view!');
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger callback when 10% of the element is in view
      }
    );

  }, []);

  return (
    <div className={`${styles.landingPageContainer} ${border}`}>
      <div className={`${styles.landingPageTopContainer} ${border} bg-slate-200 pb-10 pt-4`}>
        <div className={`${styles.landingPageDescription} ${border} transform transition-all `}
          style={{ opacity: `${opacityEnabled}`, transitionDuration: '750ms', transform: `translateX(${xPosition}%)` }}>
          <div className={`${styles.mainHeadline} ${border}`}>Premium Coffee, Delivered!</div>
          <div className={`${styles.shortDescription} ${styles.glow} ${styles.textGlow} ${border}
            `}>- Freshly roasted beans from Nepal delivered to your door. Start your morning right.</div>
          <div className={`${styles.shopCoralsButtonContainer} ${border} `}>
            <Link href={{ pathname: '/shopBeans' }} className="btn btn-lg opacity-0  sm:opacity-100  sm:btn-lg">Shop Beans</Link>
          </div>
        </div>


        <div className={`${styles.landingPageImageMainContainer} ${border} card `} style={{ opacity: `${opacityEnabled}`, transitionDuration: '750ms', transform: `translateX(-${xPosition}%)` }}>
          <div className='card-over flex justify-center'>
            <Link href='/shopBeans' className="btn  opacity-80 btn-lg sm:opacity-0">Shop Beans</Link>


          </div>


        </div>
      </div>


      <div className='my-40  flex-col ' ref={observedElement} >
        <h1 className=' text-center text-xl md:text-3xl'> Story </h1>
        <div className='my-5 flex  justify-center items-center'>
          {/* <video className='w-[80%] rounded-3xl  '
          src="http://localhost:8000/contents/video?videoName=video1"
          loop
          autoPlay
          controls/> */}

        </div>

      </div>

    </div>
  )
}

export default LandingPage
