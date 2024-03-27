import { ModalOverlay } from '@/components/modals/overlay'
import useClickOutside from '@/hooks/useClickOutside'
import { FC, useEffect, useRef, useState } from 'react'
import { menuItems } from '../data'
import ModalMenuItem from './modalMenuItem'
import ModalMenuServiceItem from './modalMenuServiceItem'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Button from '@/components/ui/buttons/defaultButton'
import Link from 'next/link'
import ServiceMenu from '../service/serviceMenu'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import useCallbackAfterRouteChange from '@/hooks/useCallbackAfterRouteChange'

type MenuModalProps = {
    isOpen: boolean
    onClose: () => void
}

const subMenusMap = new Map<string, FC>([['service', ServiceMenu]])

const modalMenuItems = menuItems.map(item =>
    item.title === 'Service' ? { ...item, Component: ModalMenuServiceItem } : item
)

const MenuModal: FC<MenuModalProps> = ({ isOpen, onClose }) => {
    const [activeSubmenu, setActiveSubmenu] = useState<string>('')
    const ref = useRef<HTMLDivElement>(null)

    const { width } = useWindowSize()

    const ActiveSubMenuComponent = subMenusMap.get(activeSubmenu)

    useCallbackAfterRouteChange(onClose)

    useClickOutside({ ref, callback: onClose, enabled: isOpen })

    return (
        <ModalOverlay isOpen={isOpen} onClose={onClose} className="items-start p-0">
            <div className="flex w-full border-t border-base-1 bg-base-3/90 pt-28 xl:border-none" ref={ref}>
                <div className="w-full px-7.5 pb-12 pt-11.25 lg:w-fit lg:border-r lg:border-r-base-2 lg:pl-0 lg:pr-11.5 xl:pr-21 2xl:pr-26">
                    <div className="mb-10 hidden flex-row-reverse items-center justify-end gap-13.5 pl-11.5 lg:flex xl:flex-row xl:justify-start">
                        <Icons.Lines.Hypotenuse className="text-base-1/65" />
                        <Heading variant="h3">Menu</Heading>
                    </div>
                    <div className="lg:pl-10.5 xl:pl-31.75">
                        <ul className="mb-20 flex flex-col gap-7 md:mb-37 lg:mb-47.75 3xl:mb-18">
                            {modalMenuItems.map(item => (
                                <li key={item.title} className="lg:w-109.25 2xl:w-129.5">
                                    {item.type === 'link' ? (
                                        <ModalMenuItem href={item.href} title={item.title} isActive={item.isActive} />
                                    ) : (
                                        <item.Component
                                            onClick={() => {
                                                activeSubmenu === item.title.toLowerCase()
                                                    ? setActiveSubmenu('')
                                                    : setActiveSubmenu(item.title.toLowerCase())
                                            }}
                                            isActiveSubmenu={activeSubmenu === item.title.toLowerCase()}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact">
                            <Button
                                variant="contained"
                                size={`${width >= ScreenWidths.M ? 'm' : 's'}`}
                                withIcon
                                className="w-full"
                            >
                                Contact us
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="hidden pl-21.5 pr-2.5 pt-11.25 lg:block xl:pl-26.75 2xl:pl-22 3xl:pl-31.75">
                    {activeSubmenu && ActiveSubMenuComponent && <ActiveSubMenuComponent />}
                </div>
            </div>
        </ModalOverlay>
    )
}

export default MenuModal
