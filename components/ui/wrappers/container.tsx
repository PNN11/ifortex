import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC } from 'react'

type ContainerProps = ComponentProps<'div'> & {
    size?: 'm' | 'l'
}

const Container: FC<ContainerProps> = ({ className = '', children, size = 'm', ...props }) => {
    return (
        <div
            className={cn(
                `mx-auto`,
                { 'max-w-341.75 px-6 sm:px-7.5 lg:px-11 xl:px-11.5': size === 'm' },
                { 'xl:px-30.75 max-w-535 px-6 sm:px-7.5 lg:px-11 2xl:px-60': size === 'l' },
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default Container
