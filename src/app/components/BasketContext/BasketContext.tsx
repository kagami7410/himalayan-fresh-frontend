'use client'
import React, { useEffect, useState, createContext, useContext, ReactNode } from 'react'
const BasketContext = createContext<BasketContextData | undefined>(undefined);

// Define the context data
interface BasketContextData {
  basket: BasketItem[];
  removeItemInBasket: (item: BasketItem) => void;
  addItemToBasket: (item: BasketItem) => void;
  getBasketCount: () => number;
}


// Export a custom hook to use the BasketContext
export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};

// Define a type for the item
interface BasketItem {
  id: string;
  title: string;
  price: boolean;
  code: string;
  description: string;
  quantity: number;
}
// Define the provider props type
interface BasketProviderProps {
    children: ReactNode;
  }

const BasketProvider = ({ children }: BasketProviderProps) => {

  // Export a custom hook to use the BasketContext

  const [basket, setBasket] = useState<BasketItem[]>(() => {
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      const savedBasket = localStorage.getItem('basket');
      return savedBasket ? JSON.parse(savedBasket) : [];
    }
    return [];
  });

  
  useEffect(() => {
    if (basket.length > 0) {
      localStorage.setItem('basket', JSON.stringify(basket));
    }
  }, [basket]);


  const addItemToBasket = (item: BasketItem) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((basketItem) => basketItem.id === item.id);
      if (existingItem) {
        // Update the quantity if the item already exists in the basket
        return prevBasket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        );
      }
      // Add new item if it doesn't exist in the basket
      return [...prevBasket, { ...item, quantity: 1 }];
    });
  }

  // Function to add item to the basket
  const removeItemInBasket = (item: BasketItem) => {
    setBasket((currentBasket) => {
      const existingItem = currentBasket.find((basketItem) => basketItem.id === item.id);
      const existingItemQuantity = existingItem?.quantity;
      if (existingItemQuantity !== 1) {
        // Update the quantity if the item already exists in the basket
        return currentBasket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity - 1 }
            : basketItem
        );
      }
      else {
        const filteredItems = currentBasket.filter(eachItem => eachItem !== item);
        return filteredItems
      }
      // Add new item if it doesn't exist in the basket
    });
  };

    // Function to get basket count (total number of items)
    const getBasketCount = () => {
      return basket.reduce((count, item) => count + item.quantity, 0);
    };

  return (
    <BasketContext.Provider value={{ basket, addItemToBasket, getBasketCount, removeItemInBasket}}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider;
