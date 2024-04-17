import { ComponentProps, FC } from 'react'

const Hypotenuse: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1 28.75L28.5 1.25" stroke="currentColor" />
        </svg>
    )
}

export default Hypotenuse
