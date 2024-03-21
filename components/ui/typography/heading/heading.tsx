import { michroma } from '@/fonts'
import { cn } from '@/lib/classNames'
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
    h1: 'text-9xl leading-15.5',
    h2: 'text-8xl leading-11.5',
    h3: 'text-6xl leading-14.4',
    h4: 'text-4xl leading-8.05',
    accent: 'text-9xl leading-24.3',
}

const Heading: FC<HeadingProps> = ({ variant, className = '', children, ...props }) => {
    const Element = variantTags[variant]
    return (
        <Element
            {...props}
            className={cn(`uppercase text-base-8`, variantClasses[variant], michroma.className, className)}
        >
            {children}
        </Element>
    )
}

export default Heading
