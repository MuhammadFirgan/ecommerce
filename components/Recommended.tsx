'use client'
import useFetch from "@/hooks/usefetch";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import { bebas_neue } from "@/constans";

export default function Recommended() {
    const { data: products, loading } = useFetch({ url: 'https://fakestoreapi.com/products' });

    return (
        <div className="px-10 pt-20">
            <h1 className={`${bebas_neue.className} text-4xl`}>Recommended for You</h1>
            <Carousel>
                <CarouselContent >
                    {loading ? (
                        <SkeletonCard />
                    ) : (
                        products.map(product => (
                            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                                <Card 
                                    id={product.id}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                />
                            </CarouselItem>
                        ))
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
