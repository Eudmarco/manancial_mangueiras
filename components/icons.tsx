
import React from 'react';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-27.2l-4.2-2.5-72.5 19.1 19.4-70.5-2.7-4.3c-19.1-31.1-29.4-66.8-29.4-104.3 0-109.4 89.2-198.6 198.8-198.6 54.2 0 104.5 21.1 141.2 57.8 36.7 36.7 57.9 86.9 57.9 141.3 0 109.4-89.2 198.6-198.8 198.6zm101.7-164.8c-4.8-2.4-28.1-13.9-32.5-15.5-4.4-1.6-7.6-2.4-10.8 2.4-3.2 4.8-12.3 15.5-15.1 18.7-2.8 3.2-5.7 3.5-10.4 1.2-19.6-9.4-36.6-17.9-50.6-32.8-14-14.9-23.2-33.1-26.1-38.9-2.9-5.8-.6-9.2 1.8-11.8 2.1-2.4 4.8-6.2 7.2-9.2 2.4-3 3.2-5.7 4.8-9.5 1.6-3.8.8-7.2-1.2-9.6-2-2.4-10.8-25.9-14.8-35.5-3.9-9.6-7.9-8.3-10.8-8.5-2.9-.2-6.1-.2-9.3-.2-3.2 0-8.5 1.2-12.8 6-4.4 4.8-16.7 16.4-16.7 39.8s17.1 46.2 19.5 49.3c2.4 3.2 33.3 50.8 81.1 71.5 47.8 20.7 47.8 13.8 56.4 12.8 8.6-1 28.1-11.5 32-22.5 4-11 4-20.5 2.8-22.5-1.2-2.1-4.4-3.3-9.2-5.7z"/>
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const CreditCardIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
);

export const MoneyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
);

export const BarcodeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5v15a2.25 2.25 0 0 0 2.25 2.25h12A2.25 2.25 0 0 0 20.25 19.5v-15a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 4.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h.008v.008h-.008V6Zm-.75 3h.008v.008h-.008v-.008Zm.75 0h.008v.008h-.008v-.008Zm.75 3h.008v.008h-.008V12Zm-1.5 3h.008v.008h-.008v-.008Zm.75 0h.008v.008h-.008v-.008Zm.75-3h.008v.008h-.008V12Zm.75 3h.008v.008h-.008v-.008Zm-.75-6h.008v.008h-.008V9Zm.75 0h.008v.008h-.008V9Z" />
    </svg>
);

export const PixIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.03 1.123 0 1.131.094 1.976 1.057 1.976 2.192V7.5M8.25 7.5h7.5M8.25 7.5V9a.75.75 0 0 1-.75.75H5.625c-.621 0-1.125.504-1.125 1.125v4.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V10.875c0-.621-.504-1.125-1.125-1.125H16.5a.75.75 0 0 1-.75-.75V7.5" />
    </svg>
);
