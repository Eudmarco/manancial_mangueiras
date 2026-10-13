import React from 'react';
import { CreditCardIcon, MoneyIcon, BarcodeIcon, PixIcon } from './icons';
import { BUSINESS } from '../data/business';

const paymentMethods = [
    { Icon: CreditCardIcon, label: 'Crédito/Débito' },
    { Icon: MoneyIcon, label: 'Dinheiro' },
    { Icon: BarcodeIcon, label: 'Boleto' },
    { Icon: PixIcon, label: 'PIX' },
];

const Info: React.FC = () => {
    return (
        <section id="atendimento" aria-labelledby="atendimento-titulo" className="py-16 md:py-24 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
                <h2 id="atendimento-titulo" className="text-3xl md:text-4xl font-roboto font-bold text-text-gray text-center mb-12">Atendimento e Pagamento</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-roboto font-bold text-text-gray mb-4">Horário de Atendimento</h3>
                        <div className="space-y-2 text-lg text-text-gray/80">
                            <p><span className="font-bold">Segunda a Sexta:</span> {BUSINESS.hours.opens} às {BUSINESS.hours.closes}</p>
                            <p><span className="font-bold">Sábado e Domingo:</span> Fechado</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-roboto font-bold text-text-gray mb-4">Telefone e WhatsApp</h3>
                        <p className="text-lg text-text-gray/80">
                            <a href={`tel:${BUSINESS.phoneE164}`} className="font-bold text-principal-blue hover:underline">{BUSINESS.phoneDisplay}</a>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-roboto font-bold text-text-gray mb-4">Formas de Pagamento</h3>
                        <ul className="flex justify-center md:justify-start items-center space-x-4">
                            {paymentMethods.map(({ Icon, label }) => (
                                <li key={label} className="flex flex-col items-center transition duration-200 ease-in-out transform hover:-translate-y-1">
                                    <Icon className="h-10 w-10 text-principal-blue" aria-hidden="true" />
                                    <span className="text-xs mt-1">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
