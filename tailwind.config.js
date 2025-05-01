import forms from '@tailwindcss/forms';

const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1E40AF", // custom blue
                secondary: "#FACC15", // custom yellow    
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                fancy: ["'Pacifico'", "cursive"],
            },
            screens: {
                'xs': '475px',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                'xl': '1.5rem',
                '4xl': '2rem',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
        },
    },
    plugins: [forms],
}

export default config;
