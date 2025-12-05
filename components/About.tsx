
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
    {
        title: "Qualidade garantida",
        description: "Trabalhamos com marcas reconhecidas e materiais de alto desempenho."
    },
    {
        title: "Variedade de produtos",
        description: "Linha completa de mangueiras, conexões e acessórios hidráulicos e pneumáticos."
    },
    {
        title: "Atendimento consultivo",
        description: "Equipe técnica altamente qualificada, pronta para oferecer atendimento personalizado."
    },
    {
        title: "Comprometimento total",
        description: "Buscamos sempre a satisfação e o sucesso dos nossos clientes."
    }
];

const About: React.FC = () => {
    return (
        <section id="sobre" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-roboto font-bold text-text-gray">Sobre a Manancial Mangueiras e Conexões</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                        <video 
                            className="w-full h-full object-cover"
                            src="https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/retro%20em%20movimento.mp4"
                            poster="https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/Tipos%20de%20mangueiras.webp?w=600&q=60"
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            preload="metadata"
                        />
                    </div>
                    <div className="text-left text-text-gray/90">
                        <p className="text-lg leading-relaxed">
                            Com anos de experiência no mercado, somos especializados na comercialização atacadista e varejista de produtos hidráulicos e pneumáticos, oferecendo soluções completas para os mais diversos segmentos — industrial, agrícola, químico, farmacêutico e automotivo. Trabalhamos com mangueiras, conexões, engates, válvulas e componentes projetados para suportar baixa, média e alta pressão.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-light-gray p-6 rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-2">
                            <div className="flex justify-center mb-4">
                               <CheckCircleIcon className="h-12 w-12 text-principal-blue" />
                            </div>
                            <h3 className="text-xl font-roboto font-bold text-text-gray mb-2">{feature.title}</h3>
                            <p className="text-base text-text-gray/80">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
