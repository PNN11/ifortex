'use client'
import { Icons } from '@/components/svg'
import IconWithLinesWrapper from '@/components/ui/wrappers/iconWithLinesWrapper'
import { gilroy } from '@/fonts'
import { cn } from '@/lib/classNames'
import { FC, useState } from 'react'
import CategoryTag from './categoryBadge'
import { Position } from './openPositions.types'
import PositionListItem from './positionListItem'
import { useTranslation } from 'react-i18next'
import { VacanciesResponse, Vacancy } from '@/types/vacancy'

type PositionsListProps = {
    positions: VacanciesResponse | null
}

const categories = ['all', 'frontend', '.net', 'java', 'machine learning', 'python', 'nodejs']

const getPositionsByCategory = (positions: Vacancy[], category: string) =>
    category === 'all' ? positions : positions.filter(position => position.name.toLowerCase().includes(category))

const PositionsList: FC<PositionsListProps> = ({ positions }) => {
    const [activeCategory, setActiveCategory] = useState('all')
    const { t } = useTranslation()

    return (
        <>
            {positions && positions?.found ? (
                <div>
                    <ul className="hidden-scroll mb-11 flex flex-nowrap gap-y-1 overflow-auto sm:mb-13.75 md:mb-16.5 lg:mb-19.25 lg:flex-wrap">
                        {categories.map(category => {
                            const vacanciesCount = getPositionsByCategory(positions?.items, category).length
                            return vacanciesCount ? (
                                <li key={category}>
                                    <button onClick={() => setActiveCategory(category)} type="button">
                                        <CategoryTag
                                            category={category}
                                            amount={vacanciesCount}
                                            isActive={category === activeCategory}
                                        />
                                    </button>
                                </li>
                            ) : null
                        })}
                    </ul>
                    <ul>
                        {getPositionsByCategory(positions?.items, activeCategory).map(position => (
                            <li key={position.id}>
                                <PositionListItem position={position} />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <IconWithLinesWrapper
                    Icon={Icons.Lines.CareerRectangleWithLines}
                    iconProps={{ className: 'text-base-4' }}
                    className="h-98.25 lg:h-85"
                >
                    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-7.75 bg-base-3 px-3 py-2 md:flex-row">
                        <Icons.Warning className="animate-icons-pulse text-base-17" />
                        <p
                            className={cn(
                                'whitespace-nowrap text-1xl font-medium tracking-button-l text-base-17 sm:text-4xl',
                                gilroy.className
                            )}
                        >
                            {t('open-positions.no-open-positions')}
                        </p>
                        <Icons.Warning className="hidden animate-icons-pulse text-base-17 md:block" />
                    </div>
                </IconWithLinesWrapper>
            )}
        </>
    )
}

export default PositionsList
