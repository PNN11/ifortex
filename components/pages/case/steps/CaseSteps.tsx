import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { FC } from 'react'
import StepCard from './StepCard'

type CaseStepsProps = {
    title: string
    steps: {
        title: string
        description: string
    }[]
}

const CaseSteps: FC<CaseStepsProps> = ({ steps, title }) => {
    return (
        <SectionWrapper>
            <Container>
                <Heading className="mb-9 lg:mb-12.5" variant="h2">
                    {title}
                </Heading>
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                    {steps.map(({ description, title }, index) => (
                        <StepCard key={`${title}${index}`} title={title} description={description} number={index + 1} />
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default CaseSteps
