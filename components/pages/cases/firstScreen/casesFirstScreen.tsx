import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import Image from 'next/image'
import React, { FC } from 'react'

const CasesFirstScreen: FC = () => {
    return (
        <section className="relative bg-base-3">
            <Container>
                <div className="2xl:max-w-227.75 lg:max-w-205.25 md:pt-65 2xl:pt-91.25 md:pb-42 2xl:pb-61.25 mx-auto pb-5 pt-28 sm:pb-9.5 md:text-center lg:pb-40">
                    <Heading variant="h1" className="mb-8 sm:mb-12 lg:mb-16.5">
                        we standing out your project ideas
                    </Heading>
                    <Paragraph variant="p1">
                        Lorem ipsum dolor sit amet consectetur. Nibh amet amet viverra urna eget mattis. Vel auctor sem
                        penatibus sit elit vel convallis. Tortor scelerisque magnis porta viverra sed leo a in. Purus
                        sapien risus netus adipiscing vitae placerat. Blandit risus interdum dui consequat euismod risus
                        sit egestas dictum. A lectus praesent ut.
                    </Paragraph>
                </div>
            </Container>
            <Image
                src="/images/home/about_us_planets.svg"
                width={210}
                height={296}
                alt=""
                className="absolute z-10 hidden rotate-180 xl:left-5.25 xl:top-[8.9375rem] xl:block 
                2xl:left-[9.375rem] 2xl:top-[21.875rem] 3xl:left-[12.625rem] 3xl:top-[13rem]"
            />
            <Image
                src="/images/home/about_us_planets.svg"
                width={210}
                height={296}
                alt=""
                className="absolute z-10 hidden lg:right-5.5 lg:top-85 lg:block 2xl:right-[9.3125rem]
                 2xl:top-[22.6875rem] 3xl:right-[12.625rem]"
            />
            <div className="bg-cases-gradient absolute bottom-0 h-100 w-full" />
        </section>
    )
}

export default CasesFirstScreen
