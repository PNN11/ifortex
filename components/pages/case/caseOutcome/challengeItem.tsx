import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { formatNumber } from '@/lib/formatNumber'
import React, { FC } from 'react'

type ChallengeItemProps = {
    title: string
    description: string
    index: number
}

const ChallengeItem: FC<ChallengeItemProps> = ({ description, title, index }) => {
    return (
        <div className="flex flex-col gap-3 md:flex-row md:gap-23.75">
            <div className="text-8xl leading-11.5 text-base-4">
                #{formatNumber(index + 1, { minimumIntegerDigits: 2 })}
            </div>
            <div className="pt-3.5">
                <Heading variant="h4" className="mb-4.75">
                    {title}
                </Heading>
                <Paragraph variant="p1">{description}</Paragraph>
            </div>
        </div>
    )
}

export default ChallengeItem
