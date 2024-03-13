import { WithClassName } from '@/types/common'
import React, { FC } from 'react'

const Burger: FC<WithClassName> = ({ className = '' }) => {
    return (
        <svg
            width="39"
            height="15"
            viewBox="0 0 39 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M0.879883 4H38.8799" stroke="currentColor" />
            <path d="M0.879883 11H38.8799" stroke="currentColor" />
        </svg>
    )
}

export default Burger
