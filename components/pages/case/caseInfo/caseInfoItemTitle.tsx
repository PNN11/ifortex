import { gilroy } from '@/fonts'
import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC, ReactNode } from 'react'

type CaseInfoItemTitleProps = ComponentProps<'h5'>

const CaseInfoItemTitle: FC<CaseInfoItemTitleProps> = ({ children, className = '', ...props }) => {
    return (
        <h5
            className={cn(
                'text-1xl font-medium leading-none tracking-footer-link text-base-7 2xl:text-2xl',
                gilroy.className,
                className
            )}
            {...props}
        >
            {children}
        </h5>
    )
}

export default CaseInfoItemTitle
