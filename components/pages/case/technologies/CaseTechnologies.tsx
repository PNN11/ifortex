import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { cn } from '@/lib/classNames'
import Image from 'next/image'
import React, { FC } from 'react'

type CaseTechnologiesProps = {
    title: string
    description: string
    items: {
        image: string
        title: string
    }[]
}

const CaseTechnologies: FC<CaseTechnologiesProps> = ({ description, title, items }) => {
    return (
        <SectionWrapper>
            <Container>
                <Heading className="mb-10 text-center" variant="h2">
                    {title}
                </Heading>
                <Paragraph className="mx-auto mb-7.5 text-center md:mb-12 lg:max-w-211" variant="p1">
                    {description}
                </Paragraph>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {items.map(({ image, title }) => (
                        <div
                            key={title}
                            className="bg-tech-case-card relative w-[calc(50%-0.375rem)] max-w-50
                             border border-base-4 px-3.5 pb-2.5 pt-6 service-clip-[1.75rem] md:w-auto"
                        >
                            {/* <Image
                                src="/images/service/experience_border.svg"
                                width={198}
                                height={131}
                                alt=""
                                className="absolute inset-0 z-[1]"
                            /> */}
                            {/* <div className="bg-tech-case-card absolute inset-0 z-[-1] service-clip-[1.75rem]" /> */}
                            <div className="absolute -left-2.5 top-2 h-px w-14 -rotate-45 bg-base-4" />
                            <div className="absolute -right-2.5 bottom-2 h-px w-14 -rotate-45 bg-base-4" />
                            <div className="absolute bottom-0 right-0 h-0.75 w-0.75 bg-base-2" />
                            <Image className="mb-3" src={image} width={169} height={55} alt={title} />
                            <Paragraph variant="p1">{title}</Paragraph>
                        </div>
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default CaseTechnologies
