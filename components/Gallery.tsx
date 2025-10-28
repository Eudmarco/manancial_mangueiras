import React from 'react';

const images = [
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/diversas_conex_es_usadas_em_mangueiras_sob_uma%20(1).webp", alt: "Variedade de conexões hidráulicas e pneumáticas" },
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/diversas_conex_es_usadas_em_mangueiras_sob_uma.webp", alt: "Conexões de alta pressão para mangueiras" },
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/estante_com_rolos_de_mangueira_de_alta.webp", alt: "Estoque de rolos de mangueira de alta pressão" },
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/mangueiras_de_alta_press_o_automotivas%20(1).webp", alt: "Mangueira de alta pressão para setor automotivo" },
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/mangueiras_de_alta_press_o_automotivas%20(2).webp", alt: "Detalhe de mangueira industrial reforçada" },
    { src: "https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/mangueiras_de_alta_press_o_automotivas.webp", alt: "Conjunto de mangueiras hidráulicas montadas" }
];

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
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;