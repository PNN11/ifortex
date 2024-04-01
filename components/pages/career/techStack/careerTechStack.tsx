'use client'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC, useState } from 'react'
import { techStackData } from './data'
import Image from 'next/image'
import Tab from '@/components/ui/tab'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import ExpertiseInfo from '../../home/expertise/expertiseInfo'
import MarginWrapper from '@/components/ui/wrappers/marginWrapper'

type EmploymentModels = (typeof employmentModels)[number]['value']

const employmentModels = [
    { title: 'employment contract', value: 'employmentContract' },
    { title: 'b2b with extras', value: 'b2bWithExtras' },
    { title: 'b2b', value: 'b2b' },
    { title: 'freelance', value: 'freelance' },
] as const

const modelsData: Record<EmploymentModels, { description: string; listItems: string[] }> = {
    employmentContract: {
        description:
            'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.',
        listItems: ['list item 1', 'list item 2', 'list item 3', 'list item 4', 'list item 5', 'list item 6'],
    },
    b2bWithExtras: {
        description:
            'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.',
        listItems: ['list item 1', 'list item 2', 'list item 3', 'list item 4', 'list item 5', 'list item 6'],
    },
    b2b: {
        description:
            'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.',
        listItems: ['list item 1', 'list item 2', 'list item 3', 'list item 4', 'list item 5', 'list item 6'],
    },
    freelance: {
        description:
            'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.',
        listItems: ['list item 1', 'list item 2', 'list item 3', 'list item 4', 'list item 5', 'list item 6'],
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

    return (
        <SectionWrapper variant="m" className="overflow-hidden">
            <Container size="l">
                <MarginWrapper>
                    <Heading variant="h2" className="mb-8 md:mb-12 xl:mb-15">
                        Tech stack
                    </Heading>
                    <ul className="flex gap-16 md:gap-21">
                        {techStackData.map(({ image, name }) => (
                            <li key={name}>
                                <Image src={image} alt="" className="max-w-max" />
                            </li>
                        ))}
                    </ul>
                </MarginWrapper>
                <Heading variant="h2" className="mb-8 md:mb-12">
                    Employment models
                </Heading>
                <ul className="mb-8 flex flex-wrap items-center md:mb-17">
                    {employmentModels.map(({ title, value }) => (
                        <li key={title} onClick={() => setActiveModel(value)}>
                            <Tab isActive={activeModel === value} size={getTabSize(width)}>
                                {title}
                            </Tab>
                        </li>
                    ))}
                </ul>
                <ExpertiseInfo
                    description={modelsData[activeModel].description}
                    listItems={modelsData[activeModel].listItems}
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
