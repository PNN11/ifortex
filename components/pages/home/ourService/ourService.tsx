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
import Image from 'next/image'
import SidebarImage from '@/public/images/home/homepage_sidebar_image.svg'
import { MouseParallax } from 'react-just-parallax'
import { useTranslation } from 'react-i18next'
import ArrowUpRight from '@/components/svg/arrows/arrowUpRight'
import Link from 'next/link'

export type TOurService = (typeof ourServices)[number]['href'] | 'outstaffing' | 'outsourcing' | 'web-development'

const ourServices = [
    { title: 'our-service.services.backend-development', href: 'backend-development' },
    { title: 'our-service.services.frontend-development', href: 'frontend-development' },
    { title: 'our-service.services.mobile-development', href: 'mobile-development' },
    { title: 'our-service.services.ba', href: 'business-analysis' },
    { title: 'our-service.services.devops', href: 'devops' },
    { title: 'our-service.services.qa', href: 'quality-assurance' },
    { title: 'our-service.services.ui-ux-design', href: 'ui-ux-design' },
    { title: 'our-service.services.third-party-services', href: 'third-party-services' },
    { title: 'our-service.services.machine-learning', href: 'machine-learning' },

    // 'our-service.services.web-development',
    // 'our-service.services.ai-development',
    // 'our-service.services.software-testing',
    // 'our-service.services.web3',
    // 'our-service.services.lowcode-development',
] as const

const OurService: FC = () => {
    const { width } = useWindowSize()
    const { t } = useTranslation()

    return (
        <section
            id="our-service"
            className="relative w-full overflow-hidden pb-1 2xl:w-2xl-screen-home-section 2xl:overflow-visible 3xl:w-3xl-screen-home-section"
        >
            <Image
                src={SidebarImage}
                alt=""
                className="absolute -right-25.5 hidden 2xl:block"
                data-aos="fade-zoom-in"
                data-aos-offset="300"
            />
            <Container className="py-10 sm:py-12.5 md:py-15 lg:py-25 xl:py-30 2xl:py-40">
                <div className="relative grid grid-cols-1 justify-between gap-25.75 xl:grid-cols-[1fr_max-content]">
                    <div className="relative z-[2] flex flex-col items-start gap-8.25 py-9 sm:gap-11 lg:gap-25.25">
                        <h5 className={`text-4xl font-light text-white ${gilroy.className}`}>
                            {t('our-service.explore-our-service')}
                        </h5>
                        <div>
                            <Link href={'/contact'}>
                                <div className="mb-9 grid w-full grid-cols-1 items-center justify-between gap-4 md:grid-cols-[1fr_max-content]">
                                    <Heading variant="h2">{t('our-service.outsourcing')}</Heading>
                                    <ArrowUpRight className="text-base-5 md:h-29 md:w-29" />
                                </div>
                            </Link>
                            <Link href={'/contact'}>
                                <div className="grid w-full grid-cols-1 items-center justify-between gap-4 border-t border-t-base-4 pt-9 md:grid-cols-[1fr_max-content]">
                                    <Heading variant="h2">{t('our-service.outstaffing')}</Heading>
                                    <ArrowUpRight className="text-base-5 md:h-29 md:w-29" />
                                </div>
                            </Link>
                        </div>

                        <Link href="/contact">
                            <Button
                                size={`${width >= ScreenWidths.M ? 'm' : 's'}`}
                                variant="outlined"
                                withIcon
                                className="w-full lg:w-auto"
                            >
                                {t('our-service.start-project')}
                            </Button>
                        </Link>
                    </div>
                    <ul className="relative z-[2] flex min-w-60 flex-row flex-wrap items-end gap-6 gap-x-10.5 lg:flex-col lg:flex-nowrap lg:justify-between lg:gap-y-10.5">
                        {ourServices.map(({ href, title }) => (
                            <li key={href}>
                                <Link href={`service/${href}`}>
                                    <Paragraph variant="alt" className="text-end font-medium">
                                        {t(title)}
                                    </Paragraph>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <MouseParallax isAbsolutelyPositioned strength={0.35}>
                        <Icons.Lines.CircleWithLines
                            className="absolute left-1/2 top-102.5 hidden text-base-11 md:left-153.75
                        md:block lg:left-150 lg:top-80 xl:top-72 2xl:left-162 2xl:top-60"
                        />
                    </MouseParallax>
                </div>
            </Container>
            <HorizontalLine />
        </section>
    )
}

export default OurService
