import React, { ComponentProps, FC } from 'react'

const MapPin: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M24.2969 20.4997C25.7794 21.2027 26.6673 22.1915 26.6673 23.1663C26.6673 25.4271 21.8917 27.1663 16.0007 27.1663C10.1096 27.1663 5.33398 25.4271 5.33398 23.1663C5.33398 22.1915 6.22193 21.2027 7.70435 20.4997M16.0007 13.833C18.2098 13.833 20.0007 12.0421 20.0007 9.83301C20.0007 7.62387 18.2098 5.83301 16.0007 5.83301C13.7915 5.83301 12.0007 7.62387 12.0007 9.83301C12.0007 12.0421 13.7915 13.833 16.0007 13.833ZM16.0007 13.833V21.833"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default MapPin
