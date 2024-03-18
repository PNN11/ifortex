import React, { ComponentProps, FC } from 'react'

const HorizontalLine: FC<ComponentProps<'div'>> = ({ className = '', ...props }) => {
    return <div className={`bg-base-12/30 ml-auto mr-45.25 h-px max-w-[108.6875rem] ${className}`} {...props} />
}

export default HorizontalLine
