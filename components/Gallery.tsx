import React from 'react';

// Imagens recortadas em quadrado por scripts/optimize-images.mjs (os tiles usam object-cover quadrado).
const images = [
    { name: "conexoes-alta-pressao", alt: "Conexões hidráulicas de alta pressão para o setor industrial" },
    { name: "conexoes-pneumaticas", alt: "Conexões pneumáticas e de alta pressão para indústria e agronegócio" },
    { name: "estoque-mangueiras", alt: "Estoque de mangueiras industriais e agrícolas na Manancial em Goiânia" },
    { name: "mangueira-alta-pressao", alt: "Mangueira de alta pressão para sistemas hidráulicos automotivos e industriais" },
    { name: "mangueira-quimicos", alt: "Detalhe de mangueira industrial reforçada para produtos químicos" },
    { name: "mangueiras-montadas", alt: "Conjunto de mangueiras hidráulicas montadas sob medida" }
];

const srcSet = (name: string, ext: string) => `/img/${name}-400.${ext} 400w, /img/${name}-800.${ext} 800w`;
const sizes = "(max-width: 768px) 50vw, 33vw";

const Gallery: React.FC = () => {
    return (
        <section id="galeria" className="py-16 md:py-24 bg-light-gray scroll-mt-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-roboto font-bold text-text-gray">Nossa Estrutura e Produtos</h2>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image) => (
                        <li key={image.name} className="aspect-square rounded-lg overflow-hidden shadow-lg group">
                            <picture>
                                <source type="image/avif" srcSet={srcSet(image.name, 'avif')} sizes={sizes} />
                                <img
                                    src={`/img/${image.name}-400.webp`}
                                    srcSet={srcSet(image.name, 'webp')}
                                    sizes={sizes}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                    width="400"
                                    height="400"
                                />
                            </picture>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Gallery;
