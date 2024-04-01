import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

const SectionGradient: FC<ComponentProps<'div'>> = ({ className = '', ...props }) => {
    return <div className={cn('h-50 bg-consultation-gradient lg:h-68.5', className)} {...props} />
}

export default SectionGradient
