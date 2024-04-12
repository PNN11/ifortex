'use client'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CaseInfoItemTitle from './caseInfoItemTitle'
import CaseInfoItemDescription from './caseInfoItemDescription'
import Paragraph from '@/components/ui/typography/paragraph'
import ProjectTagsList from '../../home/projects/tagsList'
import { Icons } from '@/components/svg'
import IconWithLinesWrapper from '@/components/ui/wrappers/iconWithLinesWrapper'

const listLabels = ['brand', 'location', 'clutch-review', 'client', 'budget', 'industry', 'environment', 'release']
const descriptionLabels = ['problem', 'solution', 'delivering']

const CaseInfo: FC = () => {
    const { t } = useTranslation()

    const listItems = listLabels.map(label => ({
        title: t(`cases:${label}`),
        description: t(`case-info.${label}`, { returnObjects: true }) as string[],
    }))

    const descriptionItems = descriptionLabels.map(label => ({
        title: t(`cases:${label}`),
        description: t(`case-info.${label}`),
    }))

    const tags = t('case-info.tags', { returnObjects: true }) as string[]

    return (
        <SectionWrapper variant="s">
            <Container>
                <div className="mb-8 grid grid-cols-1 justify-between gap-16 lg:mb-15 lg:grid-cols-[max-content_minmax(0,52.375rem)] lg:gap-4">
                    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
                        {listItems.map(({ description, title }) => (
                            <li key={title}>
                                <CaseInfoItemTitle className="mb-3">{title}</CaseInfoItemTitle>
                                <ul className="flex flex-col gap-3">
                                    {description.map(item => (
                                        <li key={item}>
                                            <CaseInfoItemDescription className="text-base-22">
                                                {item === 'NDA' ? (
                                                    <p className="flex items-center gap-2.5">
                                                        <span>{item}</span>
                                                        <Icons.Lines.NdaLines className="text-white/65" />
                                                    </p>
                                                ) : (
                                                    item
                                                )}
                                            </CaseInfoItemDescription>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <div className="max-w-209.5">
                        <ul className="mb-12 space-y-12 md:mb-16.5 md:space-y-16.5">
                            {descriptionItems.map(({ title, description }) => (
                                <li key={title}>
                                    <CaseInfoItemTitle className="mb-5.5 lg:mb-8.25">{title}</CaseInfoItemTitle>
                                    <CaseInfoItemDescription>{description}</CaseInfoItemDescription>
                                </li>
                            ))}
                        </ul>
                        <ProjectTagsList tags={tags} />
                    </div>
                </div>
                <IconWithLinesWrapper
                    Icon={Icons.Lines.CaseRectangleWithLines}
                    iconProps={{ className: 'text-white/65' }}
                    className="h-4 w-full lg:h-7.5"
                />
            </Container>
        </SectionWrapper>
    )
}

export default CaseInfo
