import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Package } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center pt-16">
            <div className="text-center px-4 sm:px-6 lg:px-8">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Package className="h-12 w-12 text-slate-400" />
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Produk Tidak Ditemukan
                </h1>

                <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                    Maaf, produk yang Anda cari tidak tersedia atau telah dihapus dari koleksi kami.
                </p>

                <Link href="/">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Kembali ke Beranda
                    </Button>
                </Link>
            </div>
        </div>
    );
}