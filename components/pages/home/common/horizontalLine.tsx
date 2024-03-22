import React, { ComponentProps, FC } from 'react'

const HorizontalLine: FC<ComponentProps<'div'>> = ({ className = '', ...props }) => {
    return <div className={`ml-auto h-px max-w-[108.6875rem] bg-base-12/30 ${className}`} {...props} />
}

export default HorizontalLine
