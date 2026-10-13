
import React, { useEffect, useRef } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { BUSINESS } from '../data/business';

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
    const videoRef = useRef<HTMLVideoElement>(null);

    // Vídeo decorativo: só baixa quando chega perto da tela e não toca com "reduzir movimento" ativo.
    useEffect(() => {
        const video = videoRef.current;
        if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.src = '/media/retro-em-movimento.mp4';
                    video.play().catch(() => {});
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="sobre" className="py-16 md:py-24 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-roboto font-bold text-text-gray">Sobre a {BUSINESS.name}</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            poster="/img/video-poster.webp"
                            width="480"
                            height="480"
                            loop
                            muted
                            playsInline
                            preload="none"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="text-left text-text-gray/90 space-y-4">
                        <p className="text-lg leading-relaxed">
                            Com anos de experiência no mercado, somos especializados na comercialização atacadista e varejista de produtos hidráulicos e pneumáticos, oferecendo soluções completas para os mais diversos segmentos — industrial, agrícola, químico, farmacêutico e automotivo. Trabalhamos com mangueiras, conexões, engates, válvulas e componentes projetados para suportar baixa, média e alta pressão.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Estamos na {BUSINESS.address.street}, no setor {BUSINESS.address.neighborhood}, em {BUSINESS.address.city}/{BUSINESS.address.state}, atendendo clientes de Goiânia e região.
                        </p>
                    </div>
                </div>

                <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <li key={feature.title} className="bg-light-gray p-6 rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-2">
                            <div className="flex justify-center mb-4">
                               <CheckCircleIcon className="h-12 w-12 text-principal-blue" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-roboto font-bold text-text-gray mb-2">{feature.title}</h3>
                            <p className="text-base text-text-gray/80">{feature.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;
