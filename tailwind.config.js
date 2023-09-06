/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./**/*.{html,js,liquid}", "!./**/node_modules/**"],
    theme: {
        extend: {
            colors: {
                'light-white': '#e0fbfc',
                'dark-blue': '#3e92cc',
                'bone-white':'#f4f3ee'
            }
        },
    },
    plugins: []
}