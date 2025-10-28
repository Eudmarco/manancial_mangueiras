
import React from 'react';
import { WhatsAppIcon } from './icons';

interface WhatsappButtonProps {
    whatsappLink: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ whatsappLink }) => {
    return (
        <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-40 transition-transform transform hover:scale-110"
            aria-label="Chamar no Whatsapp"
        >
            <WhatsAppIcon className="h-8 w-8" />
        </a>
    );
};

export default WhatsappButton;
