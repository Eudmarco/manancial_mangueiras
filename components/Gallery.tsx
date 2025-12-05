import React from 'react';

const images = [
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/diversas_conex_es_usadas_em_mangueiras_sob_uma%20(1).webp", alt: "Conexões hidráulicas de alta pressão para o setor industrial", width: 1440, height: 810 },
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/diversas_conex_es_usadas_em_mangueiras_sob_uma.webp", alt: "Conexões pneumáticas e de alta pressão para indústria e agronegócio", width: 1440, height: 810 },
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/estante_com_rolos_de_mangueira_de_alta.webp", alt: "Estoque de mangueiras industriais e agrícolas na Manancial em Goiânia", width: 1440, height: 810 },
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/mangueiras_de_alta_press_o_automotivas%20(1).webp", alt: "Mangueira de alta pressão para sistemas hidráulicos automotivos e industriais", width: 810, height: 1440 },
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/mangueiras_de_alta_press_o_automotivas%20(2).webp", alt: "Detalhe de mangueira industrial reforçada para produtos químicos", width: 810, height: 1440 },
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/mangueiras_de_alta_press_o_automotivas.webp", alt: "Conjunto de mangueiras hidráulicas montadas sob medida", width: 810, height: 1440 }
];

const createSrcSet = (src: string) => {
    const widths = [400, 800, 1200];
    return widths.map(w => `${src}?w=${w}&q=60 ${w}w`).join(', ');
};


const Gallery: React.FC = () => {
    return (
        <section id="galeria" className="py-16 md:py-24 bg-light-gray">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-roboto font-bold text-text-gray">Nossa Estrutura e Produtos</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg group">
                            <img 
                                src={`${image.src}?w=400&q=60`} 
                                srcSet={createSrcSet(image.src)}
                                sizes="(max-width: 768px) 50vw, 33vw"
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                                decoding="async"
                                width={image.width}
                                height={image.height}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
