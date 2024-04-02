import Link from 'next/link'
import { FC } from 'react'
import { socials } from './data'

const SocialIcons: FC = () => {
    return (
        <ul className="flex items-center gap-4.75">
            {socials.map(({ Icon, href }) => (
                <li key={href}>
                    <Link href={href} target="_blank">
                        <Icon className="text-base-1" />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SocialIcons
