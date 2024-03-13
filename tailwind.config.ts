import type { Config } from 'tailwindcss'

export const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            spacing: {
                1.5: '0.375rem', // 6px
                3.25: '0.8125rem', // 13px
                4.5: '1.125rem', // 18px
                5.25: '1.3125rem', // 21px
                5.5: '1.375rem', // 22px
                6.625: '1.6563rem', // 26.5px
                6.75: '1.6875rem', // 27px
                7.25: '1.8125rem', // 29px
                7.5: '1.875rem', // 30px
                8.5: '2.125rem', // 34px
                11.5: '2.875rem', // 46px
                11.75: '2.9375rem', // 47px
                13.5: '3.375rem', // 54px
                14.5: '3.625rem', // 58px
                15: '3.75rem', // 60px
                17: '4.25rem', // 68px
                17.5: '4.375rem', // 70px
                18.75: '4.6875rem', // 75px
                26: '6.5rem', // 104px
                37: '9.25rem', // 148px
                45.25: '11.3125rem', // 181px
                100: '25rem', // 400px
            },
            colors: {
                'base-1': 'rgb(var(--color-base-1) / <alpha-value>)',
                'base-2': 'rgb(var(--color-base-2) / <alpha-value>)',
                'base-3': 'rgb(var(--color-base-3) / <alpha-value>)',
                'base-4': 'rgb(var(--color-base-4) / <alpha-value>)',
                'base-5': 'rgb(var(--color-base-5) / <alpha-value>)',
                'base-6': 'rgb(var(--color-base-6) / <alpha-value>)',
                'base-7': 'rgb(var(--color-base-7) / <alpha-value>)',
                'base-8': 'rgb(var(--color-base-8) / <alpha-value>)',
                'base-9': 'rgb(var(--color-base-9) / <alpha-value>)',
                'base-10': 'rgb(var(--color-base-10) / <alpha-value>)',
            },
            fontSize: {
                h1: ['3.375rem', '3.875rem'], // 54px, 62px
                h2: ['2.5rem', '2.875rem'], // 40px, 46px
                h3: ['2rem', '3.6rem'], // 32px, 57.6px
                h4: ['1.75rem', '2.0125rem'], // 28px, 32.2px
                p1: ['1.25rem', '1.875rem'], // 20px, 30px
                p2: ['1.5rem', '2.25rem'], // 24px, 36px
                alt: ['1.25rem', '2.0625rem'], // 20px, 33px
                'button-l': ['2.375rem', '2.375rem'], // 38px, 38px
                'button-s': ['1.25rem', '1.25rem'], // 20px, 20px
                'button-m': ['2rem', '2rem'], // 32px, 32px
            },
            letterSpacing: {
                p: '0.06rem', // 0.96px
                alt: '0.09rem', // 1.44px
                'button-l': '0.0625rem', // 1px
                'button-m': '-0.0625rem', // -1px
            },
            borderRadius: {
                19: '4.75rem', // 76px
                21.5: '5.375rem', // 86px
                22.75: '5.6875rem', // 91px
            },
        },
    },
    plugins: [],
}
export default config
