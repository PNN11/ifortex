import Paragraph from '@/components/ui/typography/paragraph'
import React, { FC, ReactNode } from 'react'

type StatItemProps = {
    value?: string
    text: string
    children?: ReactNode
}

const StatItem: FC<StatItemProps> = ({ text, value, children }) => {
    return (
        <div className="border border-base-2 bg-grad-2 px-7 pb-6 pt-3">
            {value && <h5 className="text-8.5xl leading-[1.8] text-base-8">{value}</h5>}
            {children}
            <Paragraph className="mt-3" variant="p1">
                {text}
            </Paragraph>
        </div>
    )
}

export default StatItem
