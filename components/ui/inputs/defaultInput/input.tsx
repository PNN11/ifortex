import { Icons } from '@/components/svg'
import { gilroy } from '@/fonts'
import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

type InputSize = 'l' | 'm' | 's'

type InputProps = ComponentProps<'input'> & {
    inputSize?: InputSize
    withIcon?: boolean
    Icon?: FC<ComponentProps<'svg'>>
    iconClassName?: string
    onIconClick?: () => void
    iconButtonType?: 'button' | 'submit' | 'reset'
}

const Input: FC<InputProps> = ({
    className = '',
    width,
    inputSize = 'l',
    withIcon = false,
    Icon = Icons.Arrows.ArrowUpRight,
    iconClassName = '',
    onIconClick,
    iconButtonType = 'button',
    ...props
}) => {
    return (
        <div className="relative">
            <input
                className={cn(
                    `relative w-full border-b border-b-base-16 bg-transparent font-light leading-8.25 text-base-5 outline-none placeholder:text-base-5`,
                    gilroy.className,

                    {
                        'h-20 px-10 text-3xl': inputSize === 'l',
                        'px-5,5 h-15 text-1xl': inputSize === 'm',
                        'h-11.75 px-4.75 text-xl': inputSize === 's',
                    },
                    {
                        'pr-26': inputSize === 'l' && withIcon,
                        'pr-16.5': (inputSize === 'm' || inputSize === 's') && withIcon,
                    }
                )}
                {...props}
            />
            {withIcon && (
                <button type={iconButtonType} onClick={onIconClick}>
                    <Icon
                        className={cn(
                            {
                                'right-5.25 h-15 w-15': inputSize === 'l',
                                'right-2.375 h-7 w-7': inputSize === 'm' || inputSize === 's',
                                'cursor-pointer': !!onIconClick,
                            },
                            'absolute top-1/2 z-10 -translate-y-1/2 text-white',
                            iconClassName
                        )}
                    />
                </button>
            )}
        </div>
    )
}

export default Input
