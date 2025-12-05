import React from 'react';
import { InstagramIcon, FacebookIcon } from './icons';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const instagramUrl = "https://www.instagram.com/manancialmangueirasgyn?igsh=YTVzcWZ0ZGk2ZGd2";
    const facebookUrl = "https://www.facebook.com/profile.php?id=100092676146446";

    return (
        <footer className="bg-text-gray text-white py-6">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
                    &copy; {currentYear} Manancial Mangueiras e Conexões. Todos os direitos reservados.
                </p>
                <div className="flex space-x-4">
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-principal-blue transition-colors">
                        <InstagramIcon className="h-6 w-6" />
                    </a>
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-principal-blue transition-colors">
                        <FacebookIcon className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;