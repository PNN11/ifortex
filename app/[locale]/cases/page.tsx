import initTranslations from '@/app/i18n'
import CasesFirstScreen from '@/components/pages/cases/firstScreen/casesFirstScreen'
import Partners from '@/components/pages/home/partners'
import Projects from '@/components/pages/home/projects'
import Reviews from '@/components/pages/home/reviews'
import TranslationsProvider from '@/components/providers/locales'

const namespaces = ['cases', 'homepage']

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <CasesFirstScreen />
                <Projects />
                {/* <Reviews />
                <Partners /> */}
            </main>
        </TranslationsProvider>
    )
}
