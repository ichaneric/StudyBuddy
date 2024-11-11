/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        g_bold:["Gayathri-Bold","sans-serif"],
        g_regular:["Gayathri-Regular","sans-serif"],
        g_thin:["Gayathri-Thin","sans-serif"],
        i_italic:["Inter-Italic","sans-serif"],
        i_variable:["Inter-Variable","sans-serif"],
      }
    },
  },
  plugins: [],
}

