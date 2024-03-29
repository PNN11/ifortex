import React, { ComponentProps, FC } from 'react'

const Warning: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M8.94024 42.0004H39.0602C42.1403 42.0004 44.0602 38.6604 42.5202 36.0004L27.4602 9.98035C25.9202 7.32035 22.0802 7.32035 20.5402 9.98035L5.48024 36.0004C3.94024 38.6604 5.86024 42.0004 8.94024 42.0004ZM24.0002 28.0004C22.9002 28.0004 22.0002 27.1004 22.0002 26.0004V22.0004C22.0002 20.9004 22.9002 20.0004 24.0002 20.0004C25.1002 20.0004 26.0002 20.9004 26.0002 22.0004V26.0004C26.0002 27.1004 25.1002 28.0004 24.0002 28.0004ZM26.0002 36.0004H22.0002V32.0004H26.0002V36.0004Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default Warning
