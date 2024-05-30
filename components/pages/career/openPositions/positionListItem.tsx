import React, { FC } from 'react'
import { Position } from './openPositions.types'
import { Icons } from '@/components/svg'
import { cn } from '@/lib/classNames'
import { gilroy } from '@/fonts'
import { useTranslation } from 'react-i18next'
import { Vacancy } from '@/types/vacancy'
import Link from 'next/link'

type PositionListItemProps = {
    position: Vacancy
}

const grades: Record<string, string> = {
    noExperience: 'trainee',
    between1And3: 'middle',
    between3And6: 'senior',
    moreThan6: 'senior',
}

const schedulesRu: Record<string, string> = {
    fullDay: 'Полный день',
    shift: 'Сменный график',
    flexible: 'Гибкий график',
    remote: 'Удаленная работа',
    flyInFlyOut: 'Вахтовый метод',
}

const schedulesEn: Record<string, string> = {
    fullDay: 'Full day',
    shift: 'Shift',
    flexible: 'Flexible',
    remote: 'Remote',
    flyInFlyOut: 'Fly-in-fly-out',
}

const schedules: Record<string, Record<string, string>> = { ru: schedulesRu, en: schedulesEn }

const PositionListItem: FC<PositionListItemProps> = ({ position }) => {
    const { alternate_url, experience, name, schedule } = position

    const { t, i18n } = useTranslation()

    const workSchedule = schedules[i18n.language][schedule.id]

    return (
        <div
            className={cn(
                'flex items-center justify-between border-b border-b-base-5 py-6 text-4xl font-medium leading-8.25 tracking-button-l',
                gilroy.className
            )}
        >
            <div className="flex flex-col justify-between gap-3 xl:flex-row xl:flex-wrap xl:items-center">
                <p className="text-base-6 xl:w-100 2xl:w-134">{name}</p>
                <div className="hidden  items-center gap-7.75 text-base-4 md:flex xl:gap-16">
                    <div className="flex items-center gap-6 text-base-4">
                        <Icons.MapPin />
                        <p>{t('career:open-positions.remote')}</p>
                    </div>
                    <div className="flex items-center gap-6 text-base-4">
                        <Icons.UserSearch />
                        <p>{grades[experience.id]}</p>
                    </div>
                    {schedule && (
                        <div className="flex items-center gap-6 text-base-4">
                            <Icons.DocumentLayoutLeft />
                            <p>{workSchedule}</p>
                        </div>
                    )}
                </div>
            </div>
            <Link href={alternate_url} target="_blank" rel="noreferrer">
                <Icons.Arrows.ArrowUpRight className="text-base-6" />
            </Link>
        </div>
    )
}

export default PositionListItem
