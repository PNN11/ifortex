import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'

type ContainerProps = ComponentProps<'div'>

const Container: FC<ContainerProps> = ({ className = '', children, ...props }) => {
    return (
        <div className={cn(`mx-auto max-w-341.75 px-6 sm:px-7.5 lg:px-11 xl:px-11.5 ${className}`)} {...props}>
            {children}
        </div>
    )
}

export default Container
