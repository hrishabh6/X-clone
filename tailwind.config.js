  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["*.html",
      './src/**/*.{js,css}'
    ],
    theme: {
      extend: {
        screens: {
          'max-custom-sm': {'max': '500px'}, // Custom breakpoint at 500px
        }
      },
    },
    plugins: [],
  }

