'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-sm border-b border-slate-200 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-slate-900 hover:text-blue-600 transition-colors duration-300">
                        <ShoppingBag className="h-8 w-8" />
                        <span>ShoePremium</span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                            Beranda
                        </Link>
                        <Link href="#products-section" className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                            Produk
                        </Link>
                        <Link href="#" className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                            Tentang
                        </Link>
                        <Link href="#" className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                            Kontak
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}