import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ExploreCaseButton from './exploreCaseButton'
import { Project } from './types'

type ProjectCardProps = Project

const ProjectCard: FC<ProjectCardProps> = ({ image, tags, title, href }) => {
    return (
        <div className="flex flex-col gap-3">
            <ul className="flex flex-wrap gap-x-6.5">
                {tags.map(tag => (
                    <li key={tag}>
                        <Paragraph variant="tag" className="text-base-4 hover:text-base-5">
                            .{tag}
                        </Paragraph>
                    </li>
                ))}
            </ul>
            <div className="relative pb-10 pt-3.5">
                <Heading variant="h3">{title}</Heading>
                <Icons.Lines.ProjectLine className="absolute right-0 top-15 rotate-y-180 lg:left-0 lg:right-auto lg:top-17.5 xl:left-auto xl:right-0 xl:top-15" />
            </div>
            <Image src={image} width={607} height={320} alt={title} quality={100} className="w-full" />
            <div className={`flex pb-2.5 pt-10 ${href ? 'relative justify-end' : 'justify-center'}`}>
                <Icons.Lines.ProjectLine className={`${href ? 'absolute left-0' : ''}`} />
                {href && (
                    <Link href={href}>
                        <ExploreCaseButton>explore case</ExploreCaseButton>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default ProjectCard
