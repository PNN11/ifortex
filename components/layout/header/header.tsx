'use client'
import { Icons } from '@/components/svg'
import { gilroy } from '@/fonts'
import { useModal } from '@/hooks/useModal'
import { FC } from 'react'
import { menuItems } from './data'
import MenuItem from './menuItem'
import MenuModal from './menuModal'
import { useModalsStore } from '@/store/modalState'
import { cn } from '@/lib/classNames'

const Header: FC = () => {
    const modalsState = useModalsStore(s => s.modalsState)
    const isOpen = modalsState.menu
    const openModal = useModalsStore(s => s.openModal)
    const closeModal = useModalsStore(s => s.closeModal)

    const isOpenedAnyModal = Object.values(modalsState).some(Boolean)

    return (
        <header
            id="header"
            className={cn(
                `relative z-20 flex h-fit items-center justify-between border-b border-b-base-2 px-6 py-5.5
                 transition-colors duration-300 sm:px-7.5 md:py-8 lg:px-11 lg:py-9 xl:border-none xl:px-11.5 xl:py-10 2xl:py-11.5`,
                { 'bg-base-3': isOpenedAnyModal }
            )}
        >
            <Icons.IFortexLogo className="h-5.5 sm:h-6 md:h-7.25" />
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
                <button type="button" onClick={() => (isOpen ? closeModal('menu') : openModal('menu'))}>
                    {isOpen ? <Icons.Cross className="text-base-1" /> : <Icons.Burger className="text-base-1" />}
                </button>
            </nav>
            {isOpen && <MenuModal isOpen={isOpen} onClose={close} />}
        </header>
    )
}

export default Header
