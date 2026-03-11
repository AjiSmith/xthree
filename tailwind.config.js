import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    theme: {
        extend: {
            colors: {
                'slate-darker': '#0f172a', // Deep Slate
                'slate-gray': '#1e293b',   // Abu-abu gelap
                'slate-light': '#334155',  // Abu-abu terang
                brand: {
                    dark: '#0f172a', // Deep Slate
                    gray: '#1e293b', // Lighter Slate
                    accent: '#334155', // Muted Gray
                }
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
