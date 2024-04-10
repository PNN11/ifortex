'use client'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC, useRef, useState } from 'react'
import { techStackData } from './data'
import Image from 'next/image'
import Tab from '@/components/ui/tab'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import ExpertiseInfo from '../../home/expertise/expertiseInfo'
import MarginWrapper from '@/components/ui/wrappers/marginWrapper'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useTranslation } from 'react-i18next'

type EmploymentModels = (typeof employmentModels)[number]['value']

const employmentModels = [
    { title: 'tech-stack.employment-contract', value: 'employmentContract' },
    { title: 'tech-stack.b2b-with-extras', value: 'b2bWithExtras' },
    { title: 'tech-stack.b2b', value: 'b2b' },
    { title: 'tech-stack.freelance', value: 'freelance' },
] as const

const modelsData: Record<EmploymentModels, { description: string; listItems: string }> = {
    employmentContract: {
        description: 'tech-stack.employment-contract-description',
        listItems: 'tech-stack.employment-contract-items',
    },
    b2bWithExtras: {
        description: 'tech-stack.b2b-with-extras-description',
        listItems: 'tech-stack.b2b-with-extras-items',
    },
    b2b: {
        description: 'tech-stack.b2b-description',
        listItems: 'tech-stack.b2b-items',
    },
    freelance: {
        description: 'tech-stack.freelance-description',
        listItems: 'tech-stack.freelance-items',
    },
}

const getTabSize = (width: number) => {
    if (width < ScreenWidths.L) return 's'
    if (width >= ScreenWidths.L && width < ScreenWidths['2XL']) return 'm'
    return 'l'
}

const CareerTechStack: FC = () => {
    const [activeModel, setActiveModel] = useState<EmploymentModels>(employmentModels[0].value)
    const { width } = useWindowSize()
    const { t } = useTranslation()

    const ref = useRef<HTMLUListElement>(null)

    const listItems = [
        t('homepage:expertise.our-team-has-extensive'),
        ...(t(modelsData[activeModel].listItems, { returnObjects: true }) as string[]),
    ]
    useGSAP(() => {
        gsap.to(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 100%',
                end: 'bottom 00%',
                scrub: 1,
            },
            x: '-25rem',
        })
    })

    return (
        <SectionWrapper variant="m" className="overflow-hidden">
            <Container size="l">
                <MarginWrapper>
                    <Heading variant="h2" className="mb-8 md:mb-12 xl:mb-15">
                        {t('tech-stack.title')}
                    </Heading>
                    <ul ref={ref} className="flex gap-16 md:gap-21">
                        {techStackData.map(({ image, name }) => (
                            <li key={name}>
                                <Image src={image} alt="" className="max-w-max" />
                            </li>
                        ))}
                    </ul>
                </MarginWrapper>
                <Heading variant="h2" className="mb-8 md:mb-12">
                    {t('tech-stack.employment-models')}
                </Heading>
                <ul className="mb-8 flex flex-wrap items-center md:mb-17">
                    {employmentModels.map(({ title, value }) => (
                        <li key={title} onClick={() => setActiveModel(value)}>
                            <Tab isActive={activeModel === value} size={getTabSize(width)}>
                                {t(title)}
                            </Tab>
                        </li>
                    ))}
                </ul>
                <ExpertiseInfo
                    description={t(modelsData[activeModel].description)}
                    listItems={listItems}
                    classes={{
                        description: 'xl:max-w-114.5 2xl:max-w-135',
                        descriptionWrapper: '2xl:gap-19.25',
                        wrapper: 'lg:gap-5.5 xl:gap-5.5 2xl:gap-40',
                    }}
                />
            </Container>
        </SectionWrapper>
    )
}

export default CareerTechStack
