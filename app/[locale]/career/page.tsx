import initTranslations from '@/app/i18n'
import CareerFirstScreen from '@/components/pages/career/firstScreen/careerFirstScreen'
import OpenPositions from '@/components/pages/career/openPositions'
import CareerOurTeam from '@/components/pages/career/team/careerOurTeam'
import CareerTechStack from '@/components/pages/career/techStack/careerTechStack'
import WorkWithUs from '@/components/pages/career/workWithUs'
import TranslationsProvider from '@/components/providers/locales'
import { HH_API_BASE_URL, HH_EMPLOYER_ID } from '@/lib/constants'
import { VacanciesResponse } from '@/types/vacancy'

const SECONDS_IN_DAY = 60 * 60 * 24

const fetchPositions = async ({ page, per_page = '100' }: { page: string; per_page?: string }) => {
    try {
        const queryParams = new URLSearchParams({
            page,
            per_page,
            employer_id: HH_EMPLOYER_ID,
        })
        const response = await fetch(`${HH_API_BASE_URL}/vacancies?${queryParams.toString()}`, {
            headers: { 'HH-User-Agent': 'IFORTEX/1.0 (pavel.niadzvetski@ifortex.com)' },
            method: 'GET',
            next: { revalidate: SECONDS_IN_DAY },
        })
        const data: VacanciesResponse = await response.json()
        return { data, error: null }
    } catch (error) {
        console.log(error)

        return { data: null, error }
    }
}

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, ['career', 'homepage'])

    const { data, error } = await fetchPositions({ page: '0' })

    return (
        <TranslationsProvider locale={locale} namespaces={['career', 'homepage']} resources={resources}>
            <main>
                <CareerFirstScreen />
                <OpenPositions positions={data} />
                <CareerOurTeam />
                <WorkWithUs />
                <CareerTechStack />
            </main>
        </TranslationsProvider>
    )
}
