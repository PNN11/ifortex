import React, { FC } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/classNames'
import { gilroy, michroma } from '@/fonts'

type ExperienceItemProps = {
    value: string
    title: string
}

const ExperienceItem: FC<ExperienceItemProps> = ({ title, value }) => {
    return (
        <div className="w-49.5 pt-5.75 relative h-32.75 pl-7.5">
            <Image
                src="/images/service/experience_border.svg"
                width={198}
                height={131}
                alt=""
                className="absolute inset-0"
            />
            <div className="w-0.75 h-0.75 absolute bottom-0 right-0 bg-base-2" />
            <p className={cn('text-6xl leading-14.4 text-base-8', michroma.className)}>{value}</p>
            <p className={cn('text-4xl leading-normal tracking-[0.07rem] text-base-5', gilroy.className)}>{title}</p>
        </div>
    )
}

export default ExperienceItem
