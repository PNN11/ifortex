import Homepage from '@/components/pages/home/homepage'
import initTranslations from '../i18n'
import TranslationsProvider from '@/components/providers/locales'

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { t, resources } = await initTranslations(locale, ['homepage'])

    return (
        <TranslationsProvider locale={locale} namespaces={['homepage']} resources={resources}>
            <Homepage />
        </TranslationsProvider>
    )
}
