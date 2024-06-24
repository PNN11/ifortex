import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import { formatNumber } from '@/lib/formatNumber'
import { FC, ReactNode } from 'react'

type StageItemProps = {
    title: string
    description: string
    stageNumber: number
    children?: ReactNode
    classes?: { wrapper?: string; icon?: string; number?: string; lines?: string; infoWrapper?: string }
}

const StageItem: FC<StageItemProps> = ({ description, stageNumber, title, children, classes }) => {
    return (
        <div
            className={cn(
                'relative grid grid-cols-[2.0625rem,1fr] gap-4 sm:gap-6 md:grid-cols-[1.875rem,2.0625rem,1fr,2rem] md:gap-8',
                classes?.wrapper
            )}
        >
            <div className="grid grid-rows-[1.875rem,1fr] gap-8 md:contents">
                <Paragraph className={cn('text-base-4', classes?.number)} variant="alt">
                    {formatNumber(stageNumber, { minimumIntegerDigits: 2 })}
                </Paragraph>
                <div className={cn('relative w-8.25 overflow-hidden', classes?.lines)}>
                    <Icons.Lines.VerticalRectangleWithLines
                        className={cn('absolute top-0', {
                            'text-base-6': !!(stageNumber % 2),
                            'text-base-1': !(stageNumber % 2),
                        })}
                    />
                </div>
            </div>
            <div className={cn(classes?.infoWrapper)}>
                <Heading variant="h4" className="mb-5.25">
                    {title}
                </Heading>
                <Paragraph variant="p1">{description}</Paragraph>
                {children}
            </div>
            <div className={cn('hidden md:block', classes?.icon)}>
                <Icons.Plus className={`rotate-45 text-base-13`} />
            </div>
        </div>
    )
}

export default StageItem
