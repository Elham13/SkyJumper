/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f43f5e',
          dark: '#1F2937',
        },
        secondary: {
          DEFAULT: '#14532d',
          dark: '#374151',
        },
        accent: {
          DEFAULT: '#EF4444',
          dark: '#DC2626',
        },
        success: {
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#FBBF24',
          dark: '#D97706',
        },
        info: {
          DEFAULT: '#3B82F6',
          dark: '#1E40AF',
        },
        dark: {
          DEFAULT: '#1F2937',
        },
        light: {
          DEFAULT: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      // boxShadow: {
      //   md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      //   lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      //   xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      //   '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      //   inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      //   outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      //   none: 'none',
      // },
      backgroundImage: {
        'custom-image': "url('/assets/discount.png')",
        'another-image': "url('/path/to/another-image.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled', 'dark'],
      borderColor: ['active', 'disabled', 'dark'],
      // boxShadow: ['active', 'hover', 'dark'],
      textColor: ['active', 'disabled', 'dark'],
    },
  },
  plugins: [],
}

