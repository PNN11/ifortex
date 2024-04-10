import React, { FC } from 'react'
import { Position } from './openPositions.types'
import { Icons } from '@/components/svg'
import { cn } from '@/lib/classNames'
import { gilroy } from '@/fonts'
import { useTranslation } from 'react-i18next'

type PositionListItemProps = {
    position: Position
}

const PositionListItem: FC<PositionListItemProps> = ({ position }) => {
    const { category, grade, location, title, employment } = position
    const { t } = useTranslation()
    return (
        <div
            className={cn(
                'flex items-center justify-between border-b border-b-base-5 py-6 text-4xl font-medium leading-8.25 tracking-button-l',
                gilroy.className
            )}
        >
            <div className="items center flex flex-col justify-between gap-3 xl:flex-row">
                <p className="text-base-6 xl:w-100 2xl:w-134">{title}</p>
                <div className="hidden w-135.5 items-center gap-7.75 text-base-4 md:flex xl:w-152 xl:gap-16">
                    <div className="flex items-center gap-6 text-base-4">
                        <Icons.MapPin />
                        <p>{t(location)}</p>
                    </div>
                    <div className="flex items-center gap-6 text-base-4">
                        <Icons.UserSearch />
                        <p>{t(grade)}</p>
                    </div>
                    {employment && (
                        <div className="flex items-center gap-6 text-base-4">
                            <Icons.DocumentLayoutLeft />
                            <p>{t(employment)}</p>
                        </div>
                    )}
                </div>
            </div>
            <Icons.Arrows.ArrowUpRight className="text-base-6" />
        </div>
    )
}

export default PositionListItem
