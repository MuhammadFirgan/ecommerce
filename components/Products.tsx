'use client'
import useFetch from "@/hooks/usefetch";
import SkeletonCard from "./SkeletonCard";
import Card from "./Card"; // Anda perlu mengimpor atau mendefinisikan komponen Card
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { bebas_neue } from "@/constans";

export default function Products({ isRecommended } : { isRecommended: boolean }) {
    const { data: products, loading } = useFetch({ url: 'https://fakestoreapi.com/products' });

    return (
        <div>
            {loading ? (
                <SkeletonCard />
            ) : (
                isRecommended ? (
                    <div className="px-10 pt-20">
                        <h1 className={`${bebas_neue.className} text-4xl`}>Recommended for You</h1>
                        <Carousel>
                            <CarouselContent >
                                {products.map(product => (
                                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                                        <Card 
                                            id={product.id}
                                            title={product.title}
                                            image={product.image}
                                            price={product.price}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                ) : (
                    <div className='flex flex-wrap gap-4 justify-center'>
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
                )
            )}
        </div>
    );
}
