'use client'

import { Button } from "@/components/ui/button"
import { BiCart } from 'react-icons/bi';
import { useState } from "react";

interface CheckoutProps {
    id: string
    category: string
    title: string
    description: string
    price: string
}


export default function Checkout({ id, category, title, description, price } : CheckoutProps) {

    
    const [quantity, setQuantity] = useState<number>(1);

    const decreaseQuantity = () => {
      setQuantity((prevState) => (quantity > 1 ? prevState - 1 : null));
    };
  
    const increaseQuantity = () => {
      setQuantity((prevState) => prevState + 1);
    };

    const checkout = async () => {
        const data = {
          id,
          productName: title,
          price: price * quantity,
          quantity
        }
    
        const response = await fetch('/api/payment', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify(data)
          })
    
        const requestData = await response.text()
    
        console.log({requestData})
    
    }
  
  return (
    <>
        <div className='w-full sm:max-w-xl'>
            <h5 className='text-blue-600'>{category}</h5>
            <h1 className="text-4xl ">{title}</h1>
            <p className="my-5">{description}</p>
            <span className='text-3xl'>${price}</span>
            <div className="flex flex-col my-4">
                <label htmlFor="quantity">Quantity : </label>
                <input type="number" id="quantity" min="1" max="100" className='max-w-20 px-4 py-1 border rounded my-2' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}/>
            </div>
            <div className="flex items-center gap-4">
                <Button size="lg" variant="primary">
                <BiCart className="h-4 w-4 mr-2" />
                Add to Cart
                </Button>
                <Button size="lg" onClick={checkout}>Purchase Now</Button>
            </div>
        </div>
    </>
  )
}
