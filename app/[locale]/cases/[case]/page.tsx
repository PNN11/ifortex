import initTranslations from '@/app/i18n'
import CaseBlocksMapper from '@/components/pages/case/blocksMapper/CaseBlocksMapper'
import TranslationsProvider from '@/components/providers/locales'
import { notFound } from 'next/navigation'
import { allCasesData } from './data'

export default async function Home({ params }: { params: { locale: string; case: string } }) {
    const namespaces = [`cases/${params.case}`, 'cases']
    const { resources } = await initTranslations(params.locale, namespaces)

    const list = allCasesData[params.locale]

    const data = allCasesData[params.locale].find(({ card }) => card.href === params.case)

    if (!data) notFound()

    const currentProjectIndex = list.findIndex(({ card: { href } }) => href === params.case)

    const nextProject = list[currentProjectIndex < list.length - 1 ? currentProjectIndex + 1 : 0]

    return (
        <TranslationsProvider locale={params.locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <CaseBlocksMapper config={data.config} nextProject={nextProject.card} />
            </main>
        </TranslationsProvider>
    )
}
