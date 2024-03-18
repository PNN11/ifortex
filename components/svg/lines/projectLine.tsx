import React, { ComponentProps, FC } from 'react'

const ProjectLine: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="217" height="31" viewBox="0 0 217 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M217 30H149.5L122 2.5H3" stroke="url(#paint0_linear_536_98174)" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 4)" fill="#318074" />
            <defs>
                <linearGradient
                    id="paint0_linear_536_98174"
                    x1="3.02461"
                    y1="2.4634"
                    x2="11.6104"
                    y2="68.1523"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#294E48" />
                    <stop offset="1" stopColor="#727272" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default ProjectLine
