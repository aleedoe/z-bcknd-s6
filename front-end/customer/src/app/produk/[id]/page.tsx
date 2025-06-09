import { getProduct } from '@/lib/products';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
    };
}

export default async function ProductDetailPage({ params }: PageProps) {
    const product = await getProduct(params.id);

    if (!product) {
        notFound();
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const features = [
        {
            icon: Truck,
            title: 'Gratis Ongkir',
            description: 'Untuk pembelian minimal Rp 500.000'
        },
        {
            icon: Shield,
            title: 'Garansi Kualitas',
            description: '30 hari garansi untuk produk cacat'
        },
        {
            icon: RotateCcw,
            title: 'Easy Return',
            description: 'Mudah return dalam 7 hari'
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-300 mb-8 group"
                >
                    <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                    Kembali ke Beranda
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Product Image */}
                    <div className="space-y-4">
                        <Card className="overflow-hidden shadow-xl">
                            <div className="relative aspect-square">
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </Card>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                {product.name}
                            </h1>

                            <div className="flex items-center mb-6">
                                <div className="flex items-center mr-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <span className="text-slate-600">(24 ulasan)</span>
                            </div>

                            <p className="text-4xl font-bold text-blue-600 mb-6">
                                {formatPrice(product.price)}
                            </p>

                            <p className="text-slate-700 leading-relaxed text-lg">
                                {product.description}
                            </p>
                        </div>
                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <Button
                                size="lg"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Hubungi untuk Pemesanan
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold py-4 text-lg rounded-lg transition-all duration-300"
                            >
                                Tanya Produk
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}