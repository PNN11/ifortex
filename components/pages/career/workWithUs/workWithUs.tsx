'use client'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC } from 'react'
import WorkflowStageItem from '../../service/workflow/stage'
import SectionGradient from '@/components/ui/sectionGradient'
import Vector1 from '@/public/images/career/careers_vector_1.svg'
import Vector2 from '@/public/images/career/careers_vector_2.svg'
import Image from 'next/image'
import SmallRectangle from '@/components/ui/smallRectangle'
import { useTranslation } from 'react-i18next'

const privileges = [
    {
        title: 'work-with-us.privileges.0.title',
        description: 'work-with-us.privileges.0.description',
    },
    {
        title: 'work-with-us.privileges.1.title',
        description: 'work-with-us.privileges.1.description',
    },
    {
        title: 'work-with-us.privileges.2.title',
        description: 'work-with-us.privileges.2.description',
    },
    {
        title: 'work-with-us.privileges.3.title',
        description: 'work-with-us.privileges.3.description',
    },
    {
        title: 'work-with-us.privileges.4.title',
        description: 'work-with-us.privileges.4.description',
    },
]

const WorkWithUs: FC = () => {
    const { t } = useTranslation()

    return (
        <SectionWrapper variant="m" className="relative">
            <Container size="l">
                <Heading variant="h2" className="mb-12 md:mb-13.5 lg:mb-22 lg:ml-28 lg:max-w-104 xl:ml-0">
                    {t('work-with-us.title')}
                </Heading>
                <div className="grid grid-cols-1 gap-14.5 xl:grid-cols-2 xl:gap-34 3xl:gap-54.75">
                    <Paragraph variant="p2" className="lg:pl-28 xl:pl-0">
                        {t('work-with-us.description')}
                    </Paragraph>
                    <ul className="flex flex-col gap-8 md:gap-14 lg:pl-19.5 xl:pl-0">
                        {privileges.map(({ description, title }, index) => (
                            <li key={`${title}${index}`}>
                                <WorkflowStageItem
                                    description={t(description)}
                                    stageNumber={index + 1}
                                    title={t(title)}
                                >
                                    <SmallRectangle
                                        data-aos="fade-in"
                                        data-aos-duration="300"
                                        className="absolute -left-17.5 top-3.5 3xl:left-[-110.5px]"
                                    />
                                </WorkflowStageItem>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
            <SectionGradient />
            <div
                className="absolute -bottom-20.5 -top-7.25 left-13.5 z-[-1]
                 hidden w-px bg-work-with-us-line lg:block xl:-top-103 xl:bottom-51.25 xl:left-[calc(50%-0.0313rem)] 
                 2xl:-top-98.25 2xl:bottom-58.25 3xl:-top-93.25 3xl:bottom-63.25"
            />
            <div className="absolute -left-76.5 hidden h-231 w-226.5 rounded-full border border-base-15/30 2xl:top-88 2xl:block 3xl:top-58.75" />
            <div
                className="absolute -left-6.75 top-98.25 hidden h-20 w-31.25 lg:block xl:left-[calc(50%-5.1rem)] xl:top-2.5 2xl:top-7.25 3xl:top-12.5"
                data-aos="fade-in"
                data-aos-offset="300"
            >
                <Image src={Vector1} alt="" className="absolute" />
                <Image src={Vector2} alt="" className="absolute left-20.5 top-[0.3438rem]" />
                <SmallRectangle className="absolute left-20 top-[7.7813rem]" />
            </div>
        </SectionWrapper>
    )
}

export default WorkWithUs
