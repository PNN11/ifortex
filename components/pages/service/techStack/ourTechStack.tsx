import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC } from 'react'
import TechStackItem, { TechStackItemProps } from './techStackItem'
import { ServicePageContent } from '@/types/servicePage'

type OurTechStackProps = ServicePageContent['techStack']

const OurTechStack: FC<OurTechStackProps> = ({ description, items }) => {
    return (
        <SectionWrapper variant="s">
            <Container>
                <div className="max-w-155 mb-12.5 mr-auto">
                    <Heading variant="h2" className="mb-10.25">
                        Tech stack
                    </Heading>
                    <Paragraph variant="p2">{description}</Paragraph>
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
