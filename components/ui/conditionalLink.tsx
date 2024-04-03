import Link from 'next/link'
import { ComponentProps, FC } from 'react'
import { UrlObject } from 'url'

type ConditionalLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
    condition: boolean
    href?: string | UrlObject
}

const ConditionalLink: FC<ConditionalLinkProps> = ({ children, condition, href, ...props }) => {
    if (!condition || !href) return <span {...props}>{children}</span>

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    )
}

export default ConditionalLink
