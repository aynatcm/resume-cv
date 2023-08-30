const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    content: ["./**/*.{html,js,liquid}", "!./**/node_modules/**"],
    theme: {
        extend: {},
    },
    plugins: []
}

