const { opacity } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: (theme) => ({}),
      extend: {
        animation: {
          slide: "slide 40s linear infinite",
          ripple: "ripple 10s ease-in-out infinite"
        },
        keyframes: {
          slide: {
            "0%": {
              // transform: "translate(0, 0)"
              transform: "translate3d(0, 0, 0)"
            },
            "100%": {
              // transform: "translate(-50%, 0)"
              transform: "translate3d(-2000px, 0, 0)"
            },
          },
          ripple: {
            "0%": {
              transform: "scape(1)",
              opacity: "1"
            },
            "100%": {
              // transform: "translate(-50%, 0)"
              transform: "scale(3.5)",
              opacity: "0"
            },
          }
        },
        colors: {
          'darkish': '#0A0A0C',
        },
        
    },
  },

  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography' ),
    
  ],
}




