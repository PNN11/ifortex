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
import { ScreenWidths, TitleWithDescription } from '@/types/common'
import { Icons } from '@/components/svg'
import StatItem from './statItem'
import ExploreCaseButton from '../projects/exploreCaseButton'
import Link from 'next/link'

interface Advantages {
    title: string
    items: TitleWithDescription[]
    stats: { value: string; text: string }[]
}

type Data = {
    mission: TitleWithDescription
    experience: TitleWithDescription
    advantages: Advantages
    contact: TitleWithDescription & { actionButton: string }
}

const AboutUs: FC = () => {
    // const bgRef = useRef<HTMLImageElement>(null)
    const iconsRef = useRef<HTMLImageElement>(null)
    const { t } = useTranslation()
    const { width } = useWindowSize()

    const { experience, mission, advantages, contact } = t('homepage:about-us', { returnObjects: true }) as Data

    // useGSAP(
    //     () => {
    //         if (!width) return
    //         gsap.to(bgRef.current, {
    //             scrollTrigger: { trigger: bgRef.current, scrub: 1, start: '0 85%', end: '100% 0%' },
    //             translateX: '15%',
    //         })
    //     },
    //     { dependencies: [width], revertOnUpdate: true }
    // )

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
                <div className="relative mb-15 flex items-center md:mb-20 xl:mb-25 2xl:mb-31">
                    <div
                        className="grid grid-cols-1 gap-x-5 gap-y-20 pt-12.5 md:pt-15 lg:grid-cols-2
                     lg:gap-x-11 lg:gap-y-25 lg:pt-25 xl:grid-cols-[1fr_2fr] xl:pt-30 2xl:gap-y-31 2xl:pt-40"
                    >
                        <Heading variant="h2">{t('about-us.title')}</Heading>
                        <Paragraph variant="p1" className="">
                            {t('about-us.description')}
                        </Paragraph>
                        {[mission, experience].map(({ title, description }) => (
                            <div key={title}>
                                <div className="mb-6 flex items-center gap-7.5 lg:mb-10.5">
                                    <Icons.Lines.Hypotenuse className="text-base-2" />
                                    <Heading variant="h3">{title}</Heading>
                                </div>
                                <Paragraph variant="p1">{description}</Paragraph>
                            </div>
                        ))}
                    </div>
                    {/* <Image
                        ref={bgRef}
                        src="/images/home/about_us_bg.svg"
                        alt="bg"
                        width={520}
                        height={395}
                        className="absolute bottom-10 left-7.5 h-[20.875rem] w-[27.5rem] sm:bottom-12.5 md:bottom-auto md:left-[70%] lg:left-[85%]
                         xl:left-[67%] 2xl:left-[60%] 2xl:h-[24.6875] 2xl:w-[32.5rem]"
                    /> */}
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

                {/* advantages */}
                <div className="pb-12.5 md:pb-15 lg:pb-25 xl:pb-30">
                    <div className="relative mb-16 grid w-fit grid-flow-col items-center gap-5 md:gap-13.5">
                        <Icons.Lines.Hypotenuse className="text-base-1/65" />
                        <Heading variant="h3">{advantages.title}</Heading>
                        <Image
                            src="/images/home/review_line.svg"
                            width={468}
                            height={29}
                            alt="line"
                            quality={100}
                            className="absolute left-[calc(100%+3rem)]"
                        />
                    </div>
                    <div className="mb-15 grid grid-cols-1 gap-15 md:mb-20 xl:mb-25  xl:grid-cols-2 xl:gap-27 2xl:mb-31">
                        <div className="space-y-6">
                            {advantages.items.map(({ description, title }) => (
                                <li key={title} className="grid grid-cols-[1.375rem_1fr] gap-5">
                                    <Icons.Lines.ExpertiseVector className="text-base-4" />
                                    <div className="flex  flex-col gap-4.5 overflow-hidden">
                                        <Heading className="text-white" variant="h4">
                                            {title}
                                        </Heading>
                                        <Paragraph variant="p1">{description}</Paragraph>
                                    </div>
                                </li>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 gap-4.5 md:grid-cols-2">
                            {advantages.stats.slice(0, 3).map(({ value, text }) => (
                                <StatItem text={text} value={value} key={value} />
                            ))}
                            <StatItem text={advantages.stats[3].text}>
                                <Icons.HiTechPark className="h-21.5" />
                            </StatItem>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-7.5 lg:flex-row lg:items-end">
                        <div className="lg:max-w-[50%]">
                            <Icons.Lines.ProjectLine className="mb-4" />
                            <Heading className="mb-6 max-w-96" variant="h2">
                                {contact.title}
                            </Heading>
                            <Paragraph variant="p1">{contact.description}</Paragraph>
                        </div>
                        <Link href="/contact">
                            <ExploreCaseButton>{contact.actionButton}</ExploreCaseButton>
                        </Link>
                    </div>
                </div>

                {/* tech stack */}
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
