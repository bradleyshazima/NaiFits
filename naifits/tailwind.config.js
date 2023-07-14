/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },

    screens: {
      '3xl': {'max': '1536px'},
      '2xl': {'max': '1280px'},
      'xl': {'max': '1024px'},
      'lg': {'max': '768px'},
      'md': {'max': '640px'},
      'sm': {'max': '480px'},
      'xsm': {'max': '360px'},
    }
  },
  plugins: [],
}

