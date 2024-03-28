import { Icons } from '@/components/svg'
import { michroma } from '@/fonts'
import { cn } from '@/lib/classNames'
import { WithClassName } from '@/types/common'
import { ComponentProps, FC } from 'react'

type ButtonVariant = 'contained' | 'outlined' | 'without-border'

type ButtonSize = 's' | 'm' | 'l' | 'sm' | 'md'

type ButtonColor = 'primary' | 'secondary'

type ButtonProps = ComponentProps<'button'> & {
    variant?: ButtonVariant
    size?: ButtonSize
    color?: ButtonColor
    Icon?: FC<WithClassName>
    iconClassName?: string
    withIcon?: boolean
    rounded?: boolean
}

const variantClasses: Record<ButtonVariant, Record<ButtonColor, string>> = {
    contained: { primary: 'bg-base-1 text-base-9', secondary: '' },
    outlined: { primary: 'border-2 border-base-1 text-base-1', secondary: 'border-2 border-base-13 text-base-13' },
    'without-border': {
        primary: 'border-b-2 border-b-base-1 text-base-1 !px-0',
        secondary: 'border-b-2 border-b-base-13 text-base-13 !px-0',
    },
}

const sizeClasses: Record<ButtonSize, string> = {
    l: 'text-7xl leading-none tracking-button-l px-10 h-24',
    m: 'text-6xl leading-none tracking-button-m px-10 h-20',
    s: 'text-xl leading-none tracking-button-m px-5.5 h-12',
    sm: 'text-1xl leading-none tracking-button-sm px-6.75 h-13.5',
    md: 'text-4.5xl leading-none tracking-button-md px-9 h-18',
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
    rounded = false,
    ...props
}) => {
    return (
        <button
            type={type}
            className={cn(
                `relative inline-flex items-center justify-between gap-4 whitespace-nowrap uppercase sm:gap-6 ${michroma.className}
             ${variantClasses[variant][color]} ${sizeClasses[size]} ${className}`,
                {
                    'pr-5.25': withIcon && (size === 'l' || size === 'm'),
                    'pr-3': withIcon && size === 's',
                    'pr-3.5': withIcon && size === 'sm',
                    'pr-4.75': withIcon && size === 'md',
                },
                { 'rounded-21.5': rounded && (size === 'l' || size === 'm'), 'rounded-22.75': rounded && size === 's' }
            )}
            {...props}
        >
            {children}
            {withIcon && (
                <Icon
                    className={cn(
                        {
                            'h-15 w-15': size === 'l' || size === 'm',
                            'h-7 w-7': size === 's',
                            'h-10 w-10': size === 'sm',
                            'h-13.5 w-13.5': size === 'md',
                        },

                        iconClassName
                    )}
                />
            )}
        </button>
    )
}

export default Button
