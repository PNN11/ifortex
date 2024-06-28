import Tab from '@/components/ui/tab'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Link from 'next/link'
import { FC } from 'react'
import { TOurService } from '@/components/pages/home/ourService/ourService'

type CaseServicesListProps = {
    title: string
    description: string
    servicesList: { title: string; url: TOurService }[]
}

const CaseServicesList: FC<CaseServicesListProps> = ({ description, servicesList, title }) => {
    return (
        <SectionWrapper>
            <Container>
                <Heading className="mb-10 text-center" variant="h2">
                    {title}
                </Heading>
                <Paragraph className="mx-auto mb-10 max-w-211 text-center" variant="p1">
                    {description}
                </Paragraph>
                <ul className="flex flex-wrap items-center justify-center gap-3">
                    {servicesList.map(({ title, url }) => (
                        <Link href={`/service/${url}`} key={title}>
                            <Tab size="l">{title}</Tab>
                        </Link>
                    ))}
                </ul>
            </Container>
        </SectionWrapper>
    )
}

export default CaseServicesList
