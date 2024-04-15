import { Icons } from '@/components/svg'
import React, { FC } from 'react'
import ExperienceItem from './experienceItem'
import { cn } from '@/lib/classNames'

type ExperienceBlockProps = {
    items: { title: string; value: string }[]
    classes?: { wrapper?: string; itemsWrapper?: string }
}

const ExperiencesBlock: FC<ExperienceBlockProps> = ({ items, classes }) => {
    return (
        <div className={cn('relative py-15', classes?.wrapper)}>
            <Icons.Lines.ProjectLine className="absolute right-27.5 top-2.5 rotate-x-180 lg:right-0 xl:left-28 xl:right-auto" />
            <Icons.Lines.ProjectLine className="absolute bottom-6 right-0 rotate-x-180 xl:right-22" />
            <Icons.Lines.ProjectLine className="absolute bottom-2.5 right-72 xl:left-0 xl:right-auto" />
            <div
                className={cn(
                    'hidden-scroll grid grid-cols-[repeat(3,max-content)] gap-4.5 overflow-auto md:justify-center lg:flex lg:flex-wrap xl:flex-nowrap',
                    classes?.itemsWrapper
                )}
            >
                {items.map(({ title, value }, index) => (
                    <ExperienceItem title={title} value={value} key={`${title}${index}`} />
                ))}
            </div>
        </div>
    )
}

export default ExperiencesBlock
