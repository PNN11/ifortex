import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import TranslationsProvider from '@/components/providers/locales'
import { michroma } from '@/fonts'
import 'aos/dist/aos.css'
import { dir } from 'i18next'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import 'swiper/css'
import 'swiper/css/navigation'
import './globals.css'
import initTranslations from './i18n'

export const metadata: Metadata = {
    title: 'IFortex',
}

const namespaces = ['common', 'contacts', 'homepage']

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    const locale = cookies().get('NEXT_LOCALE')?.value ?? 'ru'

    const { resources } = await initTranslations(locale, namespaces)

    return (
        <html lang={locale} dir={dir(locale)}>
            <body className={`${michroma.className}`}>
                <TranslationsProvider namespaces={namespaces} locale={locale} resources={resources}>
                    <div className="grid min-h-screen grid-cols-1">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                    <div id="modals" />
                </TranslationsProvider>
            </body>
        </html>
    )
}
