import { gilroy } from '@/fonts'
import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

type CaseInfoItemDescriptionProps = ComponentProps<'div'>

const CaseInfoItemDescription: FC<CaseInfoItemDescriptionProps> = ({ children, className = '', ...props }) => {
    return (
        <div
            className={cn(
                'text-lg font-medium leading-[1.2] tracking-button-l text-white 2xl:text-xl',
                gilroy.className,
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default CaseInfoItemDescription
