import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-text-gray text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xl font-bold font-roboto mb-4">
                    Manancial Mangueiras e Conexões
                </p>
                <p className="text-sm text-gray-300">
                    © {currentYear} | Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;