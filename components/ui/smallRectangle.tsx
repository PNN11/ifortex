import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'

const SmallRectangle: FC<ComponentProps<'div'>> = ({ children, className = '', ...props }) => {
    return (
        <div className={cn('h-1 w-1 bg-base-14', className)} {...props}>
            {children}
        </div>
    )
}

export default SmallRectangle
