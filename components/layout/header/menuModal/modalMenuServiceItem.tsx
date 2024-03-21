import { Icons } from '@/components/svg'
import Accordion from '@/components/ui/accordion'
import Button from '@/components/ui/buttons/defaultButton'
import { usePathname } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'
import ServiceMenu from '../service/serviceMenu'
import { useWindowSize } from '@/hooks/useWindowSize'

type ModalMenuServiceItemProps = {
    onClick?: () => void
    isActiveSubmenu: boolean
}

const ModalMenuServiceItem: FC<ModalMenuServiceItemProps> = ({ onClick, isActiveSubmenu }) => {
    const { width } = useWindowSize()
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (width >= 1024) setOpen(false)
    }, [width])

    return (
        <>
            <Button
                size="m"
                withIcon
                variant="without-border"
                color="secondary"
                className={`w-full ${pathname.includes('services') ? 'text-base-1' : 'text-base-13'}`}
                Icon={Icons.Arrows.Chevron}
                iconClassName={`text-base-1 -rotate-90 ${isActiveSubmenu ? 'lg:rotate-0' : 'lg:rotate-180'}`}
                onClick={() => {
                    width >= 1024 ? onClick?.() : setOpen(prev => !prev)
                }}
            >
                Service
            </Button>
            <Accordion open={open}>
                <ServiceMenu />
            </Accordion>
        </>
    )
}

export default ModalMenuServiceItem
