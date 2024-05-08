'use client'
import useFetch from '@/hooks/usefetch';
import Image from 'next/image';
import SkeletonCard from '@/components/SkeletonCard';
import { Button } from "@/components/ui/button"
import { BiCart } from 'react-icons/bi';
import Recommended from '@/components/Recommended';


export default function Page({ params }: { params: { id: string } }) {

    const { data: product, loading } = useFetch({ url: `https://fakestoreapi.com/products/${params.id}`})
    return (
      <section className='py-20'>
        
        {loading ? (
          <SkeletonCard />
        ) : (
          <>
            <div className="flex flex-col items-center justify-center sm:gap-12 sm:flex-row">
              <Image src={product.image} width={450} height={200} alt={product.title}/>
              <div className='w-full sm:max-w-xl'>
                <h5 className='text-blue-600'>{product.category}</h5>
                <h1 className="text-4xl ">{product.title}</h1>
                <p className="my-5">{product.description}</p>
                <span className='text-3xl'>${product.price}</span>
                <div className="flex flex-col my-4">
                  <label htmlFor="quantity">Quantity : </label>
                  <input type="number" id="quantity" min="1" max="100" className='max-w-20 px-4 py-1 border rounded my-2'/>
                </div>
                <div className="flex items-center gap-4">

                  <Button size="lg" variant="primary">
                    <BiCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button size="lg">Purchase Now</Button>
                </div>
                
              </div>
            </div>
         
            <Recommended />
          </>
        )}
      </section>
      
    )
  }