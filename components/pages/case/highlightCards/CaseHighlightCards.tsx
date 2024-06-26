import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import { michroma } from '@/fonts'
import { cn } from '@/lib/classNames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type CaseHighlightCardsProps = {
    title: string
    description: string
    cards: {
        title: string
        description: string
        actionButton?: { text: string; href: string }
    }[]
}

const CaseHighlightCards: FC<CaseHighlightCardsProps> = ({ cards, description, title }) => {
    return (
        <SectionWrapper className="overflow-hidden">
            <Container className="relative">
                <Image
                    src="/images/cases/highlights-bg.svg"
                    alt="bg"
                    width={622}
                    height={345}
                    className="md:left-95 absolute hidden md:-top-5 md:block lg:left-80 lg:top-0 xl:left-auto xl:right-0"
                />
                <div className="mb-6 max-w-155 md:mb-28 2xl:mb-20">
                    <div className={cn('mb-10 h-2.5 w-2.5 bg-grad-1')} />
                    <Heading variant="h2" className={'mb-10'}>
                        {title}
                    </Heading>
                    <Paragraph className="" variant="p1">
                        {description}
                    </Paragraph>
                </div>
                <div className="hidden-scroll grid gap-4.5 overflow-x-auto md:grid-flow-col">
                    {cards.map(({ description, title, actionButton }) => (
                        <div
                            className="border border-base-2 bg-grad-2 px-4 pb-6 pt-3 sm:px-5.5 md:w-90 md:px-7 lg:w-102.5"
                            key={title}
                        >
                            <div>
                                <h5
                                    className={cn(
                                        'mb-5.5 text-8xl leading-[1.8] text-base-8 md:text-[2.75rem] 2xl:text-[3rem]',
                                        michroma.className
                                    )}
                                >
                                    {title}
                                </h5>
                                <Paragraph variant="p2">{description}</Paragraph>
                            </div>
                            {actionButton && (
                                <Link className="mt-5.5 block" href={actionButton.href}>
                                    <Button className="grid w-full grid-flow-col whitespace-normal" withIcon size="s">
                                        {actionButton.text}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default CaseHighlightCards
