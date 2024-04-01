import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'
import { Icons } from '../svg'

type TabProps = ComponentProps<'div'> & {
    size: 'm' | 's' | 'l'
    isActive?: boolean
    Icon?: FC<ComponentProps<'svg'>>
    iconClassName?: string
}

const Tab: FC<TabProps> = ({
    size,
    isActive = false,
    children,
    Icon = Icons.Arrows.ArrowUpRight,
    className = '',
    iconClassName = '',
}) => {
    return (
        <div
            className={cn(
                'flex w-fit cursor-pointer items-center rounded-full border border-base-5 uppercase leading-none text-base-5',
                {
                    'h-12 gap-6.75 pl-5.5 pr-3 text-xl tracking-button-m': size === 'l',
                    'text-2sm pr-2.25 tracking-tab-m h-9 gap-5.25 pl-4': size === 'm',
                    'text-2xs h-8 gap-5.25 pl-3.5 pr-2 tracking-button-sm': size === 's',
                    'border-base-1 text-base-1': isActive,
                },
                className
            )}
        >
            {children}
            <Icon
                className={cn(
                    '',
                    {
                        'h-7 w-7': size === 'l',
                        'h-5 w-5': size === 'm' || size === 's',
                    },
                    iconClassName
                )}
            />
        </div>
    )
}

export default Tab
