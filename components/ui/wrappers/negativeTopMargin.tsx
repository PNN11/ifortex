import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'

type NegativeTopMarginWrapperProps = ComponentProps<'div'>

const NegativeTopMarginWrapper: FC<NegativeTopMarginWrapperProps> = ({ children, className, ...props }) => {
    return (
        <div className={cn('xl:-mt-27 -2xl:mt-30 -mt-16.5 sm:-mt-17 md:-mt-23.25 lg:-mt-25.25', className)} {...props}>
            {children}
        </div>
    )
}

export default NegativeTopMarginWrapper
