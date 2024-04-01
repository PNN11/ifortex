import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

const MarginWrapper: FC<ComponentProps<'div'>> = ({ children, className, ...props }) => {
    return (
        <div className={cn('mb-10 sm:mb-12.5 md:mb-15 lg:mb-17.5 xl:mb-20 2xl:mb-25 3xl:mb-30', className)} {...props}>
            {children}
        </div>
    )
}

export default MarginWrapper
