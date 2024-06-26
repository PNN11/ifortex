import React, { ComponentProps, FC } from 'react'
import CaseFirstScreen from '../firstScreen'
import CaseInfo from '../caseInfo/caseInfo'
import ListOfCaseHighlights from '../listOfHighlights'
import caseServicesList from '../caseServicesList'
import CaseTitleWithDescription from '../titleWithDescription'
import CaseImage from '../firstScreen/caseImage'
import CaseStages from '../stages/CaseStages'
import CaseSteps from '../steps/CaseSteps'
import caseContactUs from '../caseContactUs'
import CaseTechnologies from '../technologies'
import { Project } from '../../home/projects/types'
import CaseHighlightCards from '../highlightCards/CaseHighlightCards'

const blocksMap = {
    firstScreen: CaseFirstScreen,
    caseDefinition: CaseInfo,
    listOfHighlights: ListOfCaseHighlights,
    caseServicesList: caseServicesList,
    caseTitleWithDescription: CaseTitleWithDescription,
    caseImage: CaseImage,
    caseStages: CaseStages,
    caseSteps: CaseSteps,
    contact: caseContactUs,
    caseTechnologies: CaseTechnologies,
    caseHighlightCards: CaseHighlightCards,
}

type CaseBlocksMap = typeof blocksMap

type BlocksUnion = keyof typeof blocksMap

type BaseCaseBlock<T extends BlocksUnion> = {
    block: T
    props: ComponentProps<CaseBlocksMap[T]>
}

type FirstScreenBlock = BaseCaseBlock<'firstScreen'>
type CaseInfoBlock = BaseCaseBlock<'caseDefinition'>
type ListOfHighlightsBlock = BaseCaseBlock<'listOfHighlights'>
type CaseServicesListBlock = BaseCaseBlock<'caseServicesList'>
type CaseTitleWithDescriptionBlock = BaseCaseBlock<'caseTitleWithDescription'>
type CaseImageBlock = BaseCaseBlock<'caseImage'>
type CaseStagesBlock = BaseCaseBlock<'caseStages'>
type CaseStepsBlock = BaseCaseBlock<'caseSteps'>
type CaseContactUsBlock = BaseCaseBlock<'contact'>
type CaseTechnologiesBlock = BaseCaseBlock<'caseTechnologies'>
type CaseHighlightCardsBlock = BaseCaseBlock<'caseHighlightCards'>
type CaseCard = Project

type CaseBlock =
    | FirstScreenBlock
    | CaseInfoBlock
    | ListOfHighlightsBlock
    | CaseServicesListBlock
    | CaseTitleWithDescriptionBlock
    | CaseImageBlock
    | CaseStagesBlock
    | CaseStepsBlock
    | CaseContactUsBlock
    | CaseTechnologiesBlock
    | CaseHighlightCardsBlock

export type CaseBlocksConfig = CaseBlock[]

export type CaseData = {
    config: CaseBlocksConfig
    card: CaseCard
}

type CaseBlocksMapperProps = {
    config: CaseBlocksConfig
    nextProject: CaseCard
}

const CaseBlocksMapper: FC<CaseBlocksMapperProps> = ({ config, nextProject }) => {
    return (
        <main>
            {config.map(({ block, props }, i) => {
                const Component = blocksMap[block]
                if (!Component) return null
                if (block === 'contact')
                    return <Component key={`${block}${i}`} {...(props as any)} nextProject={nextProject} />
                return <Component key={`${block}${i}`} {...(props as any)} />
            })}
        </main>
    )
}

export default CaseBlocksMapper
