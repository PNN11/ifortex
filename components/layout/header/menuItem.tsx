'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export type MenuItemProps = {
    title: string
    href: string
    isActive?: (path: string, href: string) => boolean
}

export const defaultIsActiveFunc: MenuItemProps['isActive'] = (path, href) => path.includes(href)

const MenuItem: FC<MenuItemProps> = ({ href, title, isActive = defaultIsActiveFunc }) => {
    const pathname = usePathname()
    const { t } = useTranslation()
    return (
        <Link
            className={`${isActive(pathname, href) ? 'text-base-1' : 'text-base-7'} inline-block text-2xl font-light leading-none tracking-[0.044375rem] hover:text-base-2`}
            href={href}
        >
            {t(title)}
        </Link>
    )
}

export default MenuItem
