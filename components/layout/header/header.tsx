'use client'
import { Icons } from '@/components/svg'
import React, { FC } from 'react'
import ServiceDropdown from './service/serviceDropdown'
import { gilroy } from '@/fonts'
import MenuItem, { MenuItemProps } from './menuItem'
import openMenu from './menuModal'

type MenuItem = Pick<MenuItemProps, 'isActive'> & { title: string } & (
        | { href: string; type: 'link' }
        | { type: 'dropdown'; Component: FC }
    )

const menuItems: MenuItem[] = [
    { href: '/', title: 'Home', type: 'link', isActive: (path, href) => path === href },
    { type: 'dropdown', title: 'Service', Component: ServiceDropdown },
    { href: '/contact', title: 'Contact', type: 'link' },
    { href: '/cases', title: 'Cases', type: 'link' },
    { href: '/blog', title: 'Blog', type: 'link' },
    { href: '/career', title: 'Career', type: 'link' },
]

const Header: FC = () => {
    return (
        <header className="absolute inset-x-0 z-20 flex items-center justify-between p-11.5 pr-17.5">
            <Icons.IFortexLogo />
            <nav className={`${gilroy.className} flex items-center gap-37`}>
                <ul className="flex items-center gap-8.5">
                    {menuItems.map(item => (
                        <li key={item.title} className="h-6">
                            {item.type === 'link' ? (
                                <MenuItem href={item.href} title={item.title} isActive={item.isActive} />
                            ) : (
                                <item.Component />
                            )}
                        </li>
                    ))}
                </ul>
                <button type="button" onClick={() => openMenu({})}>
                    <Icons.Burger className="text-base-1" />
                </button>
            </nav>
        </header>
    )
}

export default Header
