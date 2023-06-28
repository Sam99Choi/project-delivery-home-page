/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'branco': '#fff',
      'vermelho': '#ea1d2c',
      'preto': '#1a1a1a',
      'gray': '#f2f2f2',
      'borda': "#f5f0eb",
      'cinza': "#cbd5e0",
      'gray-100': '#f7f7f7',
      'cinza-100': '#a6a6a6',
      'cinza-200': '#717171',
      'cinza-400': '#3e3e3e',
      'cinza-h2': '#3f3e3e',
      'cinza-dark': '#1b1e23',
      'verde': '#50a773',
      'modal': 'rgba(0, 0, 0, 0.5)'
    },

    //#e2e8f0

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
