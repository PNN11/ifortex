import { WithClassName } from '@/types/common'
import React, { FC } from 'react'

const ChevronDown: FC<WithClassName> = ({ className = '' }) => {
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M7.87988 10L12.8799 15L17.8799 10" stroke="currentColor" strokeWidth="1.1" />
        </svg>
    )
}

export default ChevronDown
