import React, { FC } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/wrappers/container'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { HorizontalLine } from '../common'
import { technologies } from './data'

const AboutUs: FC = () => {
    return (
        <section className="2xl:w-2xl-screen-home-section 3xl:w-3xl-screen-home-section w-full overflow-hidden">
            <Container className="mb-14">
                <div className="relative flex items-center">
                    <div className="lg:gap-53.75 sm:py-12.5 pb-100.5 sm:pb-105.5 flex flex-col items-start gap-10 py-10 md:py-15 lg:flex-row xl:gap-47.75 xl:py-18.75 2xl:gap-34 2xl:py-20">
                        <Heading variant="h2">about us</Heading>
                        <Paragraph variant="p1" className="max-w-115.5 lg:max-w-103">
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
                        className="sm:bottom-12.5 absolute bottom-10 left-7.5 h-[20.875rem] w-[27.5rem] md:bottom-auto md:left-[70%] lg:left-[85%]
                         xl:left-[67%] 2xl:left-[60%] 2xl:h-[24.6875] 2xl:w-[32.5rem]"
                    />
                    <Image
                        src="/images/home/about_us_planets.svg"
                        alt="bg"
                        width={210}
                        height={296}
                        className="absolute hidden md:left-[70%] md:block lg:left-[93%] xl:left-[68%] 2xl:left-[84%] 3xl:left-full"
                    />
                </div>
                <div
                    className="xl:gap-33 lg:gap-38.5 sm:py-12.5 flex flex-col items-start justify-between gap-10 py-10 md:py-15 lg:flex-row
                 xl:py-20 2xl:gap-17.5 2xl:pb-37 2xl:pt-30"
                >
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
            <Container className="hidden-scroll overflow-auto">
                <div className="min-w-165 flex justify-between py-5.5 lg:px-15">
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
