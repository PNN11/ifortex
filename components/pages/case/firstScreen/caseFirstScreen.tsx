'use client'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CaseImage from './caseImage'

type CaseFirstScreenProps = {
    image: string
}

const CaseFirstScreen: FC<CaseFirstScreenProps> = ({ image }) => {
    const { t } = useTranslation()

    return (
        <section className="border-b border-b-base-2 py-10 sm:py-12 md:py-17 lg:py-13 2xl:py-19.5 3xl:py-21">
            <Container>
                <div className="mb-12 flex flex-col-reverse justify-between gap-4 md:flex-row md:items-center md:gap-25 2xl:mb-16">
                    <div className="grid grid-flow-col items-center gap-6 text-base-5">
                        <div className="h-8 w-8 rounded-full bg-base-6" />
                        <p className="text-xl uppercase leading-none tracking-button-m">{t('first-screen.name')}</p>
                    </div>
                    <Link href="/cases" className="flex items-center gap-6 text-base-5">
                        <Icons.Arrows.ArrowRight className="h-8 w-8 text-base-6" />
                        <p className="whitespace-nowrap text-xl uppercase leading-none tracking-button-m">
                            {t('cases:back-to-cases')}
                        </p>
                    </Link>
                </div>
                <Heading variant="h1" className="mb-12 max-w-231">
                    {t('first-screen.title')}
                </Heading>

                <CaseImage alt={t('first-screen.name')} image={image} />
            </Container>
        </section>
    )
}

export default CaseFirstScreen
