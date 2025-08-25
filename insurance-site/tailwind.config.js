/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"], // Global font
            },
            fontSize: {
                base: "1.125rem",   // default text → ~18px
                lg: "1.25rem",      // ~20px
                xl: "1.5rem",       // ~24px
                "2xl": "1.875rem",  // ~30px
                "3xl": "2.25rem",   // ~36px
                "4xl": "3rem",      // ~48px
                "5xl": "3.75rem",   // ~60px
                "6xl": "4.5rem",    // ~72px
            },
        },
    },
    plugins: [],
}
