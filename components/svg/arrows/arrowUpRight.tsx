import { WithClassName } from '@/types/common'
import React, { FC } from 'react'

const ArrowUpRight: FC<WithClassName> = ({ className = '' }) => {
    return (
        <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M17.5 42.5L42.5 17.5M42.5 17.5H20M42.5 17.5V40"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ArrowUpRight
