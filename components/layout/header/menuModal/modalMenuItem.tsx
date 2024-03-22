import React, { FC } from 'react'
import { MenuItemProps, defaultIsActiveFunc } from '../menuItem'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'

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
                <Heading variant="h3">{title}</Heading>
            </Button>
        </Link>
    )
}

export default ModalMenuItem
