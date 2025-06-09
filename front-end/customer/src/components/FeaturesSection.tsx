import { Card, CardContent } from '@/components/ui/card';
import { Award, Palette, Heart } from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            icon: Award,
            title: 'Bahan Berkualitas',
            description: 'Dipilih dari material premium dengan standar internasional untuk kenyamanan maksimal'
        },
        {
            icon: Palette,
            title: 'Desain Modern',
            description: 'Desain terkini yang mengikuti tren fashion global dengan sentuhan lokal yang elegan'
        },
        {
            icon: Heart,
            title: 'Nyaman Dipakai',
            description: 'Ergonomis dan dirancang khusus untuk aktivitas sehari-hari dengan dukungan optimal'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-background to-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Mengapa Memilih Kami?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Komitmen kami untuk memberikan yang terbaik dalam setiap langkah perjalanan Anda
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}