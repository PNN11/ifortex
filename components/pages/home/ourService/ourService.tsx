'use client'
import { Icons } from '@/components/svg'
import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import { gilroy } from '@/fonts'

import React, { FC } from 'react'
import { HorizontalLine } from '../common'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'

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
    const { width } = useWindowSize()

    return (
        <section className="2xl:w-2xl-screen-home-section 3xl:w-3xl-screen-home-section w-full overflow-hidden pb-1">
            <Container className="mb-40">
                <div className="gap-25.75 relative flex flex-col justify-between lg:flex-row">
                    <div className="gap-8.25 relative flex flex-col items-start py-9 sm:gap-11 lg:gap-25.25">
                        <h5 className={`text-4xl font-light text-white ${gilroy.className}`}>Explore our service:</h5>
                        <Heading variant="accent" className="lowercase">
                            .full-cycle web development
                            <br />
                            .mobile development
                            <br />
                            .saas solutions
                        </Heading>
                        <Button
                            size={`${width >= ScreenWidths.M ? 'm' : 's'}`}
                            variant="outlined"
                            withIcon
                            className="w-full lg:w-auto"
                        >
                            start project
                        </Button>
                    </div>
                    <ul className="flex min-w-60 flex-row flex-wrap items-end gap-6 gap-x-10.5 lg:flex-col lg:flex-nowrap lg:justify-between lg:gap-y-10.5">
                        {ourServices.map(item => (
                            <li key={item}>
                                <Paragraph variant="alt" className="font-medium">
                                    {item}
                                </Paragraph>
                            </li>
                        ))}
                    </ul>
                    <Icons.Lines.CircleWithLines
                        className="lg:left-150 md:left-153.75 absolute left-1/2 top-102.5 hidden
                        text-base-11 md:block lg:top-80 xl:top-72 2xl:left-162 2xl:top-60"
                    />
                </div>
            </Container>
            <HorizontalLine />
        </section>
    )
}

export default OurService
