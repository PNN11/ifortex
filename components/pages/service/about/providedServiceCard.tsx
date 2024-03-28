import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import { gilroy } from '@/fonts'
import { cn } from '@/lib/classNames'
import { formatNumber } from '@/lib/formatNumber'
import Image from 'next/image'
import React, { FC } from 'react'

type ProvidedServiceCardProps = {
    title: string
    description: string
    number: number
}

const ProvidedServiceCard: FC<ProvidedServiceCardProps> = ({ description, number, title }) => {
    return (
        <div className="relative">
            <div className="absolute bottom-0 right-0 h-0.75 w-0.75 bg-base-4" />
            <div
                className="provided-service-clip bg-provided-service-gradient pb-17.5
            pl-6 pr-6 pt-7 md:pb-13.5 md:pl-8.5 md:pr-7 md:pt-8.5 xl:pb-8.5"
            >
                <Heading variant="h4" className="mb-5 text-base-4">
                    #{formatNumber(number, { minimumIntegerDigits: 2 })}
                </Heading>
                <Heading variant="h3" className="mb-4">
                    {title}
                </Heading>
                <p className={cn('mb-5.75 text-base text-white md:mb-4', gilroy.className)}>{description}</p>
                <div>
                    <Icons.Lines.Hypotenuse className="text-base-4" />
                </div>
            </div>
        </div>
    )
}

export default ProvidedServiceCard
