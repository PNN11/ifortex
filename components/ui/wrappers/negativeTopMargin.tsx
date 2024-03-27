import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'

type NegativeTopMarginWrapperProps = ComponentProps<'div'>

const NegativeTopMarginWrapper: FC<NegativeTopMarginWrapperProps> = ({ children, className, ...props }) => {
    return (
        <div
            className={cn('md:-mt-23.25 xl:-mt-27.25 2xl:-mt-30.25 -mt-16.5 sm:-mt-17 lg:-mt-25.25', className)}
            {...props}
        >
            {children}
        </div>
    )
}

export default NegativeTopMarginWrapper
