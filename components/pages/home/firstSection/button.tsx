import { Icons } from '@/components/svg'
import { michroma } from '@/fonts'
import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'

type HomePageAnimatedButtonProps = ComponentProps<'button'> & {
    classes?: { icon?: string }
}

const HomePageAnimatedButton: FC<HomePageAnimatedButtonProps> = ({ children, className, classes, ...props }) => {
    return (
        <button
            className={cn(
                'relative inline-flex items-center justify-between gap-4 whitespace-nowrap uppercase text-base-9 sm:gap-6',
                `h-12 pl-5.5 pr-3 text-xl leading-none tracking-button-m md:h-20 md:pl-10 md:pr-2.5 md:text-6xl
                 md:tracking-button-m 2xl:h-24 2xl:pl-10 2xl:pr-5.25 2xl:text-7xl 2xl:tracking-button-l`,
                `relative w-full bg-transparent transition-all before:absolute before:inset-y-0 before:right-0
                 before:z-[-1] before:w-full before:bg-base-1 before:transition-all before:duration-300 hover:text-white 
                 hover:before:w-12 before:hover:bg-white md:mb-6 md:hover:before:w-20 lg:w-auto 2xl:hover:before:w-25`,
                michroma.className,
                className
            )}
            type="button"
            {...props}
        >
            {children}

            <Icons.Arrows.ArrowUpRight className={cn('h-7 w-7 text-base-9 md:h-15 md:w-15', classes?.icon)} />
        </button>
    )
}

export default HomePageAnimatedButton
