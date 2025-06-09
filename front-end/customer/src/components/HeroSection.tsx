'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
    const scrollToProducts = () => {
        const element = document.getElementById('products-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/40 to-slate-900/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                    Langkahmu,{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Gayamu
                    </span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                    Temukan koleksi sepatu premium dengan kualitas terbaik dan desain modern yang sempurna untuk gaya hidupmu
                </p>

                <Button
                    onClick={scrollToProducts}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    Lihat Koleksi
                    <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>
    );
}