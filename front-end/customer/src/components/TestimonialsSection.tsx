import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Andi Pratama',
            avatar: 'AP',
            rating: 5,
            text: 'Kualitas sepatu luar biasa! Sangat nyaman untuk aktivitas sehari-hari dan desainnya sangat stylish.'
        },
        {
            name: 'Sari Dewi',
            avatar: 'SD',
            rating: 5,
            text: 'Pelayanan excellent dan produk sesuai ekspektasi. Bahan berkualitas tinggi dengan harga yang reasonable.'
        },
        {
            name: 'Budi Santoso',
            avatar: 'BS',
            rating: 5,
            text: 'Sudah beli beberapa kali disini. Selalu puas dengan kualitas dan daya tahan sepatunya.'
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Kata Mereka
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Kepuasan pelanggan adalah prioritas utama kami
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                            <CardContent className="p-8">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <p className="text-slate-700 mb-6 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center">
                                    <Avatar className="h-12 w-12 mr-4">
                                        <AvatarImage src="" />
                                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold">
                                            {testimonial.avatar}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-slate-900">{testimonial.name}</p>
                                        <p className="text-sm text-slate-500">Pelanggan Setia</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}