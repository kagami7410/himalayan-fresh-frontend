'use client'
import LandingPage from './components/LandingPage/LandingPage'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const basketItemCount = localStorage.getItem('basketItemCount');
    if (basketItemCount === "undefined") {
      localStorage.setItem('basketItemCount', 0);
    }
  }, []);


  return (

    <main>
        <LandingPage />
    </main>

  )
}
