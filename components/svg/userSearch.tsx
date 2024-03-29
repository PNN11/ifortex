import React, { ComponentProps, FC } from 'react'

const UserSearch: FC<ComponentProps<'svg'>> = props => {
    return (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M5.33398 28.5C5.33398 23.3453 9.51266 19.1667 14.6673 19.1667C14.8915 19.1667 15.1138 19.1746 15.334 19.1901M26.0006 26.5L28.0006 28.5M20.0007 9.83333C20.0007 12.7789 17.6128 15.1667 14.6673 15.1667C11.7218 15.1667 9.33398 12.7789 9.33398 9.83333C9.33398 6.88781 11.7218 4.5 14.6673 4.5C17.6128 4.5 20.0007 6.88781 20.0007 9.83333ZM26.6673 23.8333C26.6673 25.6743 25.1749 27.1667 23.334 27.1667C21.493 27.1667 20.0007 25.6743 20.0007 23.8333C20.0007 21.9924 21.493 20.5 23.334 20.5C25.1749 20.5 26.6673 21.9924 26.6673 23.8333Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default UserSearch
