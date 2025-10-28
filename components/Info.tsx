import React from 'react';
import { CreditCardIcon, MoneyIcon, BarcodeIcon, PixIcon } from './icons';

const Info: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-roboto font-bold text-text-gray mb-4">Horário de Atendimento</h3>
                        <div className="space-y-2 text-lg text-text-gray/80">
                            <p><span className="font-bold">Segunda a Sexta:</span> 08:00 às 18:00</p>
                            <p><span className="font-bold">Sábado e Domingo:</span> Fechado</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-roboto font-bold text-text-gray mb-4">Formas de Pagamento</h3>
                        <div className="flex justify-center md:justify-start items-center space-x-4">
                            <div className="flex flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1">
                                <CreditCardIcon className="h-10 w-10 text-principal-blue" />
                                <span className="text-xs mt-1">Crédito/Débito</span>
                            </div>
                            <div className="flex flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1">
                                <MoneyIcon className="h-10 w-10 text-principal-blue" />
                                <span className="text-xs mt-1">Dinheiro</span>
                            </div>
                            <div className="flex flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1">
                                <BarcodeIcon className="h-10 w-10 text-principal-blue" />
                                <span className="text-xs mt-1">Boleto</span>
                            </div>
                             <div className="flex flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1">
                                <PixIcon className="h-10 w-10 text-principal-blue" />
                                <span className="text-xs mt-1">PIX</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;