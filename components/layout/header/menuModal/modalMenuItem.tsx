import React, { FC } from 'react'
import { MenuItemProps, defaultIsActiveFunc } from '../menuItem'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/buttons/defaultButton'

const ModalMenuItem: FC<MenuItemProps> = ({ href, title, isActive = defaultIsActiveFunc }) => {
    const pathname = usePathname()

    return (
        <Link className={`w-full`} href={href}>
            <Button
                size="m"
                withIcon
                variant="without-border"
                color="secondary"
                className={`w-full ${isActive?.(pathname, href) ? 'text-base-1' : 'text-base-13'}`}
            >
                {title}
            </Button>
        </Link>
    )
}

export default ModalMenuItem
