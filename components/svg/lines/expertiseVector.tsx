import { WithClassName } from '@/types/common'
import React, { FC } from 'react'

const ExpertiseVector: FC<WithClassName> = ({ className = '' }) => {
    return (
        <svg
            width="22"
            height="108"
            viewBox="0 0 22 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M1 0V59L20.5 78.5L10.75 88.25L1 98V108" stroke="currentColor" />
        </svg>
    )
}

export default ExpertiseVector
