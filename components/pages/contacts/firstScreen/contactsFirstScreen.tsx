'use client'
import ContactInfo from '@/components/layout/footer/contactInfo'
import SocialIcons from '@/components/layout/footer/socialIcons'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import MarginWrapper from '@/components/ui/wrappers/marginWrapper'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const ContactsFirstScreen: FC = () => {
    const { t } = useTranslation()

    return (
        <SectionWrapper variant="m" className="overflow-hidden">
            <Container size="l">
                <MarginWrapper className="relative">
                    <Heading variant="h1">
                        {t('contact')} <br />{' '}
                        <span className="relative text-base-1">
                            {t('us')}
                            <Icons.Lines.ContactsLine className="absolute bottom-0 left-full text-base-15/65 xl:bottom-2.5" />
                        </span>
                    </Heading>
                </MarginWrapper>
                <div
                    className="grid grid-cols-1 items-center gap-3.75 overflow-hidden border border-base-2 bg-grad-2
                         xl:grid-cols-[44%,1fr] xl:gap-17.5 2xl:grid-cols-[42.625rem,1fr] 2xl:gap-10 3xl:gap-40"
                >
                    <div className="relative order-2 h-52.5 w-full md:h-100 xl:order-none xl:h-full">
                        <div
                            className="absolute -top-6.5 right-12.5 h-65.5 w-112 sm:right-5.5
                             md:right-10.5 md:top-0 md:h-100 md:w-170.5 lg:right-1/2 lg:translate-x-1/2 xl:right-0 xl:translate-x-0"
                        >
                            <Icons.BelarusMap className="absolute -left-1.5 -top-6.5 h-75 w-105.5 md:left-4 md:top-0 md:h-auto md:w-auto" />
                            <div className="absolute right-0 top-[34%] w-fit md:top-[38%]">
                                <ContactInfo
                                    classes={{
                                        paragraph:
                                            'text-2xs leading-relaxed tracking-[0.0413rem] md:text-xl md:leading-8.25',
                                        icon: 'w-3.5 md:w-auto',
                                    }}
                                />
                                <div className="absolute -left-10.5 top-2 h-1.5 w-1.5 bg-base-14 md:-left-16 md:h-2.5 md:w-2.5" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="order-1 px-6 pt-6 sm:px-7.5 sm:pt-12.5 md:px-12.5 md:py-18.25 lg:px-24 lg:py-20.5
                         xl:order-none xl:max-w-125 xl:px-0 xl:py-17.25 2xl:max-w-150 2xl:py-15 3xl:max-w-169.5"
                    >
                        <Heading variant="h2" className="mb-8">
                            {t('want-to')} <span className="text-base-1">{t('start-a-project')}?</span>
                        </Heading>
                        <Paragraph variant="p1" className="mb-4.75 2xl:max-w-[42.3125rem]">
                            {t('description')}
                        </Paragraph>
                        <div className="relative pt-3.5">
                            <SocialIcons />
                            <Image
                                src="/images/long_line.svg"
                                width={437}
                                height={28}
                                alt=""
                                className="absolute left-0 top-0 max-w-max"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default ContactsFirstScreen
