import initTranslations from '@/app/i18n'
import CaseFirstScreen from '@/components/pages/case/firstScreen/caseFirstScreen'
import TranslationsProvider from '@/components/providers/locales'
import { casesData } from './data'
import CaseInfo from '@/components/pages/case/caseInfo'
import CaseOutcome from '@/components/pages/case/caseOutcome'
import AdditionalCaseInfo from '@/components/pages/case/additionalCaseInfo'
import CaseContactUs from '@/components/pages/case/caseContactUs'
import { projectsMock } from '@/components/pages/home/projects/data'

export default async function Home({ params }: { params: { locale: string; case: string } }) {
    const namespaces = [`cases/${params.case}`, 'cases']
    const { resources } = await initTranslations(params.locale, namespaces)

    const data = casesData[params.case]

    const nextProject = projectsMock.all[2]

    return (
        <TranslationsProvider locale={params.locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <CaseFirstScreen {...data?.firstScreen} />
                <CaseInfo {...data?.caseInfo} />
                <CaseOutcome {...data?.caseOutcome} />
                <AdditionalCaseInfo />
                <CaseContactUs nextProject={nextProject} />
            </main>
        </TranslationsProvider>
    )
}
