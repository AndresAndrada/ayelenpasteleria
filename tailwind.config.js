import tailwindcssAnimate from 'tailwindcss-animate';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      border: {
        border: 'hsl(var(--primary))',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        hover_primary: 'hsl(var(--hover-primary))',
        hover_secondary: 'hsl(var(--hover-secondary))',
        customColor: '#00796B',
        primary: {
          DEFAULT: '#F6D8C6',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: '#00796B',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        complementary: 'hsl(var(--complementary))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        banner: 'url(https://res.cloudinary.com/de7fyvmdp/image/upload/v1755453771/samples/Cheesecake_frutos_rojos_wujyc5.jpg)',
        bannerMerienda: 'url(https://res.cloudinary.com/de7fyvmdp/image/upload/v1755453328/samples/Desayuno_sskgqr.jpg)',
        bannerGalletas: 'url(https://res.cloudinary.com/de7fyvmdp/image/upload/v1755453165/samples/Ayel%C3%A9n1_lpvjyv.jpg)',
        bannerAlfajores: 'url(https://res.cloudinary.com/de7fyvmdp/image/upload/v1755453519/samples/Chocolate_cla3f3.jpg)',
        "gradient-section": "linear-gradient(to bottom right, #fce7f3, red)",
        "gradient-dark": "linear-gradient(to bottom right, black, gray)",
      },
      backgroundPosition: {
        banner_sm: 'left 30% top 10%',
        banner_xs: 'left 10% top 10%',
      },
      objectPosition: {
        left_10: '15% center',
      },
      boxShadow: {
        '4xl': '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 20px rgb(0 0 0 / 0.2)',
      },
      dropShadow: {
        text: '0 1px 2px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [tailwindcssAnimate, daisyui],
}

