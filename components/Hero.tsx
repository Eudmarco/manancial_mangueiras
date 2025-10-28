
import React from 'react';

interface HeroProps {
    whatsappLink: string;
}

const Hero: React.FC<HeroProps> = ({ whatsappLink }) => {
    const heroImage = "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/Retroescavadeira.webp";

    return (
        <section id="visao-geral" className="relative h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}></div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-roboto font-black uppercase tracking-tight mb-4">
                    Manancial Mangueiras e Conexões
                </h1>
                <p className="text-lg md:text-xl font-lato max-w-3xl mx-auto mb-6">
                    Soluções em materiais hidráulicos e pneumáticos com qualidade e durabilidade incomparáveis.
                </p>
                <p className="text-base md:text-lg font-lato max-w-3xl mx-auto mb-8">
                    Mangueiras e conexões para os setores industrial, agrícola, farmacêutico e químico. Garanta o melhor desempenho e segurança para seus equipamentos.
                </p>
                <a 
                    href={whatsappLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-highlight-orange text-white font-bold font-roboto text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110"
                >
                    Chame no Whatsapp
                </a>
            </div>
        </section>
    );
};

export default Hero;