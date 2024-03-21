'use client'
import { Icons } from '@/components/svg'
import React, { FC } from 'react'
import ServiceDropdown from './service/serviceDropdown'
import { gilroy } from '@/fonts'
import MenuItem, { MenuItemProps } from './menuItem'
import { menuItems } from './data'
import MenuModal from './menuModal'
import { useModal } from '@/hooks/useModal'

const Header: FC = () => {
    const [isOpen, open, close] = useModal()
    return (
        <header id="header" className="absolute inset-x-0 z-20 flex items-center justify-between p-11.5 pr-17.5">
            <Icons.IFortexLogo />
            <nav className={`${gilroy.className} flex items-center gap-37`}>
                <ul className="hidden items-center gap-8.5 xl:flex">
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
                <button type="button" onClick={() => (isOpen ? close() : open())}>
                    {isOpen ? <Icons.Cross className="text-base-1" /> : <Icons.Burger className="text-base-1" />}
                </button>
            </nav>
            {isOpen && <MenuModal isOpen={isOpen} onClose={close} />}
        </header>
    )
}

export default Header
