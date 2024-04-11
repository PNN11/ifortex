'use client'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC } from 'react'
import WorkflowStageItem from './stage'
import { ServicePageContent } from '@/types/servicePage'
import { useTranslation } from 'react-i18next'

type OurWorkflowProps = {}

const OurWorkflow: FC<OurWorkflowProps> = () => {
    const { t } = useTranslation()

    const stages = t('our-workflow.stages', { returnObjects: true }) as {
        title: string
        description: string
    }[]

    return (
        <SectionWrapper variant="m">
            <Container>
                <div className="grid grid-cols-1 gap-14.5 xl:grid-cols-2">
                    <div>
                        <Heading variant="h2" className="mb-12 md:mb-22">
                            {t('our-workflow.title')}
                        </Heading>
                        <Paragraph variant="p2">{t('our-workflow.description')}</Paragraph>
                    </div>
                    <ul className="flex flex-col gap-8 md:gap-14">
                        {stages.map(({ description, title }, index) => (
                            <li key={`${title}${index}`}>
                                <WorkflowStageItem description={description} stageNumber={index + 1} title={title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default OurWorkflow
