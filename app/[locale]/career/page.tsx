import initTranslations from '@/app/i18n'
import CareerFirstScreen from '@/components/pages/career/firstScreen/careerFirstScreen'
import OpenPositions from '@/components/pages/career/openPositions'
import CareerOurTeam from '@/components/pages/career/team/careerOurTeam'
import CareerTechStack from '@/components/pages/career/techStack/careerTechStack'
import WorkWithUs from '@/components/pages/career/workWithUs'
import TranslationsProvider from '@/components/providers/locales'

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, ['career', 'homepage'])

    return (
        <TranslationsProvider locale={locale} namespaces={['career', 'homepage']} resources={resources}>
            <main>
                <CareerFirstScreen />
                <OpenPositions />
                <CareerOurTeam />
                <WorkWithUs />
                <CareerTechStack />
            </main>
        </TranslationsProvider>
    )
}
