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
    h1: 'text-6.5xl leading-10.35 lg:leading-13.8 lg:text-8.5xl 2xl:text-9xl 2xl:leading-15.5',
    h2: 'text-6xl leading-9.2 lg:text-6.5xl lg:leading-10.35 2xl:text-8xl 2xl:leading-11.5',
    h3: 'text-3xl leading-9.1 lg:text-5xl lg:leading-13.5 2xl:text-6xl 2xl:leading-14.4',
    h4: 'text-2xl leading-6.9 lg:text-3xl lg:leading-7.475 2xl:text-4xl 2xl:leading-8.05',
    accent: 'text-6xl leading-14.4 lg:text-6.5xl lg:leading-16.2 2xl:text-9xl 2xl:leading-24.3',
}

const Heading: FC<HeadingProps> = ({ variant, className = '', children, ...props }) => {
    const Element = variantTags[variant]
    return (
        <Element
            {...props}
            className={cn(`uppercase text-base-8 `, variantClasses[variant], michroma.className, className)}
        >
            {children}
        </Element>
    )
}

export default Heading
