import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { FC } from 'react'
import ChallengeItem from '../caseOutcome/challengeItem'

type ListOfCaseHighlightsProps = {
    title: string
    description: string
    list: { title: string; description: string }[]
}

const ListOfCaseHighlights: FC<ListOfCaseHighlightsProps> = ({ description, list, title }) => {
    return (
        <SectionWrapper>
            <Container>
                <div className="lg:max-w-207.5 mb-10 sm:mb-17.25">
                    <div className="mb-10 h-2.5 w-2.5 bg-grad-1" />
                    <Heading variant="h2" className="mb-10">
                        {title}
                    </Heading>
                    <Paragraph variant="p1">{description}</Paragraph>
                </div>
                <ul className="space-y-6.75">
                    {list.map(({ title, description }, i) => (
                        <li key={`${title}${i}`}>
                            <ChallengeItem description={description} index={i} title={title} />
                        </li>
                    ))}
                </ul>
            </Container>
        </SectionWrapper>
    )
}

export default ListOfCaseHighlights
