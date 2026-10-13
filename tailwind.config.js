/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './App.tsx', './components/**/*.tsx'],
    theme: {
        // Mantém a largura máxima de 1024px do layout original (sem o breakpoint xl/2xl no container).
        container: {
            screens: { sm: '640px', md: '768px', lg: '1024px' },
        },
        extend: {
            colors: {
                // Tons ajustados para contraste AA (>= 4.5:1) com texto branco.
                'principal-blue': '#0066d6',
                'highlight-orange': '#c2410c',
                'light-gray': '#f8f9fa',
                'text-gray': '#343a40',
            },
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
