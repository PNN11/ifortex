import { michroma } from '@/fonts'
import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

type ButtonProps = ComponentProps<'button'> & {}

const HomePageQualityButton: FC<ButtonProps> = ({ className = '', children, type = 'button', ...props }) => {
    return (
        <button
            type={type}
            className={cn(
                `relative inline-flex items-center justify-between gap-4 whitespace-nowrap border-2 border-base-1 uppercase text-base-1 sm:gap-6`,
                'h-12 px-5.5 text-xl leading-none tracking-button-m md:h-20 md:px-10 md:text-6xl md:tracking-button-m 2xl:h-24 2xl:px-10 2xl:text-7xl 2xl:tracking-button-l',
                michroma.className,
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default HomePageQualityButton
