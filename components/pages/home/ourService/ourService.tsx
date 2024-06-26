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

const ourServices = [
    'our-service.services.web-development',
    'our-service.services.mobile-development',
    'our-service.services.ai-development',
    'our-service.services.software-testing',
    'our-service.services.ui-ux-design',
    'our-service.services.devops',
    'our-service.services.machine-learning',
    'our-service.services.web3',
    'our-service.services.lowcode-development',
]

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
                <div className="relative flex flex-col justify-between gap-25.75 lg:flex-row">
                    <div className="relative flex flex-col items-start gap-8.25 py-9 sm:gap-11 lg:gap-25.25">
                        <h5 className={`text-4xl font-light text-white ${gilroy.className}`}>
                            {t('our-service.explore-our-service')}:
                        </h5>
                        <Heading variant="accent" className="lowercase">
                            .{t('our-service.full-cycle')}
                            <br />.{t('our-service.mobile')}
                            <br />.{t('our-service.saas')}
                        </Heading>
                        <Button
                            size={`${width >= ScreenWidths.M ? 'm' : 's'}`}
                            variant="outlined"
                            withIcon
                            className="w-full lg:w-auto"
                        >
                            {t('our-service.start-project')}
                        </Button>
                    </div>
                    <ul className="flex min-w-60 flex-row flex-wrap items-end gap-6 gap-x-10.5 lg:flex-col lg:flex-nowrap lg:justify-between lg:gap-y-10.5">
                        {ourServices.map(item => (
                            <li key={item}>
                                <Paragraph variant="alt" className="font-medium">
                                    {t(item)}
                                </Paragraph>
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
