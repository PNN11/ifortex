import initTranslations from '@/app/i18n'
import CaseFirstScreen from '@/components/pages/case/firstScreen/caseFirstScreen'
import TranslationsProvider from '@/components/providers/locales'
import { casesData } from './data'
import CaseInfo from '@/components/pages/case/caseInfo'
import CaseOutcome from '@/components/pages/case/caseOutcome'
import AdditionalCaseInfo from '@/components/pages/case/additionalCaseInfo'
import CaseContactUs from '@/components/pages/case/caseContactUs'
import { projectsList } from '@/components/pages/home/projects/data'
import CaseTitleWithDescription from '@/components/pages/case/titleWithDescription/CaseTitleWithDescription'
import CaseImage from '@/components/pages/case/firstScreen/caseImage'
import CaseStages from '@/components/pages/case/stages/CaseStages'
import CaseSteps from '@/components/pages/case/steps/CaseSteps'
import CaseTechnologies from '@/components/pages/case/technologies/CaseTechnologies'

export default async function Home({ params }: { params: { locale: string; case: string } }) {
    const namespaces = [`cases/${params.case}`, 'cases']
    const { resources } = await initTranslations(params.locale, namespaces)

    const data = casesData[params.case]

    const list = projectsList[params.locale]

    const currentProjectIndex = list.findIndex(({ href }) => href === params.case)

    const nextProject = list[currentProjectIndex < list.length - 1 ? currentProjectIndex + 1 : 0]

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
