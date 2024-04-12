import { gilroy } from '@/fonts'
import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC, ReactNode } from 'react'

type CaseInfoItemDescriptionProps = ComponentProps<'p'>

const CaseInfoItemDescription: FC<CaseInfoItemDescriptionProps> = ({ children, className = '', ...props }) => {
    return (
        <p
            className={cn(
                'text-lg font-medium leading-[1.2] tracking-button-l text-white 2xl:text-xl',
                gilroy.className,
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

export default CaseInfoItemDescription
