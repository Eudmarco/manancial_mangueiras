import React from 'react';

const keywords = [
    "Correias industriais",
    "Mangueiras e conexões pneumáticas",
    "Flexível inox alta temperatura",
    "Conexões alta pressão",
    "Soluções hidráulicas",
    "Mangueiras de alta pressão",
    "Conexões hidráulicas",
    "Mangueiras para o Agronegócio",
    "Tubulação para Indústria Química",
    "Conexões Sanitárias Farmacêuticas",
    "Sistemas de Transferência de Fluidos",
    "Mangueiras para Pulverização Agrícola"
];

const Keywords: React.FC = () => {
    return (
        <section className="bg-light-gray py-12 md:py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-roboto font-bold text-text-gray mb-8">Nossas Especialidades</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {keywords.map((keyword, index) => (
                        <span key={index} className="bg-white text-principal-blue border-2 border-principal-blue font-semibold py-2 px-4 rounded-full shadow-sm">
                            {keyword}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Keywords;

