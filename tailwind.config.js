/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js}"],
    theme: {
        screens: {
            xsm: "320px",
            // => @media (min-width: 640px) { ... }

            sm: "481px",
            // => @media (min-width: 768px) { ... }

            md: "769px",
            // => @media (min-width: 1024px) { ... }

            lg: "1025px",
            // => @media (min-width: 1280px) { ... }

            xl: "1201",

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },

        colors: {
            transparent: "transparent",
            current: "currentColor",
            slate: {
                50: "#f8fafc",
                100: "#f1f5f9",
                200: "#e2e8f0",
                300: "#cbd5e1",
                400: "#94a3b8",
                500: "#64748b",
                600: "#475569",
                700: "#334155",
                800: "#1e293b",
                900: "#0f172a",
            },
            green: {
                50: "#c6ffb3",
                100: "#b3ff99",
                200: "#9fff80",
                300: "#8cff66",
                400: "#79ff4d",
                500: "#66ff33",
                600: "#53ff1a",
                700: "#40ff00",
                800: "#39e600",
                900: "#33cc00",
                1000: "#2db300",
                1100: "#269900",
            },
            red: {
                500: "#ef4444",
            },
            yellow: "#facc15",

            black: "#061a00",
            white: "#fff",
            blue: {
                500: "#2736db",
                700: "#1f2d9c",
            },
        },

        extend: {
            backgroundImage: {
                design: "url('/images/design.jpg')",
            },
        },
    },
    plugins: [],
};
