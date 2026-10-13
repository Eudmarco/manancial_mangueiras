import React from 'react';
import { BUSINESS } from '../data/business';

const heroSrcSet = (ext: string) => [480, 768, 1024].map((w) => `/img/hero-${w}.${ext} ${w}w`).join(', ');

const Hero: React.FC = () => {
    return (
        <section id="visao-geral" className="relative h-screen flex items-center justify-center text-white scroll-mt-20">
            <picture>
                <source type="image/avif" srcSet={heroSrcSet('avif')} sizes="100vw" />
                <img
                    src="/img/hero-1024.webp"
                    srcSet={heroSrcSet('webp')}
                    sizes="100vw"
                    alt="Retroescavadeira em operação, representando as soluções hidráulicas da Manancial"
                    className="absolute inset-0 w-full h-full object-cover"
                    fetchPriority="high"
                    width="1024"
                    height="1024"
                />
            </picture>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-roboto font-black uppercase tracking-tight mb-2">
                    Soluções em Mangueiras e Conexões Hidráulicas e Pneumáticas
                </h1>
                <p className="text-xl md:text-2xl font-roboto font-bold mb-6 text-gray-300">
                    {BUSINESS.name} · Goiânia/GO
                </p>
                <p className="text-lg md:text-xl font-lato max-w-3xl mx-auto mb-8">
                    Qualidade e durabilidade incomparáveis para os setores industriais, agrícolas, farmacêuticos e químicos. Garanta o melhor desempenho e segurança para seus equipamentos.
                </p>
                <a
                    href={BUSINESS.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-highlight-orange text-white font-bold font-roboto text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-orange-800 transition-all duration-300 transform hover:scale-110"
                >
                    Chame no Whatsapp
                </a>
            </div>
        </section>
    );
};

export default Hero;
