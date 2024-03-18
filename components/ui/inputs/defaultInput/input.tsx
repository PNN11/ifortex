import { Icons } from '@/components/svg'
import { gilroy } from '@/fonts'
import { cn } from '@/lib/classNames'
import { WithClassName } from '@/types/common'
import clsx from 'clsx'
import React, { ComponentProps, FC } from 'react'

type InputSize = 'l' | 'm'

type InputProps = ComponentProps<'input'> & {
    inputSize?: InputSize
    withIcon?: boolean
    Icon?: FC<ComponentProps<'svg'>>
    iconClassName?: string
    onIconClick?: () => void
}

const sizeClassName: Record<InputSize, string> = {
    l: 'text-custom-xl h-20 px-10',
    m: 'h-11.75 text-alt px-4.75',
}

const Input: FC<InputProps> = ({
    className = '',
    width,
    inputSize = 'l',
    withIcon = false,
    Icon = Icons.Arrows.ArrowUpRight,
    iconClassName = '',
    onIconClick,
    ...props
}) => {
    return (
        <div className="relative">
            <input
                className={clsx(
                    `border-b-base-16 relative w-full border-b bg-transparent font-light text-base-5 outline-none placeholder:text-base-5`,
                    gilroy.className,
                    sizeClassName[inputSize],
                    { 'pr-26': inputSize === 'l' && withIcon, 'pr-16.5': inputSize === 'm' && withIcon }
                )}
                {...props}
                placeholder="YOU EMAIL"
            />
            {withIcon && (
                <Icon
                    onClick={onIconClick}
                    className={cn(
                        {
                            'right-5.25 h-15 w-15': inputSize === 'l',
                            'right-2.375 h-7 w-7': inputSize === 'm',
                            'cursor-pointer': !!onIconClick,
                        },
                        'absolute top-1/2 -translate-y-1/2 text-white',
                        iconClassName
                    )}
                />
            )}
        </div>
    )
}

export default Input
