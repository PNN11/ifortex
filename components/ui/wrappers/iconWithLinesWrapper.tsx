'use client'
import { cn } from '@/lib/classNames'
import React, { ComponentProps, FC, ReactNode } from 'react'
import useResizeObserver from 'use-resize-observer'

type IconWithLinesWrapperProps = {
    Icon: FC<ComponentProps<'svg'>>
    children?: ReactNode
    iconProps?: ComponentProps<'svg'>
    className?: string
}

const IconWithLinesWrapper: FC<IconWithLinesWrapperProps> = ({ Icon, children, className = '', iconProps }) => {
    const { ref, height = 0, width = 0 } = useResizeObserver()

    return (
        <div ref={ref} className={cn('relative', className)}>
            <Icon width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...iconProps} />
            {children}
        </div>
    )
}

export default IconWithLinesWrapper
