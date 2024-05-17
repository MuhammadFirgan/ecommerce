'use client'
import Benefits from '@/components/Benefits';
import Card from '@/components/Card';
import Features from '@/components/Features';
import SkeletonCard from '@/components/SkeletonCard';
import { bebas_neue } from '@/constans';
import useFetch from '@/hooks/usefetch';
import Image from 'next/image';
import { BiHeadphone, BiMoneyWithdraw, BiSolidWallet } from "react-icons/bi";
export default function Home() {

  const { data: products, loading } = useFetch({ url: 'https://fakestoreapi.com/products?limit=6' });

  return (
    <>
      
      <div className='flex flex-col justify-center items-center bg-blue-200 rounded-2xl overflow-hidden sm:flex-row'>
        <h1 className={`px-10 pt-10 text-xl sm:max-w-xl sm:pt-0 lg:text-6xl ${bebas_neue.className}`}>Discover, Shop, and Experience Your Style Where Fashion Meets Convenience</h1>
        <Image src="/img/hero.png" width={800} height={300} alt="hero-img" priority/>
      </div>
      <div className='flex flex-col gap-5 my-8 sm:flex-row'>
        <Benefits image='jewerly.jpg' title='Discount 50% for new member' />
        <Benefits image='fashion.jpg' title='Buy 3 get 1' />
        <Benefits image='technology.jpg' title='Cashback 30%' />
      </div>
      <div className='my-32'>
        <h1 className={`${bebas_neue.className} text-6xl text-center`}>Our Products</h1>
        {loading ? (
          <SkeletonCard />
        ) : (
        <div className='flex flex-wrap  gap-4 justify-center'>
          {products.map(product => (
            <Card 
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
            
          ))}
        </div>
        )}
      </div>
      <div className="flex flex-wrap justify-between">
        <Features 
          icon={<BiHeadphone className="text-4xl"/>}
          title="24/7 Online Support"
          desc="you can access assistance anytime, ensuring your needs are met around the clock."  
        />
        <Features 
          icon={<BiMoneyWithdraw className="text-4xl"/>}
          title="Money Guarantee"
          desc=" Enjoy peace of mind with our money-back guarantee, ensuring your satisfaction with every purchase."  
        />
        <Features 
          icon={<BiSolidWallet className="text-4xl"/>}
          title="24/7 Online Support"
          desc=" Experience the convenience of flexible payment options, tailored to fit your financial needs."  
        />
      </div>

    </>
  );
}
