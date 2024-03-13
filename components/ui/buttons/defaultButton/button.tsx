import { Icons } from '@/components/svg'
import { michroma } from '@/fonts'
import { cn } from '@/lib/classNames'
import { WithClassName } from '@/types/common'
import clsx from 'clsx'
import React, { ComponentProps, FC } from 'react'

type ButtonVariant = 'contained' | 'outlined'

type ButtonSize = 's' | 'm' | 'l'

type ButtonColor = 'primary'

type ButtonProps = ComponentProps<'button'> & {
    variant?: ButtonVariant
    size?: ButtonSize
    color?: ButtonColor
    Icon?: FC<WithClassName>
    iconClassName?: string
    withIcon?: boolean
}

const variantClasses: Record<ButtonVariant, Record<ButtonColor, string>> = {
    contained: { primary: 'bg-base-1 text-base-9' },
    outlined: { primary: 'border-2 border-base-1 text-base-1' },
}

const sizeClasses: Record<ButtonSize, string> = {
    l: 'text-button-l tracking-button-l px-10 rounded-21.5 h-24',
    m: 'text-button-m tracking-button-m px-10 rounded-21.5 h-20',
    s: 'text-button-s tracking-button-m px-5.5 rounded-22.75 h-11.75',
}

const Button: FC<ButtonProps> = ({
    size = 'm',
    variant = 'contained',
    className = '',
    children,
    type = 'button',
    Icon = Icons.Arrows.ArrowUpRight,
    iconClassName = '',
    withIcon = false,
    color = 'primary',
}) => {
    return (
        <button
            type={type}
            className={clsx(
                `relative inline-flex items-center justify-between gap-6 uppercase ${michroma.className}
             ${variantClasses[variant][color]} ${sizeClasses[size]} ${className}`,
                { 'pr-5.25': (withIcon && size === 'l') || size === 'm', 'pr-3': withIcon && size === 's' }
            )}
        >
            {children}
            {withIcon && (
                <Icon
                    className={cn(
                        { 'h-15 w-15': size === 'l' || size === 'm', 'h-7 w-7': size === 's' },

                        iconClassName
                    )}
                />
            )}
        </button>
    )
}

export default Button
