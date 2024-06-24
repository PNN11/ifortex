'use client'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import ExploreCaseButton from '../../home/projects/exploreCaseButton'
import StageItem from './stageItem'

type CaseStagesProps = {
    title: string
    description: string
    stages: { title: string; description: string }[]
}

const CaseStages: FC<CaseStagesProps> = ({ description, stages, title }) => {
    const { t } = useTranslation()

    return (
        <SectionWrapper>
            <Container>
                <div className="grid grid-cols-1 gap-14.5 xl:grid-cols-2">
                    <div>
                        <Heading className="mb-12 lg:mb-22" variant="h2">
                            {title}
                        </Heading>
                        <Paragraph variant="p2" className="">
                            {description}
                        </Paragraph>
                    </div>
                    <ul className="flex flex-col gap-8 md:gap-14">
                        <li>
                            <StageItem
                                description={t('cases:stages.contact-us.description')}
                                stageNumber={1}
                                title={t('cases:stages.contact-us.title')}
                            >
                                <Link className="mt-5.25 block" href="/contact">
                                    <ExploreCaseButton
                                        className="grid grid-flow-col md:flex"
                                        classes={{ button: 'mr-0 text-left sm:mr-4.5', icon: 'mr-3 sm:mr-7' }}
                                    >
                                        {t('cases:stages.contact-us.actionButton')}
                                    </ExploreCaseButton>
                                </Link>
                            </StageItem>
                        </li>
                        {stages.map(({ description, title }, index) => (
                            <li key={`${title}${index}`}>
                                <StageItem description={description} stageNumber={index + 2} title={title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default CaseStages
