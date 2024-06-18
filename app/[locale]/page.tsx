import Homepage from '@/components/pages/home/homepage'
import TechnicalWorksPage from '@/components/pages/temp/TechnicalWorksPage'
import TranslationsProvider from '@/components/providers/locales'
import initTranslations from '../i18n'

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { t, resources } = await initTranslations(locale, ['homepage'])

    return (
        <TranslationsProvider locale={locale} namespaces={['homepage']} resources={resources}>
            <Homepage />
            {/* <TechnicalWorksPage /> */}
        </TranslationsProvider>
    )
}
