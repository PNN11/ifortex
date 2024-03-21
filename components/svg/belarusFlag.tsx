import React, { ComponentProps, FC } from 'react'

const BelarusFlag: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_576_10302)">
                <g clipPath="url(#clip1_576_10302)">
                    <rect y="0.5" width="22" height="16" rx="2" fill="#F93939" />
                    <path
                        d="M19.9048 0.5H2.09524C0.93807 0.5 0 1.45513 0 2.63333V14.3667C0 15.5449 0.93807 16.5 2.09524 16.5H19.9048C21.0619 16.5 22 15.5449 22 14.3667V2.63333C22 1.45513 21.0619 0.5 19.9048 0.5Z"
                        fill="#F93939"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.14286 0.5L5.2381 2.1L3.14286 3.7V0.5ZM3.14286 3.7L5.2381 5.3L3.14286 6.9V3.7ZM3.14286 6.9L5.2381 8.5L3.14286 10.1V6.9ZM3.14286 10.1L5.2381 11.7L3.14286 13.3V10.1ZM3.14286 13.3L5.2381 14.9L3.14286 16.5V13.3ZM2.09524 0.5L0 2.1L2.09524 3.7V0.5ZM2.09524 3.7L0 5.3L2.09524 6.9V3.7ZM2.09524 6.9L0 8.5L2.09524 10.1V6.9ZM2.09524 10.1L0 11.7L2.09524 13.3V10.1ZM2.09524 13.3L0 14.9L2.09524 16.5V13.3ZM2.09524 0.5H3.14286V2.63333H2.09524V0.5ZM2.09524 14.3667H3.14286V16.5H2.09524V14.3667ZM2.09524 5.83333H3.14286V7.96667H2.09524V5.83333ZM2.09524 3.7H3.14286V4.76667H2.09524V3.7ZM2.09524 12.2333H3.14286V13.3H2.09524V12.2333ZM2.09524 9.03333H3.14286V11.1667H2.09524V9.03333Z"
                        fill="white"
                    />
                    <path fillRule="evenodd" clipRule="evenodd" d="M5 12.5H22V16.5H5V12.5Z" fill="#249F58" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_576_10302">
                    <rect width="22" height="16" fill="white" transform="translate(0 0.5)" />
                </clipPath>
                <clipPath id="clip1_576_10302">
                    <rect y="0.5" width="22" height="16" rx="2" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default BelarusFlag
