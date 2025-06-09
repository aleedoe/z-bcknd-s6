import { ShoppingBag, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <ShoppingBag className="h-8 w-8 text-blue-400" />
                            <span className="font-bold text-xl">ShoePremium</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-md">
                            Menyediakan sepatu berkualitas premium dengan desain modern dan kenyamanan maksimal untuk mendukung gaya hidup aktif Anda.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                                <Instagram className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                                <Twitter className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-slate-400 hover:text-white transition-colors duration-300">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="#products-section" className="text-slate-400 hover:text-white transition-colors duration-300">
                                    Produk
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Kontak</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li>Jakarta, Indonesia</li>
                            <li>+62 21 1234 5678</li>
                            <li>info@shoepremium.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
                    <p>&copy; 2024 ShoePremium. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}