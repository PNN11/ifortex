import { FC } from 'react'
import { MenuItemProps } from './menuItem'
import ServiceDropdown from './service/serviceDropdown'

type DropdownComponentProps = {
    onClick?: () => void
}

export type MenuItemType = Pick<MenuItemProps, 'isActive'> & { title: string } & (
        | { href: string; type: 'link' }
        | {
              type: 'dropdown'
              Component: FC<DropdownComponentProps>
              onClick?: DropdownComponentProps['onClick']
              category: string
          }
    )

export const menuItems: MenuItemType[] = [
    { href: '/', title: 'common:header.menu-items.home', type: 'link', isActive: (path, href) => path === href },
    { type: 'dropdown', title: 'common:header.menu-items.service', Component: ServiceDropdown, category: 'service' },
    { href: '/contact', title: 'common:header.menu-items.contact', type: 'link' },
    { href: '/cases', title: 'common:header.menu-items.cases', type: 'link' },

    { href: '/career', title: 'common:header.menu-items.career', type: 'link' },
]
