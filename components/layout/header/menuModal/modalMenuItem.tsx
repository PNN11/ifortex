import React, { FC } from 'react'
import { MenuItemProps, defaultIsActiveFunc } from '../menuItem'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'
import { cn } from '@/lib/classNames'
import { useTranslation } from 'react-i18next'

const ModalMenuItem: FC<MenuItemProps> = ({ href, title, isActive = defaultIsActiveFunc }) => {
    const pathname = usePathname()
    const { t } = useTranslation()

    return (
        <Link className={`group w-full`} href={href}>
            <Button
                size="m"
                withIcon
                variant="without-border"
                color="secondary"
                className={`w-full group-hover:text-base-2 ${isActive?.(pathname, href) ? 'text-base-1' : 'text-base-13'}`}
            >
                <Heading
                    className={cn(
                        'group-hover:text-base-2',
                        isActive?.(pathname, href) ? 'text-base-1' : 'text-base-13'
                    )}
                    variant="h3"
                >
                    {t(title)}
                </Heading>
            </Button>
        </Link>
    )
}

export default ModalMenuItem
