import React, { useState } from 'react';
import { WhatsAppIcon, MenuIcon, CloseIcon } from './icons';

interface HeaderProps {
    whatsappLink: string;
}

const Header: React.FC<HeaderProps> = ({ whatsappLink }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#visao-geral', text: 'Visão Geral' },
        { href: '#sobre', text: 'Sobre' },
        { href: '#galeria', text: 'Galeria' },
        { href: '#localizacao', text: 'Localização' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 80; // Corresponds to h-20 in Tailwind
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        
        if (isOpen) {
            toggleMenu();
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#visao-geral" onClick={(e) => handleLinkClick(e, '#visao-geral')} className="flex-shrink-0">
                        <img className="h-12 w-auto" src="https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/Manancial_20241023_144508_0000.png" alt="Manancial Logo" />
                    </a>
                    <nav className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                onClick={(e) => handleLinkClick(e, link.href)} 
                                className="font-roboto font-bold text-sm text-text-gray hover:text-principal-blue transition-colors cursor-pointer"
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-md shadow-sm text-white bg-principal-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal-blue transition-transform transform hover:scale-105">
                            <WhatsAppIcon className="w-5 h-5 mr-2" />
                            Chame no Whatsapp
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-text-gray hover:text-principal-blue">
                            {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                onClick={(e) => handleLinkClick(e, link.href)} 
                                className="block px-3 py-2 rounded-md text-base font-bold text-text-gray hover:text-white hover:bg-principal-blue transition-colors cursor-pointer"
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                     <div className="px-4 pb-4">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-bold rounded-md shadow-sm text-white bg-principal-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal-blue">
                            <WhatsAppIcon className="w-5 h-5 mr-2" />
                            Chame no Whatsapp
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;