import React, { ComponentProps, FC } from 'react'

const Plus: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M2.33203 12.9997H23.6654M12.9987 2.33301V23.6663"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Plus
