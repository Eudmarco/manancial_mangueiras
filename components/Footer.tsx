import React from 'react';
import { InstagramIcon, FacebookIcon } from './icons';
import { BUSINESS, ADDRESS_LINE } from '../data/business';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-text-gray text-white py-8">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                <address className="not-italic text-sm text-center sm:text-left space-y-1">
                    <p className="font-bold text-base">{BUSINESS.name}</p>
                    <p>{ADDRESS_LINE}</p>
                    <p>
                        Telefone/WhatsApp: <a href={`tel:${BUSINESS.phoneE164}`} className="underline hover:text-gray-300">{BUSINESS.phoneDisplay}</a>
                    </p>
                    <p>{BUSINESS.hours.weekdaysText}</p>
                    <p className="pt-2 text-gray-300">
                        &copy; <span suppressHydrationWarning>{currentYear}</span> {BUSINESS.name}. Todos os direitos reservados.
                    </p>
                </address>
                <div className="flex space-x-4">
                    <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Manancial" className="hover:text-gray-300 transition-colors">
                        <InstagramIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                    <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook da Manancial" className="hover:text-gray-300 transition-colors">
                        <FacebookIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
