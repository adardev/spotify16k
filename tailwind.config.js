/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    ],
    theme: {
        extend: {
            colors: {
                //primary: '#18cda9',
                //secondary: '#198980',
                //neutral: '#2d504a',
                //esos de arriba son los del texto pero siempre usamos negro para el texto xd

                background: '#D4D1F0',
                backgroundPrimary: '#B8B2E6',
                backgroundSecondary: '#9C93DC',
            },
        },
    },
    plugins: [],
};