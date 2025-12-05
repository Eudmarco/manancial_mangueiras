import React from 'react';

interface HeroProps {
    whatsappLink: string;
}

const Hero: React.FC<HeroProps> = ({ whatsappLink }) => {
    const heroImage = "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/Retroescavadeira.webp";

    return (
        <section id="visao-geral" className="relative h-screen flex items-center justify-center text-white">
            <img
                src={`${heroImage}?w=1280&q=60`}
                srcSet={`${heroImage}?w=640&q=60 640w, ${heroImage}?w=1280&q=60 1280w, ${heroImage}?w=1920&q=60 1920w`}
                sizes="100vw"
                alt="Retroescavadeira em operação, representando as soluções hidráulicas da Manancial"
                className="absolute inset-0 w-full h-full object-cover"
                fetchPriority="high"
                loading="eager"
                width="1920"
                height="1080"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-roboto font-black uppercase tracking-tight mb-2">
                    Soluções em Mangueiras e Conexões Hidráulicas e Pneumáticas
                </h1>
                <p className="text-xl md:text-2xl font-roboto font-bold mb-6 text-gray-300">
                    Manancial Mangueiras e Conexões
                </p>
                <p className="text-lg md:text-xl font-lato max-w-3xl mx-auto mb-8">
                    Qualidade e durabilidade incomparáveis para os setores industriais, agrícolas, farmacêuticos e químicos. Garanta o melhor desempenho e segurança para seus equipamentos.
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
