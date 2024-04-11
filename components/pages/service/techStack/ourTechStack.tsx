'use client'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { StaticImageData } from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import TechStackItem from './techStackItem'

type OurTechStackProps = {
    items: {
        name: string
        description: string
        listTitle: string
        technologies: {
            image: StaticImageData
            name: string
        }[]
    }[]
}

const OurTechStack: FC<OurTechStackProps> = ({ items }) => {
    const { t } = useTranslation()

    return (
        <SectionWrapper variant="s">
            <Container>
                <div className="mb-12.5 mr-auto max-w-155">
                    <Heading variant="h2" className="mb-10.25">
                        {t('tech-stack.title')}
                    </Heading>
                    <Paragraph variant="p2">{t('tech-stack.description')}</Paragraph>
                </div>
                <ul className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-28 xl:grid-cols-3 xl:gap-x-3">
                    {items.map(item => (
                        <li key={item.name}>
                            <TechStackItem {...item} />
                        </li>
                    ))}
                </ul>
            </Container>
        </SectionWrapper>
    )
}

export default OurTechStack
