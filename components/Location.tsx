import React, { useState, useRef, useEffect } from 'react';

const Location: React.FC = () => {
    const address = "Rua Anchieta, 17 - Rodoviário, Goiânia/GO";
    const lat = -16.6736363;
    const lng = -49.3082181;
    
    const googleMapsUrl = `https://www.google.com/maps/place/16%C2%B040'25.1%22S+49%C2%B018'29.6%22W/@-16.6736611,-49.3082728,21z/data=!4m4!3m3!8m2!3d-16.6736363!4d-49.3082181?hl=pt-BR&entry=ttu`;
    const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
    const embedUrl = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=18&ie=UTF8&iwloc=&output=embed`;

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

        return () => {
            if (observer && mapRef.current) {
                observer.disconnect();
            }
        };
    }, []);


    return (
        <section id="localizacao" className="py-16 md:py-24 bg-light-gray">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-roboto font-bold text-text-gray">Nossa Localização</h2>
                    <p className="mt-4 text-lg text-text-gray/80">{address}</p>
                </div>
                <div ref={mapRef} className="w-full h-96 rounded-lg overflow-hidden shadow-2xl mb-8 bg-gray-200">
                    {loadMap && (
                        <iframe
                            src={embedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização da Manancial Mangueiras e Conexões"
                        ></iframe>
                    )}
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="bg-principal-blue text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-blue-700 transition-colors">
                        Ver no Google Maps
                    </a>
                    <a href={wazeUrl} target="_blank" rel="noopener noreferrer" className="bg-highlight-orange text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-orange-600 transition-colors">
                        Abrir no Waze
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Location;
