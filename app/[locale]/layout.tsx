import TranslationsProvider from '@/components/providers/locales'
import i18nConfig from '@/i18nConfig'
import initTranslations from '../i18n'

export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }))
}

const namespaces = ['common', 'contacts', 'homepage']
export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    const { resources } = await initTranslations(locale, namespaces)
    return (
        <TranslationsProvider namespaces={namespaces} locale={locale} resources={resources}>
            {children}
        </TranslationsProvider>
    )
}
