import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import { formatNumber } from '@/lib/formatNumber'
import React, { FC } from 'react'

type ExpertiseItemProps = {
    isActive?: boolean
    title: string
    expertiseNumber?: number
    classes?: { icon?: string }
}

const ExpertiseItem: FC<ExpertiseItemProps> = ({ title, isActive = false, expertiseNumber, classes }) => {
    return (
        <div className="flex w-fit items-center gap-8">
            <Icons.Lines.RectangleWithLines className={`${isActive ? 'text-base-1' : 'text-base-6'}`} />
            <div className="flex items-center gap-5.25">
                {!!expertiseNumber && (
                    <Paragraph variant="alt">{formatNumber(expertiseNumber, { minimumIntegerDigits: 2 })}</Paragraph>
                )}
                <Heading variant="h4" className="whitespace-nowrap">
                    {title}
                </Heading>
            </div>
            <Icons.Plus className={cn(`text-base-13`, { 'rotate-45': isActive }, classes?.icon)} />
        </div>
    )
}

export default ExpertiseItem
