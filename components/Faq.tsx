import React from 'react';
import { FAQ } from '../data/business';

// O mesmo conteúdo vai para o JSON-LD FAQPage (seo.ts); as perguntas precisam continuar visíveis aqui.
const Faq: React.FC = () => {
    return (
        <section id="duvidas" aria-labelledby="duvidas-titulo" className="py-16 md:py-24 bg-white scroll-mt-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 id="duvidas-titulo" className="text-3xl md:text-4xl font-roboto font-bold text-text-gray text-center mb-10">Perguntas Frequentes</h2>
                <div className="space-y-3">
                    {FAQ.map((item) => (
                        <details key={item.question} className="group bg-light-gray rounded-lg p-4 shadow-sm">
                            <summary className="cursor-pointer list-none flex items-center justify-between font-roboto font-bold text-lg text-text-gray">
                                {item.question}
                                <span aria-hidden="true" className="ml-4 text-principal-blue transition-transform group-open:rotate-45">+</span>
                            </summary>
                            <p className="mt-3 text-base text-text-gray/80 leading-relaxed">{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
