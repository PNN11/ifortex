import { michroma } from '@/fonts'
import { ComponentProps, FC } from 'react'

type HeadingProps = ComponentProps<'h1'> & {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'accent'
}

const variantTags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    accent: 'h4',
} as const

const variantClasses: Record<HeadingProps['variant'], string> = {
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    accent: 'text-accent',
}

const Heading: FC<HeadingProps> = ({ variant, className = '', children, ...props }) => {
    const Element = variantTags[variant]
    return (
        <Element
            {...props}
            className={`uppercase text-base-8 ${michroma.className} ${className} ${variantClasses[variant]}`}
        >
            {children}
        </Element>
    )
}

export default Heading
