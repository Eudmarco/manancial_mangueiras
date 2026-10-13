import React, { useState, useRef, useEffect } from 'react';
import { ADDRESS_LINE, MAPS, BUSINESS } from '../data/business';

const Location: React.FC = () => {
    const [loadMap, setLoadMap] = useState(false);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoadMap(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px', // Carrega o mapa um pouco antes de ele entrar na tela
            }
        );

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => observer.disconnect();
    }, []);


    return (
        <section id="localizacao" className="py-16 md:py-24 bg-light-gray scroll-mt-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-roboto font-bold text-text-gray">Nossa Localização</h2>
                    <address className="mt-4 text-lg text-text-gray/80 not-italic">{ADDRESS_LINE}</address>
                </div>
                <div ref={mapRef} className="w-full h-96 rounded-lg overflow-hidden shadow-2xl mb-8 bg-gray-200">
                    {loadMap && (
                        <iframe
                            src={MAPS.embedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Mapa: localização da ${BUSINESS.name}`}
                        ></iframe>
                    )}
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href={MAPS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="bg-principal-blue text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-blue-700 transition-colors">
                        Ver no Google Maps
                    </a>
                    <a href={MAPS.wazeUrl} target="_blank" rel="noopener noreferrer" className="bg-highlight-orange text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-orange-800 transition-colors">
                        Abrir no Waze
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Location;
