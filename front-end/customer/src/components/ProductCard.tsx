import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/products';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={product.image_url}
                    alt={product.name}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardContent className="p-6">
                <div className="mb-3">
                    <h3 className="text-xl font-semibold line-clamp-1 text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                        {product.description}
                    </p>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-bold text-blue-600">
                        {formatPrice(product.price)}
                    </p>
                </div>

                <Link href={`/produk/${product.id}`} className="block">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:bg-blue-600">
                        Lihat Detail
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}