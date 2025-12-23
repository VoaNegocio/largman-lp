/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                branding: {
                    gold: '#C8A951', // Primary Gold
                    light: '#E0C370', // Light Gold
                    dark: '#1A1A1A', // Charcoal/Black
                    mustard: '#C59D10', // Deep Mustard
                }
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                body: ['Lato', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'pulse-slow': {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                }
            },
        },
    },
    plugins: [],
}
