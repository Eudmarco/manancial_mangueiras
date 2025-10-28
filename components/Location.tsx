
import React from 'react';

const Location: React.FC = () => {
    const address = "Rua Anchieta, 17 - Rodoviário, Goiânia/GO";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}`;
    // Updated embed URL to a format that doesn't require an API key
    const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <section id="localizacao" className="py-16 md:py-24 bg-light-gray">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-roboto font-bold text-text-gray">Nossa Localização</h2>
                    <p className="mt-4 text-lg text-text-gray/80">{address}</p>
                </div>
                <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl mb-8">
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
