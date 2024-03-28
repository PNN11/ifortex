'use client'
import { Icons } from '@/components/svg'
import Container from '@/components/ui/wrappers/container'
import React, { FC } from 'react'
import Image from 'next/image'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Button from '@/components/ui/buttons/defaultButton/button'
import { ScreenWidths } from '@/types/common'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ServicePageContent } from '@/types/servicePage'

type ServiceFirstScreenProps = {
    service: string
} & ServicePageContent['firstScreen']

const getButtonSize = (width: number) => {
    if (width < ScreenWidths.L) return 's'
    if (width >= ScreenWidths.S && width < ScreenWidths['2XL']) return 'sm'
    return 'm'
}

const ServiceFirstScreen: FC<ServiceFirstScreenProps> = ({ service, actionButton, description, title }) => {
    const { width } = useWindowSize()
    return (
        <section className="overflow-hidden border-y border-y-base-2 py-10 sm:py-12 md:py-13 lg:py-20.5 2xl:py-18.5">
            <Container>
                <div className="relative pt-76.5 md:pt-120 lg:pt-0">
                    <Image
                        src="/images/service/service_bg.svg"
                        width={539}
                        height={396}
                        alt=""
                        className="absolute left-0 top-0 max-w-max lg:left-auto lg:right-[-10.625rem] lg:top-1/2 lg:-translate-y-1/2 xl:left-0"
                    />
                    <div className="mr-auto lg:max-w-[45.625rem] xl:ml-auto xl:mr-0">
                        <Image
                            src="/images/home/expertise_vector.svg"
                            width={468}
                            height={29}
                            alt="vector"
                            quality={100}
                            className="mb-11.5 hidden lg:block"
                        />
                        <div className="mb-18.5 flex flex-wrap items-center justify-between gap-5 md:justify-start lg:gap-11.75">
                            <Heading variant="h4">service</Heading>
                            <Icons.Lines.Hypotenuse className="text-base-1" />
                            <Heading variant="h4" className="text-base-4">
                                {service}
                            </Heading>
                        </div>
                        <div className="relative z-10 flex flex-col gap-8 2xl:gap-15.75">
                            <Heading variant="h1">{title}</Heading>
                            <Paragraph variant="p2">{description}</Paragraph>
                            <Button
                                size={getButtonSize(width)}
                                withIcon
                                variant="outlined"
                                className={`${width < ScreenWidths.M ? 'text-base leading-none' : ''}`}
                            >
                                {actionButton.title}
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ServiceFirstScreen
