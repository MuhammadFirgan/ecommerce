'use client'
import { Button } from "@/components/ui/button"
import { BiCart } from 'react-icons/bi';
import Products from '@/components/Products';
import Checkout from '@/components/Checkout';
import SkeletonCard from '@/components/SkeletonCard'; 
import Image from 'next/image';
import useFetch from '@/hooks/usefetch';


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
              <Checkout 
                id={product.id}
                category={product.category}
                title={product.title}
                description={product.description}
                price={product.price}
              />
          </div>
          <Products isRecommended={true}/>
        </> 
      )}
    </section>
    
  )
}