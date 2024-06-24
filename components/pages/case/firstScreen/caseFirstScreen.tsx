'use client'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CaseImage from './caseImage'

type CaseFirstScreenProps = {
    image: string
    category: string
    title: string
    description: string
}

const CaseFirstScreen: FC<CaseFirstScreenProps> = ({ image, category, description, title }) => {
    const { t } = useTranslation()

    return (
        <section className="border-b border-b-base-2 py-10 sm:py-12 md:py-17 lg:py-13 2xl:py-19.5 3xl:py-21">
            <Container>
                <div className="mb-12 flex flex-col-reverse justify-between gap-4 md:flex-row md:items-center md:gap-25 2xl:mb-16">
                    <p className="text-xl uppercase leading-none tracking-button-m text-base-1">{category}</p>

                    <Link href="/cases" className="flex items-center gap-6 text-base-5">
                        <Icons.Arrows.ArrowRight className="h-8 w-8 text-base-6" />
                        <p className="whitespace-nowrap text-xl uppercase leading-none tracking-button-m">
                            {t('cases:back-to-cases')}
                        </p>
                    </Link>
                </div>
                <Heading variant="h1" className="mb-6 max-w-231">
                    {title}
                </Heading>
                <Paragraph className="mb-12" variant="p2">
                    {description}
                </Paragraph>

                <CaseImage alt={title} image={image} classes={{ container: 'w-full !px-0' }} />
            </Container>
        </section>
    )
}

export default CaseFirstScreen
