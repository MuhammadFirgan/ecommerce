import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
    id: string;
    title: string;
    image: string;
    price: string;
}

export default function Card({ id, title, image, price } : CardProps) {
  return (
    <Link href={`/product/${id}`} className='p-10 flex flex-col justify-center w-full max-w-sm'>
      <Image src={image} width={150} height={150} alt={title} className='overflow-hidden mx-auto object-contain' />       
        <h1 className='text-lg line-clamp-2 pt-8'>{title}</h1>
        <p className="text-sm font-semibold">${price}</p>
            
    </Link>
  )
}
