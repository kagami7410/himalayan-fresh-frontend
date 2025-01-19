'use client'
import { useEffect } from 'react';
import LandingPage from './components/LandingPage/LandingPage'
import { useBasket } from './components/BasketContext/BasketContext';

export default function Home() {
  const { basket } = useBasket();

  useEffect(() => {
    if (basket.length === null) {
      localStorage.setItem('basket', JSON.stringify(basket));
    }
  }, [basket]);



  return (

    <main>
        <LandingPage />
    </main>

  )
}
