import { gilroy, michroma } from '@/fonts'
import React, { ComponentProps, FC } from 'react'

type ParagraphProps = ComponentProps<'p'> & {
    variant: 'p1' | 'p2' | 'alt' | 'tag'
}

const variantClasses: Record<ParagraphProps['variant'], string> = {
    p1: `text-p1 tracking-p ${gilroy.className}`,
    p2: `text-p2 tracking-p ${gilroy.className}`,
    alt: `text-alt tracking-alt ${gilroy.className}`,
    tag: `text-alt tracking-alt ${michroma.className}`,
}

const Paragraph: FC<ParagraphProps> = ({ variant, className = '', children, ...props }) => {
    return (
        <p className={`${variantClasses[variant]} ${className} text-base-5`} {...props}>
            {children}
        </p>
    )
}

export default Paragraph
