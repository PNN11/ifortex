import React, { ComponentProps, FC } from 'react'

const ArrowRight: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M48 30.5H13M13 30.5L28 15.5M13 30.5L28 45.5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ArrowRight
