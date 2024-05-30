'use client'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import PositionsList from './positionsList'
import Socials from './socials'
import { useTranslation } from 'react-i18next'
import { VacanciesResponse } from '@/types/vacancy'

const openPositions = [
    {
        title: 'Frontend developer',
        location: 'open-positions.positions.0.location',
        grade: 'open-positions.positions.0.grade',
        category: 'frontend',
    },

    {
        title: '.NET developer',
        location: 'open-positions.positions.1.location',
        grade: 'open-positions.positions.1.grade',
        employment: 'open-positions.positions.1.employment',
        category: '.net',
    },
]

type OpenPositionsProps = {
    positions: VacanciesResponse | null
}

const OpenPositions: FC<OpenPositionsProps> = ({ positions }) => {
    const { t } = useTranslation()

    return (
        <SectionWrapper variant="m" className="overflow-hidden">
            <Container size="l">
                <div className="mb-17.5 flex flex-wrap items-center gap-x-13.5 gap-y-4 lg:mb-20.5 2xl:mb-19.25">
                    <Heading variant="h2" className="text-base-1">
                        {positions?.found ?? 0}
                    </Heading>
                    <Icons.Lines.Hypotenuse className="text-base-1/65" />
                    <Heading variant="h2" className="relative">
                        {t('open-positions.title')}
                        <Image
                            src="/images/long_line.svg"
                            width={437}
                            height={28}
                            alt=""
                            className="absolute left-0 top-[calc(100%+0.75rem)] max-w-max md:left-[calc(100%+7.75rem)] md:top-2.5 2xl:left-[calc(100%+5.5rem)]"
                        />
                    </Heading>
                </div>
                <div className="mb-15 lg:mb-17.5 xl:mb-20 2xl:mb-25">
                    <PositionsList positions={positions} />
                </div>
                <Socials />
            </Container>
        </SectionWrapper>
    )
}

export default OpenPositions
