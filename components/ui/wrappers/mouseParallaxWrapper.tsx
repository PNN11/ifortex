'use client'
import { ComponentProps, FC } from 'react'
import { MouseParallax } from 'react-just-parallax'

type MouseParallaxWrapperProps = ComponentProps<typeof MouseParallax>

const MouseParallaxWrapper: FC<MouseParallaxWrapperProps> = ({ children, ...props }) => {
    return <MouseParallax {...props}>{children}</MouseParallax>
}

export default MouseParallaxWrapper
