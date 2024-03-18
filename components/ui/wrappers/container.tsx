import React, { ComponentProps, FC } from 'react'

type ContainerProps = ComponentProps<'div'>

const Container: FC<ContainerProps> = ({ className = '', children, ...props }) => {
    return (
        <div className={`max-w-341.75 mx-auto px-11.5 ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Container
