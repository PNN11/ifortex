import { Icons } from '@/components/svg'
import Accordion from '@/components/ui/accordion'
import Button from '@/components/ui/buttons/defaultButton'
import { usePathname } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'
import ServiceMenu from '../service/serviceMenu'
import { useWindowSize } from '@/hooks/useWindowSize'
import Heading from '@/components/ui/typography/heading'
import { cn } from '@/lib/classNames'
import { useTranslation } from 'react-i18next'

type ModalMenuServiceItemProps = {
    onClick?: () => void
    isActiveSubmenu: boolean
}

const ModalMenuServiceItem: FC<ModalMenuServiceItemProps> = ({ onClick, isActiveSubmenu }) => {
    const { width } = useWindowSize()
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const { t } = useTranslation()

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
                className={`group w-full hover:text-base-2 ${pathname.includes('service') ? 'text-base-1' : 'text-base-13'}`}
                Icon={Icons.Arrows.Chevron}
                iconClassName={`text-base-1 group-hover:text-base-2 -rotate-90 ${isActiveSubmenu ? 'lg:rotate-0' : 'lg:rotate-180'}`}
                onClick={() => {
                    width >= 1024 ? onClick?.() : setOpen(prev => !prev)
                }}
            >
                <Heading
                    className={cn(
                        'text-base-13 group-hover:text-base-2',
                        pathname.includes('service') ? 'text-base-1' : 'text-base-13'
                    )}
                    variant="h3"
                >
                    {t('common:header.menu-items.service')}
                </Heading>
            </Button>
            <Accordion open={open}>
                <ServiceMenu />
            </Accordion>
        </>
    )
}

export default ModalMenuServiceItem
