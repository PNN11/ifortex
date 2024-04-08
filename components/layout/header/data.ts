import { FC } from 'react'
import { MenuItemProps } from './menuItem'
import ServiceDropdown from './service/serviceDropdown'

type DropdownComponentProps = {
    onClick?: () => void
}

export type MenuItemType = Pick<MenuItemProps, 'isActive'> & { title: string } & (
        | { href: string; type: 'link' }
        | { type: 'dropdown'; Component: FC<DropdownComponentProps>; onClick?: DropdownComponentProps['onClick'] }
    )

export const menuItems: MenuItemType[] = [
    { href: '/', title: 'Home', type: 'link', isActive: (path, href) => path === href },
    { type: 'dropdown', title: 'Service', Component: ServiceDropdown },
    { href: '/contact', title: 'Contact', type: 'link' },
    { href: '/cases', title: 'Cases', type: 'link' },

    { href: '/career', title: 'Career', type: 'link' },
]
