import Paragraph from '@/components/ui/typography/paragraph'
import { WithClassName } from '@/types/common'
import Link from 'next/link'
import React, { FC } from 'react'

type LinksGroupProps = WithClassName<{
    title: string
    links: { href: string; title: string }[]
    basePath?: string
}>

const LinksGroup: FC<LinksGroupProps> = ({ links, title, className = '', basePath }) => {
    return (
        <div className={className}>
            <Paragraph variant="p2" className="mb-12 leading-none !text-base-7">
                {title}
            </Paragraph>
            <ul className="flex flex-col gap-3">
                {links.map(({ href, title }) => (
                    <li key={title}>
                        <Link href={`${basePath ? basePath + '/' : ''}${href}`}>
                            <Paragraph variant="alt" className="font-medium text-base-19 hover:text-base-5">
                                {title}
                            </Paragraph>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LinksGroup
