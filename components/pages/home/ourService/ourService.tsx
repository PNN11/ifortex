import { Icons } from '@/components/svg'
import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import { gilroy } from '@/fonts'

import React, { FC } from 'react'
import { HorizontalLine } from '../common'

const ourServices = [
    'Web development',
    'Mobile development',
    'AI development',
    'Software Testing & QA',
    'UI/UX design',
    'DevOps',
    'Machine learning',
    'WEB 3.0',
    'Lowcode development',
]

const OurService: FC = () => {
    return (
        <section className="w-[calc(100%+11.3125rem)]">
            <Container className="mb-40">
                <div className="gap-25 relative flex justify-between">
                    <div className="relative flex flex-col items-start gap-25.25 py-9">
                        <h5 className={`text-custom-2xl font-light text-white ${gilroy.className}`}>
                            Explore our service:
                        </h5>
                        <Heading variant="accent" className="lowercase">
                            .full-cycle web development
                            <br />
                            .mobile development
                            <br />
                            .saas solutions
                        </Heading>
                        <Button size="m" variant="outlined" withIcon>
                            start project
                        </Button>
                    </div>
                    <ul className="flex min-w-60 flex-col items-end justify-between">
                        {ourServices.map(item => (
                            <li key={item}>
                                <Paragraph variant="alt" className="font-medium">
                                    {item}
                                </Paragraph>
                            </li>
                        ))}
                    </ul>
                    <Icons.Lines.CircleWithLines className="absolute bottom-32 left-1/2 text-base-11" />
                </div>
            </Container>
            <HorizontalLine />
        </section>
    )
}

export default OurService
