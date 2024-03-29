import { Icons } from '@/components/svg'
import { gilroy, michroma } from '@/fonts'
import { cn } from '@/lib/classNames'
import { formatNumber } from '@/lib/formatNumber'
import React, { FC } from 'react'

type CategoryTagProps = {
    category: string
    amount: number
    isActive: boolean
}

const CategoryTag: FC<CategoryTagProps> = ({ amount, category, isActive }) => {
    return (
        <div
            className={cn('flex h-11.75 items-center rounded-22.75 border border-base-6 pl-5.25 pr-3 text-base-6', {
                'border-base-1 text-base-1': isActive,
            })}
        >
            <p className={cn('mr-4.25 w-6.5 text-xl uppercase leading-8.25 tracking-alt', gilroy.className)}>
                {formatNumber(amount, { minimumIntegerDigits: 2 })}
            </p>
            <p className={cn('mr-6 text-xl uppercase leading-none tracking-button-m', michroma.className)}>
                {category}
            </p>
            <Icons.Plus className={cn('', { 'rotate-45': isActive })} />
        </div>
    )
}

export default CategoryTag
