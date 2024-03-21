import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

const rotateY = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-20': {
            transform: 'rotateY(20deg)',
        },
        '.rotate-y-40': {
            transform: 'rotateY(40deg)',
        },
        '.rotate-y-60': {
            transform: 'rotateY(60deg)',
        },
        '.rotate-y-80': {
            transform: 'rotateY(80deg)',
        },
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    })
})

export const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '420px',
            md: '720px',
            lg: '1024px',
            xl: '1360px',
            '2xl': '1900px',
            '3xl': '2560px',
        },
        extend: {
            backgroundImage: {
                'consultation-gradient': 'linear-gradient(0deg, rgba(28, 237, 204, 0.13) 0%, rgba(52, 52, 52, 0) 100%)',
            },
            spacing: {
                1.5: '0.375rem', // 6px
                2.375: '0.5938rem', // 9.5px
                3.25: '0.8125rem', // 13px
                3.625: '0.9063rem', // 14.5px
                4.5: '1.125rem', // 18px
                4.75: '1.1875rem', // 19px
                5.25: '1.3125rem', // 21px
                5.5: '1.375rem', // 22px
                6.5: '1.625rem', // 26px
                6.625: '1.6563rem', // 26.5px
                6.75: '1.6875rem', // 27px
                7.25: '1.8125rem', // 29px
                7.5: '1.875rem', // 30px
                7.75: '1.9375rem', // 31px
                8.5: '2.125rem', // 34px
                9.5: '2.375rem', // 38px
                10.5: '2.625rem', // 42px
                11.25: '2.8125rem', // 45px
                11.5: '2.875rem', // 46px
                11.75: '2.9375rem', // 47px
                13.5: '3.375rem', // 54px
                13.75: '3.4375rem', // 55px
                14.5: '3.625rem', // 58px
                15: '3.75rem', // 60px
                15.5: '3.875rem', // 62px
                16.5: '4.125rem', // 66px
                17: '4.25rem', // 68px
                17.5: '4.375rem', // 70px
                18: '4.5rem', // 72px
                18.75: '4.6875rem', // 75px
                19.5: '4.875rem', // 78px
                20.25: '5.0625rem', // 81px
                21: '5.25rem', // 84px
                21.5: '5.375rem', // 86px
                22: '5.5rem', // 88px
                23: '5.75rem', // 92px
                23.75: '5.9375rem', // 95px
                24.5: '6.125rem', // 98px
                25.25: '6.3125rem', // 101px
                26: '6.5rem', // 104px
                26.75: '6.6875rem', // 107px
                30: '7.5rem', // 120px
                31: '7.75rem', // 124px
                31.75: '7.9375rem', // 127px
                33.75: '8.4375rem', // 135px
                34: '8.5rem', // 136px
                34.75: '8.6875rem', // 139px
                36.25: '9.0625rem', // 145px
                36.5: '9.125rem', // 146px
                37: '9.25rem', // 148px
                40.75: '10.1875rem', // 163px
                42.125: '10.5313rem', // 168.5px
                45: '11.25rem', // 180px
                45.25: '11.3125rem', // 181px
                47.75: '11.9375rem', // 191px
                65.5: '16.375rem', // 262px
                68.5: '17.125rem', // 274px
                70: '17.5rem', // 280px
                78.375: '19.5938rem', // 313.5px
                85: '21.25rem', // 340px
                99: '24.75rem', // 396px
                100: '25rem', // 400px
                102.5: '25.625rem', // 410px
                103: '25.75rem', // 412px
                109.25: '27.3125rem', // 437px
                125: '31.25rem', // 500px
                129.5: '32.375rem', // 518px
                137.5: '34.375rem', // 550px
                145.5: '36.375rem', // 582px
                158: '39.5rem', // 632px
                162: '40.5rem', // 648px
                169.5: '42.375rem', // 678px
                175.75: '43.9375rem', // 703px
                187.5: '46.875rem', // 750px
                209.5: '52.375rem', // 838px
                210.5: '52.625rem', // 842px
                226.5: '56.625rem', // 906px
                231: '57.75rem', // 924px
                248.25: '62.0625rem', // 993px
                273.75: '68.4375rem', // 1095px
                318.75: '79.6875rem', // 1275px
                341.75: '85.4375rem', // 1367px
                344: '86rem', // 1376px
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
                'base-11': 'rgb(var(--color-base-11) / <alpha-value>)',
                'base-12': 'rgb(var(--color-base-12) / <alpha-value>)',
                'base-13': 'rgb(var(--color-base-13) / <alpha-value>)',
                'base-14': 'rgb(var(--color-base-14) / <alpha-value>)',
                'base-15': 'rgb(var(--color-base-15) / <alpha-value>)',
                'base-16': 'rgb(var(--color-base-16) / <alpha-value>)',
                'base-17': 'rgb(var(--color-base-17) / <alpha-value>)',
                'base-18': 'rgb(var(--color-base-18) / <alpha-value>)',
                'base-19': 'rgb(var(--color-base-19) / <alpha-value>)',
            },
            fontSize: {
                xl: '1.25rem', // 20px
                '2xl': '1.5rem', // 24px
                '3xl': '1.625rem', // 26px
                '4xl': '1.75rem', // 28px
                '6xl': '2rem', // 32px
                '7xl': '2.375rem', // 38px
                '8xl': '2.5rem', // 40px
                '9xl': '3.375rem', // 54px
            },
            letterSpacing: {
                'footer-link': '0.044375rem', // 0.71px
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
            gridTemplateColumns: {
                review: '5rem minmax(1rem,52.6875rem) 5rem',
                footer: 'max-content minmax(max-content,1fr)',
            },
            lineHeight: {
                7.5: '1.875rem', //  30px
                8.05: '2.0125rem', //  32.2px
                8.25: '2.0625rem', //  33px
                11.5: '2.875rem', //  46px
                12.7: '3.175rem', // 50.8px
                14.4: '3.6rem', // 57.6px
                15.5: '3.875rem', // 62px
                24.3: '6.075rem', // 97.2px
            },
        },
    },
    plugins: [rotateY],
}
export default config
