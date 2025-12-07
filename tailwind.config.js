import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  // Práctica: Instalación/configuración Tailwind + DaisyUI (rutas a escanear)
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Tipografía base para diferenciar jerarquías
        display: ['"Inter var"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Inter var"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  // Práctica: DaisyUI temas + componentes listos
  daisyui: {
    themes: ['forest', 'synthwave', 'dracula'],
    darkTheme: 'forest',
    base: true,
    styled: true,
    utils: true,
  },
  plugins: [daisyui],
}
