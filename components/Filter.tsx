'use client'
import useFetch from '@/hooks/usefetch';
import { Checkbox } from './ui/checkbox'
import { Slider } from './ui/slider'; 
import { useState, useRef } from 'react';


export default function Filter() {
    const { data: categories, loading } = useFetch({ url: 'https://fakestoreapi.com/products/categories' });
    const [ value, setValue ] = useState(0)
    const valueRef = useRef()

    const handleChange = (newValue) => {
        setValue(newValue)
    }
   

  return (
    <div>
        
        {loading ? (
            <div className="w-10 h-4 bg-gray-200"></div>
        ) : (
            <>
            
                <h1 className="font-semibold my-6">Categories</h1>
                <div className="flex flex-wrap gap-3 lg:gap-5 lg:flex-col">
                    {categories.map((category, i) => (
                        <div className="flex items-center space-x-2" key={i}>
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {category}
                            </label>
                        </div>
                    ))}
                </div>
            </>
        )}
        <div className="my-8">
        <h1 className="font-semibold mb-7">Price Range</h1>
            <Slider defaultValue={[0]} max={100} step={1} onChange={handleChange} />
            <div className="flex justify-between mt-3">
                <span>$0</span>
                <span>${value}</span>

            </div>
        </div>


    </div>

  )
}
