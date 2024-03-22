import { gilroy, michroma } from '@/fonts'
import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'

type ParagraphProps = ComponentProps<'p'> & {
    variant: 'p1' | 'p2' | 'alt' | 'tag' | 'footer-link'
}

const variantClasses: Record<ParagraphProps['variant'], string> = {
    p1: `text-lg leading-6.75 2xl:text-xl 2xl:leading-7.5 tracking-p ${gilroy.className}`,
    p2: `text-xl leading-7.5 lg:text-1xl lg:leading-8.25 2xl:text-2xl 2xl:leading-9 tracking-p ${gilroy.className}`,
    alt: `text-lg 2xl:text-xl leading-8.25 tracking-alt ${gilroy.className}`,
    tag: `text-lg 2xl:text-xl leading-8.25 tracking-alt ${michroma.className}`,
    'footer-link': `text-sm leading-none tracking-footer-link font-light ${gilroy.className}`,
}

const Paragraph: FC<ParagraphProps> = ({ variant, className = '', children, ...props }) => {
    return (
        <p className={cn(`text-base-5`, variantClasses[variant], className)} {...props}>
            {children}
        </p>
    )
}

export default Paragraph
