import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const WhatsAppIcon: React.FC<IconProps> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        {...props}
    >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.42 1.29 4.91L2 22l5.25-1.38c1.44.78 3.06 1.23 4.79 1.23h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.2 15.26c-.14-.07-0.83-.41-0.96-.46s-.22-.07-.32.07c-.1.07-.36.46-.45.55-.08.09-.17.1-.32.03s-.63-.23-1.2-0.74c-.45-.4-.74-.89-.83-1.04s-.09-.22.05-.36c.13-.12.28-.33.42-.49.11-.12.14-.2.22-.34.07-.14.04-.26-.01-.36s-.32-.76-.44-1.04c-.12-.28-.24-.24-.32-.24s-.2-.01-.3 0c-.1 0-.26.04-.4.2s-.52.51-.52 1.24.53 1.44.6 1.55c.08.1.52.83 1.27 1.76.75.92 1.34 1.22 1.79 1.38.45.16.85.13 1.17.08.36-.05.83-.34.95-.66.12-.32.12-.59.08-.66c-.03-.08-.13-.12-.27-.2z" />
    </svg>
);

export const MenuIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

export const CloseIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export const CreditCardIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
        <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
);

export const MoneyIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="12" x2="12" y1="1" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
);


export const BarcodeIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M2 6h2v12H2zM6 6h1v12H6zM9 6h2v12H9zM13 6h1v12h-1zM16 6h2v12h-2zM20 6h2v12h-2z" />
    </svg>
);

export const PixIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
       <path d="M12.012 2.25c-5.38 0-9.762 4.382-9.762 9.762s4.382 9.762 9.762 9.762 9.762-4.382 9.762-9.762S17.392 2.25 12.012 2.25zm3.843 12.607l-3.21-3.208a.688.688 0 0 1 0-.974l3.818-3.818a.688.688 0 1 0-.974-.974l-3.818 3.818a2.065 2.065 0 0 0 0 2.92l3.21 3.209a.688.688 0 0 0 .973-.973zm-3.843.001l-1.077 1.076a.688.688 0 1 0 .973.974l1.076-1.077a2.065 2.065 0 0 0-2.92-2.92l-1.077-1.076-2.126 2.125 1.076 1.077a.688.688 0 0 0 .974.973zm-2.153-2.152l3.818-3.818a.688.688 0 0 0 0-.974l-1.076-1.076a2.065 2.065 0 0 0-2.92 0L8.604 9.06l2.126 2.125zm-2.435 2.437l-3.03 3.03a.688.688 0 1 0 .974.973l3.03-3.03a.688.688 0 0 0-.974-.973zm8.307-8.306l-3.818 3.818a.688.688 0 0 0 0 .974l2.392 2.392 3.818-3.818a.688.688 0 1 0-.973-.974l-2.393 2.392-2.392-2.392 3.818-3.818a.688.688 0 0 0-.974-.974z"/>
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85C2.25 3.854 3.716 2.31 6.969 2.163 8.234 2.105 8.614 2.094 12 2.094h.001zM12 8.252A3.75 3.75 0 1012 15.75a3.75 3.75 0 000-7.5zm0 6a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm5.25-6.903a.938.938 0 100-1.875.938.938 0 000 1.875z"></path>
    </svg>
);

export const FacebookIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);
