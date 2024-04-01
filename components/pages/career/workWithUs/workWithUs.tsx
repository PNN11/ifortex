import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC } from 'react'
import WorkflowStageItem from '../../service/workflow/stage'
import SectionGradient from '@/components/ui/sectionGradient'

const privileges = [
    {
        title: 'title',
        description:
            'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies',
    },
    {
        title: 'title',
        description:
            'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies',
    },
    {
        title: 'title',
        description:
            'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies',
    },
    {
        title: 'title',
        description:
            'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies',
    },
    {
        title: 'title',
        description:
            'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies',
    },
]

const WorkWithUs: FC = () => {
    return (
        <SectionWrapper variant="m" className="relative">
            <Container size="l">
                <Heading variant="h2" className="mb-12 md:mb-13.5 lg:mb-22 lg:ml-28 lg:max-w-104 xl:ml-0">
                    Why work with us
                </Heading>
                <div className="3xl:gap-54.75 grid grid-cols-1 gap-14.5 xl:grid-cols-2 xl:gap-34">
                    <Paragraph variant="p2" className="lg:pl-28 xl:pl-0">
                        Transform the financial world with innovative digital solutions. Our team has extensive
                        experience in creating custom web and mobile applications for FinTech companies, from payments
                        to wealth management. Let us help you revolutionize the financial industry.
                    </Paragraph>
                    <ul className="flex flex-col gap-8 md:gap-14 lg:pl-19.5 xl:pl-0">
                        {privileges.map(({ description, title }, index) => (
                            <li key={`${title}${index}`}>
                                <WorkflowStageItem description={description} stageNumber={index + 1} title={title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
            <SectionGradient />
            <div
                className="bg-work-with-us-line xl:bottom-51.25 2xl:bottom-58.25 3xl:bottom-63.25 3xl:-top-93.25
                 absolute -bottom-20.5 -top-7.25 left-13.5 z-[-1] hidden w-0.5 lg:block xl:-top-103 xl:left-1/2 2xl:-top-98.25"
            />
            <div className="3xl:top-58.75 absolute -left-76.5 hidden h-231 w-226.5 rounded-full border border-base-15/30 2xl:top-88 2xl:block" />
        </SectionWrapper>
    )
}

export default WorkWithUs
