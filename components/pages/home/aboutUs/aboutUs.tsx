'use client'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import MouseParallaxWrapper from '@/components/ui/wrappers/mouseParallaxWrapper'
import Image from 'next/image'
import { FC, useRef } from 'react'
import { HorizontalLine } from '../common'
import { technologies } from './data'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useTranslation } from 'react-i18next'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'

const AboutUs: FC = () => {
    const bgRef = useRef<HTMLImageElement>(null)
    const iconsRef = useRef<HTMLImageElement>(null)
    const { t } = useTranslation()
    const { width } = useWindowSize()

    useGSAP(() => {
        gsap.to(bgRef.current, {
            scrollTrigger: { trigger: bgRef.current, scrub: 1, start: '0 85%', end: '100% 0%' },
            translateX: '15%',
        })
    })

    useGSAP(
        () => {
            if (width < ScreenWidths.M) return
            gsap.fromTo(
                iconsRef.current,
                { filter: 'grayscale(1)' },
                {
                    filter: 'grayscale(0)',
                    scrollTrigger: {
                        trigger: iconsRef.current,
                        scrub: 3,
                        start: '0 75%',
                        end: '100% 75%',
                    },
                }
            )
        },
        { dependencies: [width], revertOnUpdate: true }
    )

    return (
        <section
            id="about-us"
            className="relative w-full overflow-hidden 2xl:w-2xl-screen-home-section 2xl:overflow-visible 3xl:w-3xl-screen-home-section"
        >
            <Container className="mb-14">
                <div className="relative flex items-center">
                    <div className="flex flex-col items-start gap-10 py-10 pb-100.5 sm:py-12.5 sm:pb-105.5 md:py-15 lg:flex-row lg:gap-53.75 xl:gap-47.75 xl:py-18.75 2xl:gap-34 2xl:py-20">
                        <Heading variant="h2">{t('about-us.title')}</Heading>
                        <Paragraph variant="p1" className="max-w-115.5 lg:max-w-103">
                            {t('about-us.description')}
                        </Paragraph>
                    </div>
                    <Image
                        ref={bgRef}
                        src="/images/home/about_us_bg.svg"
                        alt="bg"
                        width={520}
                        height={395}
                        className="absolute bottom-10 left-7.5 h-[20.875rem] w-[27.5rem] sm:bottom-12.5 md:bottom-auto md:left-[70%] lg:left-[85%]
                         xl:left-[67%] 2xl:left-[60%] 2xl:h-[24.6875] 2xl:w-[32.5rem]"
                    />
                    <MouseParallaxWrapper isAbsolutelyPositioned strength={0.15}>
                        <Image
                            src="/images/home/about_us_planets.svg"
                            alt="bg"
                            width={210}
                            height={296}
                            className="absolute hidden md:left-[70%] md:block lg:left-[93%] xl:left-[68%] 2xl:left-[84%] 3xl:left-full"
                        />
                    </MouseParallaxWrapper>
                </div>
                <div
                    className="flex flex-col items-start justify-between gap-10 py-10 sm:py-12.5 md:py-15 lg:flex-row lg:gap-38.5 xl:gap-33
                 xl:py-20 2xl:gap-17.5 2xl:pb-37 2xl:pt-30"
                >
                    <Heading variant="h2" className="whitespace-nowrap">
                        {t('about-us.tech-stack-title')}
                    </Heading>
                    <Paragraph variant="p1" className="">
                        {t('about-us.tech-stack-description')}
                    </Paragraph>
                </div>
            </Container>
            <HorizontalLine className="relative">
                <div className="hidden 2xl:block" data-aos="fade-zoom-in" data-aos-offset="300" data-aos-duration="500">
                    <Image
                        src="/images/home/homepage_sidebar_image_2.svg"
                        width={82}
                        height={360}
                        alt=""
                        className="absolute -right-px -top-31.75"
                    />
                    <div className="absolute -right-0.75 -top-0.5 h-1 w-1 bg-base-14" />
                </div>
            </HorizontalLine>
            <Container className="hidden-scroll overflow-auto">
                <div ref={iconsRef} className="flex min-w-165 justify-between py-5.5 lg:px-15">
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
            <Image
                src="/images/home/homepage_sidebar_image_3.svg"
                width={101}
                height={360}
                alt=""
                className="absolute -bottom-58 -right-0.75 hidden 2xl:block"
                data-aos="fade-zoom-in"
                data-aos-offset="300"
                data-aos-duration="400"
            />
        </section>
    )
}

export default AboutUs
