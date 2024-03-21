import React, { ComponentProps, FC } from 'react'

const Planet: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g style={{ mixBlendMode: 'lighten' }}>
                <rect width="96" height="96" rx="48" fill="url(#paint0_linear_202_1412)" fillOpacity="0.4" />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_202_1412"
                    x1="10.9091"
                    y1="22.9091"
                    x2="84"
                    y2="80.7273"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#48D9C2" />
                    <stop offset="1" stopColor="#343434" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default Planet
