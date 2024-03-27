import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { FC } from 'react'
import ExperienceItem from './experienceItem'
import ProvidedServiceCard from './providedServiceCard'

type AboutServiceProps = {
    description: string
    experience: { value: string; title: string }[]
    providedServices: { title: string; description: string }[]
}

const AboutService: FC<AboutServiceProps> = ({ description, experience, providedServices }) => {
    return (
        <SectionWrapper>
            <Container>
                <div className="mb-10 grid grid-cols-1 items-end gap-8 md:mb-12.5 lg:grid-cols-2 lg:gap-3.5 xl:mb-15 xl:gap-0">
                    <div className="xl:max-w-130 flex flex-col gap-10 lg:max-w-115.5 lg:pb-10">
                        <div className="bg-grad-1 h-2.5 w-2.5" />
                        <Heading variant="h2">
                            about <br /> service
                        </Heading>
                        <Paragraph variant="p1">{description}</Paragraph>
                    </div>
                    <div className="relative py-15">
                        <Icons.Lines.ProjectLine className="rotate-x-180 absolute right-27.5 top-2.5 lg:right-0 xl:left-28 xl:right-auto" />
                        <Icons.Lines.ProjectLine className="rotate-x-180 absolute bottom-6 right-0 xl:right-22" />
                        <Icons.Lines.ProjectLine className="absolute bottom-2.5 right-72 xl:left-0 xl:right-auto" />
                        <div className="hidden-scroll grid grid-cols-[repeat(3,max-content)] gap-4.5 overflow-auto md:justify-center lg:flex lg:flex-wrap xl:flex-nowrap">
                            {experience.map(({ title, value }, index) => (
                                <ExperienceItem title={title} value={value} key={`${title}${index}`} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative mb-9 overflow-hidden lg:mb-12.5">
                    <Heading variant="h2">What we provide</Heading>
                    <Icons.Lines.LargeRectangleWithLines
                        className="xl:left-160 absolute top-1/2 hidden -translate-y-1/2 text-base-4 md:left-[31.9375rem] md:block lg:left-[35.4375rem]"
                        width={620}
                        viewBox="0 0 620 30"
                    />
                </div>
                <div>
                    {providedServices.map(({ description, title }, index) => (
                        <ProvidedServiceCard key={`${title}${index}`} />
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default AboutService
