'use client'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import MarginWrapper from '@/components/ui/wrappers/marginWrapper'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React from 'react'
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
                <div className="border border-base-2 bg-grad-2 pl-6.5 pr-6 pt-7.5 sm:pl-7.5 sm:pr-7.25 md:pl-9.5 md:pr-10.5 md:pt-11 lg:pl-12.5 2xl:pl-20">
                    <Heading variant="h2" className="mb-8.5 2xl:mb-15.75">
                        {title}
                    </Heading>
                    <div className="flex items-center gap-3.5">
                        <div className="h-1 w-1 bg-white" />
                        <div className="bg-not-found-line h-0.5 grow" />
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default NotFound
