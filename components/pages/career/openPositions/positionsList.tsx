'use client'
import { Icons } from '@/components/svg'
import IconWithLinesWrapper from '@/components/ui/wrappers/iconWithLinesWrapper'
import { gilroy } from '@/fonts'
import { cn } from '@/lib/classNames'
import { FC, useState } from 'react'
import CategoryTag from './categoryBadge'
import { Position } from './openPositions.types'
import PositionListItem from './positionListItem'

type PositionsListProps = {
    positions: Position[]
}

const getPositionsByCategory = (positions: Position[], category: string) =>
    category === 'all' ? positions : positions.filter(position => position.category === category)

const PositionsList: FC<PositionsListProps> = ({ positions }) => {
    const [activeCategory, setActiveCategory] = useState('all')

    const categories = Array.from(new Set(['all', ...positions.map(item => item.category)]))

    return (
        <>
            {positions?.length ? (
                <div>
                    <ul className="hidden-scroll lg:mb-19.25 mb-11 flex overflow-auto sm:mb-13.75 md:mb-16.5">
                        {categories.map(category => (
                            <li key={category}>
                                <button onClick={() => setActiveCategory(category)} type="button">
                                    <CategoryTag
                                        category={category}
                                        amount={getPositionsByCategory(positions, category).length}
                                        isActive={category === activeCategory}
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {getPositionsByCategory(positions, activeCategory).map(position => (
                            <li key={position.title}>
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
                        <Icons.Warning className="text-base-17" />
                        <p
                            className={cn(
                                'whitespace-nowrap text-1xl font-medium tracking-button-l text-base-17 sm:text-4xl',
                                gilroy.className
                            )}
                        >
                            No open positions yet
                        </p>
                        <Icons.Warning className="hidden text-base-17 md:block" />
                    </div>
                </IconWithLinesWrapper>
            )}
        </>
    )
}

export default PositionsList
