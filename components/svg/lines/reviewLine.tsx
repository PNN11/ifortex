import React, { ComponentProps, FC } from 'react'

const ReviewLine: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="82" height="499" viewBox="0 0 82 499" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1 0.75V257.077L81 337.184L1 417.292V498.75" stroke="currentColor" strokeWidth="0.6" />
        </svg>
    )
}

export default ReviewLine
