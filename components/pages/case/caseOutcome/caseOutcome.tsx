'use client'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import ExperiencesBlock from '../../service/about/experiencesBlock'
import { formatNumber } from '@/lib/formatNumber'
import ChallengeItem from './challengeItem'
import CaseImage from '../firstScreen/caseImage'

type CaseOutcomeProps = {
    image: string
}

const CaseOutcome: FC<CaseOutcomeProps> = ({ image }) => {
    const { t } = useTranslation()

    const outcomeItems = t('case-outcome.outcome-items', { returnObjects: true }) as { title: string; value: string }[]

    const challengesItems = t('case-outcome.challenges-items', { returnObjects: true }) as {
        title: string
        description: string
    }[]

    return (
        <>
            <SectionWrapper variant="s" className="overflow-hidden">
                <Container>
                    <div className="mb-2.5 grid grid-cols-1 items-end justify-between gap-8 lg:grid-cols-[32.5rem_max-content] lg:gap-12.5 3xl:mb-15">
                        <div className="lg:pb-10">
                            <div className="mb-10 h-2.5 w-2.5 bg-grad-1" />
                            <Heading variant="h2" className="max-w-76 mb-10">
                                {t('case-outcome.project-outcome')}
                            </Heading>
                            <Paragraph variant="p1">{t('case-outcome.project-outcome-description')}</Paragraph>
                        </div>
                        <ExperiencesBlock classes={{ itemsWrapper: 'lg:grid' }} items={outcomeItems} />
                    </div>
                    <div className="mb-10 sm:mb-17.25 lg:max-w-130">
                        <div className="mb-10 h-2.5 w-2.5 bg-grad-1" />
                        <Heading variant="h2" className="mb-10">
                            {t('case-outcome.challenges')}
                        </Heading>
                        <Paragraph variant="p1">{t('case-outcome.challenges-description')}</Paragraph>
                    </div>
                    <ul className="space-y-6.75">
                        {challengesItems.map(({ title, description }, i) => (
                            <li key={`${title}${i}`}>
                                <ChallengeItem description={description} index={i} title={title} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </SectionWrapper>
            <Container className="py-2.5">
                <CaseImage alt="" image={image} />
            </Container>
        </>
    )
}

export default CaseOutcome
