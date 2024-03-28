import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import { formatNumber } from '@/lib/formatNumber'
import React, { FC } from 'react'

type WorkflowStageItemProps = {
    title: string
    description: string
    stageNumber: number
}

const WorkflowStageItem: FC<WorkflowStageItemProps> = ({ description, stageNumber, title }) => {
    return (
        <div className="relative grid grid-cols-[1.875rem,2.0625rem,1fr] gap-4 sm:grid-cols-[1.875rem,2.0625rem,1fr,2rem] sm:gap-6 md:gap-8">
            <Paragraph className="text-base-4" variant="alt">
                {formatNumber(stageNumber, { minimumIntegerDigits: 2 })}
            </Paragraph>
            <div className="relative w-8.25 overflow-hidden">
                <Icons.Lines.VerticalRectangleWithLines
                    className={cn('absolute top-0', {
                        'text-base-6': !!(stageNumber % 2),
                        'text-base-1': !(stageNumber % 2),
                    })}
                />
            </div>
            <div>
                <Heading variant="h4" className="mb-5.25">
                    {title}
                </Heading>
                <Paragraph variant="p1">{description}</Paragraph>
            </div>
            <div className="hidden sm:block">
                <Icons.Plus className={`rotate-45 text-base-13`} />
            </div>
        </div>
    )
}

export default WorkflowStageItem
