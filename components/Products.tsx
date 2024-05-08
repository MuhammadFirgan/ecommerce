'use client'
import useFetch from "@/hooks/usefetch";
import SkeletonCard from "./SkeletonCard";
import Card from "./Card"; // Anda perlu mengimpor atau mendefinisikan komponen Card

export default function Products() {
    const { data: products, loading } = useFetch({ url: 'https://fakestoreapi.com/products' });

    return (
        <div>
            {loading ? (
                <SkeletonCard />
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
            )}
        </div>
    );
}
