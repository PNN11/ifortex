import React, { ComponentProps, FC } from 'react'

const Chevron: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M37.5 15L22.5 30L37.5 45"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Chevron
