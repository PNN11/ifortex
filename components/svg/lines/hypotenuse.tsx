import { WithClassName } from '@/types/common'
import React, { FC } from 'react'

const Hypotenuse: FC<WithClassName> = ({ className = '' }) => {
    return (
        <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M1 28.75L28.5 1.25" stroke="currentColor" />
        </svg>
    )
}

export default Hypotenuse
