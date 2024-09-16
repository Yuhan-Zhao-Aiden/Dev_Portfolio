/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '620px',
      md: '768px',
      lg: "960px",
      xl: "1200px"
      
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)"
    },
    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187'
        },
      },
      backgroundImage: {
        'pattern-1': "url('data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%2740%27%20height%3D%2740%27%20viewBox%3D%270%200%2040%2040%27%3E%3Cg%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%235656ac%27%20fill-opacity%3D%270.4%27%3E%3Cpath%20d%3D%27M0%2038.59l2.83-2.83%201.41%201.41L1.41%2040H0v-1.41zM0%201.4l2.83%202.83%201.41-1.41L1.41%200H0v1.41zM38.59%2040l-2.83-2.83%201.41-1.41L40%2038.59V40h-1.41zM40%201.41l-2.83%202.83-1.41-1.41L38.59%200H40v1.41zM20%2018.6l2.83-2.83%201.41%201.41L21.41%2020l2.83%202.83-1.41%201.41L20%2021.41l-2.83%202.83-1.41-1.41L18.59%2020l-2.83-2.83%201.41-1.41L20%2018.59z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        
        'pattern-2': "url('data:image/svg+xml,%3Csvg%20width%3D%2720%27%20height%3D%2720%27%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27%23238aa2%27%20fill-opacity%3D%270.4%27%20fill-rule%3D%27evenodd%27%3E%3Ccircle%20cx%3D%273%27%20cy%3D%273%27%20r%3D%273%27/%3E%3Ccircle%20cx%3D%2713%27%20cy%3D%2713%27%20r%3D%273%27/%3E%3C/g%3E%3C/svg%3E')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}