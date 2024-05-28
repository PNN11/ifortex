import { Inter, Michroma } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ['latin'] })
// export const michroma = Michroma({ weight: ['400'], subsets: ['latin'] })
export const michroma = localFont({
    src: '../public/fonts/michroma/Michroma.ttf',
    style: 'normal',
    weight: '400',
    preload: true,
    declarations: [{ prop: 'ascent-override', value: '100%' }],
})

export const gilroy = localFont({
    src: [
        { path: '../public/fonts/gilroy/Gilroy-Black.ttf', style: 'normal', weight: '900' },
        { path: '../public/fonts/gilroy/Gilroy-BlackItalic.ttf', style: 'italic', weight: '900' },
        { path: '../public/fonts/gilroy/Gilroy-Heavy.ttf', style: 'normal', weight: '900' },
        { path: '../public/fonts/gilroy/Gilroy-HeavyItalic.ttf', style: 'italic', weight: '900' },
        { path: '../public/fonts/gilroy/Gilroy-ExtraBold.ttf', style: 'normal', weight: '800' },
        { path: '../public/fonts/gilroy/Gilroy-ExtraBoldItalic.ttf', style: 'italic', weight: '800' },
        { path: '../public/fonts/gilroy/Gilroy-Bold.ttf', style: 'normal', weight: 'bold' },
        { path: '../public/fonts/gilroy/Gilroy-BoldItalic.ttf', style: 'italic', weight: 'bold' },
        { path: '../public/fonts/gilroy/Gilroy-SemiBold.ttf', style: 'normal', weight: '600' },
        { path: '../public/fonts/gilroy/Gilroy-SemiBoldItalic.ttf', style: 'italic', weight: '600' },
        { path: '../public/fonts/gilroy/Gilroy-Medium.ttf', style: 'normal', weight: '500' },
        { path: '../public/fonts/gilroy/Gilroy-MediumItalic.ttf', style: 'italic', weight: '500' },
        { path: '../public/fonts/gilroy/Gilroy-Regular.ttf', style: 'normal', weight: 'normal' },
        { path: '../public/fonts/gilroy/Gilroy-RegularItalic.ttf', style: 'italic', weight: 'normal' },
        { path: '../public/fonts/gilroy/Gilroy-Light.ttf', style: 'normal', weight: '300' },
        { path: '../public/fonts/gilroy/Gilroy-LightItalic.ttf', style: 'italic', weight: '300' },
        { path: '../public/fonts/gilroy/Gilroy-UltraLight.ttf', style: 'normal', weight: '200' },
        { path: '../public/fonts/gilroy/Gilroy-UltraLightItalic.ttf', style: 'italic', weight: '200' },
        { path: '../public/fonts/gilroy/Gilroy-Thin.ttf', style: 'normal', weight: '100' },
        { path: '../public/fonts/gilroy/Gilroy-ThinItalic.ttf', style: 'italic', weight: '100' },
    ],
})
