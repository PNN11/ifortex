'use client'
import { Icons } from '@/components/svg'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ServiceFirstScreenProps = {}

const getButtonSize = (width: number) => {
    if (width < ScreenWidths.L) return 's'
    if (width >= ScreenWidths.S && width < ScreenWidths['2XL']) return 'sm'
    return 'm'
}

const ServiceFirstScreen: FC<ServiceFirstScreenProps> = () => {
    const { width } = useWindowSize()
    const { t } = useTranslation()

    return (
        <section className="overflow-hidden border-y border-y-base-2 py-10 sm:py-12 md:py-13 lg:py-20.5 2xl:py-18.5">
            <Container>
                <div className="relative pt-76.5 md:pt-120 lg:pt-0">
                    <Image
                        src="/images/service/service_bg.svg"
                        width={539}
                        height={396}
                        alt=""
                        className="absolute left-0 top-0 max-w-max animate-fade-up-service-lines lg:left-auto lg:right-[-10.625rem] lg:top-[calc(50%-12.375rem)] xl:left-0"
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
                            <Heading variant="h4">{t('service')}</Heading>
                            <Icons.Lines.Hypotenuse className="text-base-1" />
                            <Heading variant="h4" className="text-base-4">
                                {t('service-type')}
                            </Heading>
                        </div>
                        <div className="relative z-10 flex flex-col gap-8 2xl:gap-15.75">
                            <Heading variant="h1">{t('first-screen.title')}</Heading>
                            <Paragraph variant="p2">{t('first-screen.description')}</Paragraph>
                            <Button
                                size={getButtonSize(width)}
                                withIcon
                                variant="outlined"
                                className={`${width < ScreenWidths.M ? 'text-base leading-none' : ''}`}
                            >
                                {t('first-screen.action-button-title')}
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ServiceFirstScreen
