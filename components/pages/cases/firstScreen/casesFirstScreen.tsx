'use client'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import MouseParallaxWrapper from '@/components/ui/wrappers/mouseParallaxWrapper'
import Image from 'next/image'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const CasesFirstScreen: FC = () => {
    const { t } = useTranslation()

    return (
        <section className="relative overflow-hidden border-t border-t-base-2 bg-base-3 xl:border-none">
            <Container>
                <div className="mx-auto pb-5 pt-10 sm:pb-9.5 md:pb-42 md:pt-42 md:text-center lg:max-w-205.25 lg:pb-40 2xl:max-w-227.75 2xl:pb-61.25 2xl:pt-61.25">
                    <Heading variant="h1" className="mb-8 sm:mb-12 lg:mb-16.5">
                        {t('first-screen.title')}
                    </Heading>
                    <Paragraph variant="p1">{t('first-screen.description')}</Paragraph>
                </div>
            </Container>
            <MouseParallaxWrapper isAbsolutelyPositioned strength={0.15}>
                <Image
                    src="/images/home/about_us_planets.svg"
                    width={210}
                    height={296}
                    alt=""
                    className="absolute z-10 hidden rotate-180 xl:left-5.25 xl:top-[8.9375rem] xl:block 
                2xl:left-[9.375rem] 2xl:top-[21.875rem] 3xl:left-[12.625rem] 3xl:top-[13rem]"
                />
            </MouseParallaxWrapper>
            <MouseParallaxWrapper isAbsolutelyPositioned strength={0.2}>
                <Image
                    src="/images/home/about_us_planets.svg"
                    width={210}
                    height={296}
                    alt=""
                    className="absolute z-10 hidden lg:right-5.5 lg:top-85 lg:block 2xl:right-[9.3125rem]
                 2xl:top-[22.6875rem] 3xl:right-[12.625rem]"
                />
            </MouseParallaxWrapper>

            <div className="absolute bottom-0 h-100 w-full bg-cases-gradient" />
        </section>
    )
}

export default CasesFirstScreen
