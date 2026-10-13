import React, { useState } from 'react';
import { WhatsAppIcon, MenuIcon, CloseIcon } from './icons';
import { BUSINESS } from '../data/business';

const navLinks = [
    { href: '#produtos', text: 'Produtos' },
    { href: '#sobre', text: 'Sobre' },
    { href: '#galeria', text: 'Galeria' },
    { href: '#orcamento', text: 'Orçamento' },
    { href: '#localizacao', text: 'Localização' },
    { href: '#duvidas', text: 'Dúvidas' },
];

// As seções usam `scroll-mt-20` para compensar o header fixo, então as âncoras funcionam sem JS.
const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#visao-geral" onClick={closeMenu} className="flex-shrink-0">
                        <picture>
                            <source srcSet="/img/logo-144.avif" type="image/avif" />
                            <img
                                className="h-[4.5rem] w-auto"
                                src="/img/logo-144.webp"
                                alt="Manancial Mangueiras e Conexões – início"
                                width="72"
                                height="72"
                            />
                        </picture>
                    </a>
                    <nav aria-label="Principal" className="hidden lg:flex lg:items-center lg:space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-roboto font-bold text-sm text-text-gray hover:text-principal-blue transition-colors"
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                    <div className="hidden lg:block">
                        <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-md shadow-sm text-white bg-principal-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal-blue transition-transform transform hover:scale-105">
                            <WhatsAppIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                            Chame no Whatsapp
                        </a>
                    </div>
                    <div className="lg:hidden">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-text-gray hover:text-principal-blue"
                            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                            aria-expanded={isOpen}
                            aria-controls="menu-mobile"
                        >
                            {isOpen ? <CloseIcon className="h-6 w-6" aria-hidden="true" /> : <MenuIcon className="h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>
            <div id="menu-mobile" hidden={!isOpen} className="lg:hidden bg-white shadow-lg">
                <nav aria-label="Principal (celular)" className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-base font-bold text-text-gray hover:text-white hover:bg-principal-blue transition-colors"
                        >
                            {link.text}
                        </a>
                    ))}
                </nav>
                <div className="px-4 pb-4">
                    <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-bold rounded-md shadow-sm text-white bg-principal-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal-blue">
                        <WhatsAppIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                        Chame no Whatsapp
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
