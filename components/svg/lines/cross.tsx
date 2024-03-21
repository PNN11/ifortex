import { ComponentProps, FC } from 'react'

const Cross: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1 11L39 18.5" stroke="currentColor" />
            <path d="M1 18L39 11.5" stroke="currentColor" />
        </svg>
    )
}

export default Cross
