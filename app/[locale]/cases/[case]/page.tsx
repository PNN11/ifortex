import initTranslations from '@/app/i18n'
import CaseFirstScreen from '@/components/pages/case/firstScreen/caseFirstScreen'
import TranslationsProvider from '@/components/providers/locales'
import { casesData } from './data'
import CaseInfo from '@/components/pages/case/caseInfo'

export default async function Home({ params }: { params: { locale: string; case: string } }) {
    const namespaces = [`cases/${params.case}`, 'cases']
    const { resources } = await initTranslations(params.locale, namespaces)

    const data = casesData[params.case]

    return (
        <TranslationsProvider locale={params.locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <CaseFirstScreen {...data.firstScreen} />
                <CaseInfo />
            </main>
        </TranslationsProvider>
    )
}
