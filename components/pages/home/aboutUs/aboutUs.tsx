import React, { FC } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/wrappers/container'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { HorizontalLine } from '../common'
import { technologies } from './data'

const AboutUs: FC = () => {
    return (
        <section className="w-[calc(100%+11.3125rem)]">
            <Container className="mb-14">
                <div className="relative flex items-center">
                    <div className="flex items-start gap-34 py-22">
                        <Heading variant="h2">about us</Heading>
                        <Paragraph variant="p1" className="max-w-103">
                            At iFortex, we understand that building a website or app can be a daunting task. That`s why
                            we take a personalized approach to every project, working closely with our clients to ensure
                            their needs and goals are met. With our comprehensive services, you can focus on growing
                            your business while we handle the technical details.
                        </Paragraph>
                    </div>
                    <Image
                        src="/images/home/about_us_bg.svg"
                        alt="bg"
                        width={520}
                        height={395}
                        className="absolute right-11.5"
                    />
                    <Image
                        src="/images/home/about_us_planets.svg"
                        alt="bg"
                        width={210}
                        height={296}
                        className="absolute left-full"
                    />
                </div>
                <div className="flex items-start justify-between gap-17.5 py-36.5">
                    <Heading variant="h2" className="whitespace-nowrap">
                        Tech stack
                    </Heading>
                    <Paragraph variant="p1" className="">
                        Lorem ipsum dolor sit amet consectetur. Rhoncus proin libero pellentesque elit. Tincidunt
                        feugiat sit fermentum sit faucibus in cras. Vel non purus nisl risus sit sagittis commodo etiam.
                        Aliquam elementum convallis nascetur egestas molestie non blandit pulvinar odio. Tellus donec
                        netus integer lectus donec ut. Blandit parturient laoreet eu.
                    </Paragraph>
                </div>
            </Container>
            <HorizontalLine />
            <Container>
                <div className="flex gap-33.75 px-14.5 py-5.5">
                    {technologies.map(({ group, list }) => (
                        <div key={group} className="">
                            <Paragraph variant="alt" className="mb-7.75 font-medium">
                                {group}
                            </Paragraph>
                            <ul className="flex flex-col items-center gap-10">
                                {list.map(({ alt, image }) => (
                                    <li key={alt} className="flex h-10 w-10 items-center justify-center">
                                        <Image src={image} alt={alt} className="max-h-full max-w-full object-contain" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default AboutUs
