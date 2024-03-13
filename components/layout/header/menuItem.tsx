'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

export type MenuItemProps = {
    title: string
    href: string
    isActive?: (path: string, href: string) => boolean
}

const defaultIsActiveFunc: MenuItemProps['isActive'] = (path, href) => path.includes(href)

const MenuItem: FC<MenuItemProps> = ({ href, title, isActive = defaultIsActiveFunc }) => {
    const pathname = usePathname()
    return (
        <Link
            className={`${isActive(pathname, href) ? 'text-base-1' : 'text-base-7'} inline-block text-2xl font-light leading-none tracking-[0.044375rem]`}
            href={href}
        >
            {title}
        </Link>
    )
}

export default MenuItem
