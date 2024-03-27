import { cn } from '@/lib/classNames'
import { ComponentProps, FC } from 'react'

type SectionWrapperProps = ComponentProps<'section'> & { variant?: 's' | 'm' }

const SectionWrapper: FC<SectionWrapperProps> = ({ children, className, variant = 's', ...props }) => {
    return (
        <section
            className={cn(
                {
                    'py-10 lg:py-12.5 xl:py-15 3xl:py-20': variant === 's',
                    '2xl:py-25 py-10 sm:py-12.5 md:py-15 lg:py-17.5 xl:py-20 3xl:py-30': variant === 'm',
                },
                className
            )}
            {...props}
        >
            {children}
        </section>
    )
}

export default SectionWrapper
