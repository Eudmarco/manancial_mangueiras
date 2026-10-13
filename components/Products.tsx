import React from 'react';
import { BUSINESS, PRODUCTS } from '../data/business';

const Products: React.FC = () => {
    return (
        <section id="produtos" className="bg-light-gray py-12 md:py-20 scroll-mt-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-roboto font-bold text-text-gray">Produtos e Soluções</h2>
                    <p className="mt-4 text-lg text-text-gray/80 max-w-3xl mx-auto">
                        Mangueiras, conexões e componentes hidráulicos e pneumáticos para os setores {BUSINESS.segments.map((s) => s.toLowerCase()).join(', ')}.
                    </p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PRODUCTS.map((product) => (
                        <li key={product.name} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-principal-blue">
                            <h3 className="text-lg font-roboto font-bold text-text-gray mb-2">{product.name}</h3>
                            <p className="text-base text-text-gray/80">{product.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Products;
