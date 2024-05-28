'use client'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import MarginWrapper from '@/components/ui/wrappers/marginWrapper'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
    const { t } = useTranslation()

    const title = t('common:not-found.title')

    return (
        <SectionWrapper variant="m" className="overflow-hidden">
            <Container size="l">
                <MarginWrapper>
                    <Heading variant="h1" className="relative">
                        {title.split(' ').slice(0, 2).join(' ')} <br /> {title.split(' ').slice(2).join(' ')}
                        <Icons.Lines.ContactsLine className="absolute bottom-0 left-0 text-base-15/65 lg:left-34 xl:bottom-2.5" />
                    </Heading>
                </MarginWrapper>

                <div
                    className="relative z-[2] h-[6.625rem] w-full translate-y-0.75 border-l border-r border-t border-base-2
                     bg-base-3 pl-6.5 pr-3 pt-8.5 clip-rt-[2.875rem] sm:pl-7.5 sm:pr-10 sm:clip-rt-[5.0625rem] md:h-[5.375rem] md:w-[35rem] md:border-r-0
                        md:pl-9.5 md:pt-11 lg:w-[38.5rem] lg:pl-12.5 xl:w-[53.9375rem] 2xl:pl-20"
                >
                    <div className="absolute right-[-3.5625rem] top-10.25 z-[2] h-px w-30 rotate-45 bg-base-2 sm:-right-5.5 md:-right-5.25" />

                    <Heading variant="h2" className="">
                        {title}
                    </Heading>
                </div>
                <div
                    className="relative overflow-hidden border border-base-2 bg-grad-2 pb-45 pl-6.5 pr-6 pt-7.5 clip-lb-[1.75rem] sm:pb-47.5 sm:pl-7.5 sm:pr-7.25
                     md:pl-9.5 md:pr-10.5 md:pt-15.75 md:clip-lb-rt-[1.75rem] lg:pb-60 lg:pl-12.5 xl:pb-15 2xl:pb-22 2xl:pl-20"
                >
                    <div className="absolute right-[-0.4375rem] top-3.25 hidden h-px w-[2.475rem] rotate-45 bg-base-2 md:block" />
                    <div className="absolute bottom-3.25 left-[-0.4375rem] h-px w-[2.475rem] rotate-45 bg-base-2" />

                    <div className="mb-9 flex items-center gap-3.5 lg:mb-6.25 2xl:mb-10">
                        <div className="h-1 w-1 bg-white" />
                        <div className="h-0.5 grow bg-not-found-line" />
                    </div>
                    <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between xl:justify-start xl:gap-15 2xl:gap-2.5 3xl:gap-24">
                        <Paragraph variant="p1" className="max-w-102 xl:max-w-78.5 2xl:max-w-82 3xl:max-w-93">
                            {t('common:not-found.description')}
                        </Paragraph>
                        <Link
                            href="/"
                            className="flex flex-row-reverse items-center justify-between lg:flex-col lg:items-end"
                        >
                            <Icons.Arrows.ArrowUpRight className="h-29 w-29 text-base-5 lg:translate-x-7.5 lg:translate-y-1.5" />
                            <Heading variant="h2">{t('common:not-found.back-home')}</Heading>
                        </Link>
                    </div>
                    <Icons.NotFoundIcon
                        className="absolute bottom-4.75 left-13.5 sm:bottom-8.5 md:bottom-10 lg:bottom-14.5 
                        lg:left-12.5 xl:bottom-12.5 xl:left-[calc(50rem+max(0rem,100vw-103.75rem))] 2xl:bottom-22 2xl:left-auto 2xl:right-16 3xl:right-25"
                    />
                    <div
                        className="absolute bottom-6.75 left-9.5 flex items-center gap-8.5 sm:bottom-10.5 
                        md:bottom-12 lg:bottom-15.5 lg:left-12.5 xl:bottom-13 xl:left-auto xl:right-18 2xl:bottom-22 2xl:right-16 3xl:right-25"
                    >
                        <Icons.Lines.Hypotenuse className="text-base-1/65" />
                        <Heading variant="h2" className="text-base-1">
                            404
                        </Heading>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default NotFound
