'use client'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import IconWithLinesWrapper from '@/components/ui/wrappers/iconWithLinesWrapper'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type CaseContactUsProps = {}

const CaseContactUs: FC<CaseContactUsProps> = ({}) => {
    const { t } = useTranslation()

    const title = t('case-contact.title')

    console.log(title.split(' ').slice(0, 1).join(' '))

    return (
        <section className="py-10 md:py-15 2xl:py-20">
            <Container className="overflow-hidden">
                <IconWithLinesWrapper
                    Icon={Icons.Lines.CaseRectangleWithLines}
                    iconProps={{ className: 'text-white/65' }}
                    className="mb-7.5 h-7.5 w-full md:mb-15"
                />
                <div className="grid grid-cols-1 items-center gap-5 xl:grid-cols-2 xl:gap-0.75">
                    <Heading variant="h1" tag="h3" className="max-w-157">
                        {title.split(' ').slice(0, 1).join(' ')} <br /> {title.split(' ').slice(1, -1).join(' ')}{' '}
                        <span className="text-base-1">{title.split(' ').slice(-1)}</span>
                    </Heading>
                    <div className="w-fit py-3 sm:py-3.5 md:py-6 xl:self-end">
                        <Icons.Lines.ProjectLine className="mb-3.75 ml-auto w-26.75 sm:mb-4.25 sm:w-30.75 md:mb-7.5 md:w-auto" />
                        <div className="relative mb-5 w-fit sm:mb-6 md:mb-10.25">
                            <Image src="/images/cases/case_contacts_bg.svg" width={629} height={238} alt="" />
                            <Icons.Arrows.ArrowUpRight
                                className="md:w-29 md:h-29 absolute right-3.5 top-2.5 h-14.5 w-14.5
                                 text-base-5 sm:right-4 sm:top-3 sm:h-16.5 sm:w-16.5 md:right-7.25 md:top-5.25"
                            />
                            <p
                                className="absolute bottom-6.75 left-5.25 text-base uppercase leading-[1.15] text-base-8 sm:bottom-7.75
                                   sm:left-6 sm:text-lg md:bottom-13.5 md:left-11 md:text-6xl lg:bottom-12.5 lg:text-6.5xl 2xl:bottom-11.25 2xl:text-8xl"
                            >
                                {t('case-contact.contact-us')}
                            </p>
                        </div>
                        <Icons.Lines.ProjectLine className="w-26.75 rotate-y-180 sm:w-30.75 md:w-auto" />
                    </div>
                </div>
                <div className="grid grid-cols-[25.6875rem_calc(100%-25.6875rem)] items-center gap-5.25">
                    <Heading variant="h4">{t('case-contact.more-projects')}</Heading>
                    <IconWithLinesWrapper
                        Icon={Icons.Lines.CaseRectangleWithLines}
                        iconProps={{ className: 'text-white/65' }}
                        className="h-7.5 md:block"
                    />
                </div>
            </Container>
        </section>
    )
}

export default CaseContactUs
