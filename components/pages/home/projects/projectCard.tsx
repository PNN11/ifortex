import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ExploreCaseButton from './exploreCaseButton'
import { Project } from './types'
import ConditionalLink from '@/components/ui/conditionalLink'

type ProjectCardProps = Project

const ProjectCard: FC<ProjectCardProps> = ({ image, tags, title, href }) => {
    return (
        <ConditionalLink href={href} condition={!!href} className="group flex cursor-pointer flex-col gap-3">
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
            <Image
                src={image}
                width={607}
                height={320}
                alt={title}
                quality={100}
                className="w-full transition-all duration-300 group-hover:-translate-y-3"
            />
            <div
                className={`flex h-20.25 items-end justify-center pb-2.5 group-hover:relative group-hover:justify-end`}
            >
                <Icons.Lines.ProjectLine className={`group-hover:absolute group-hover:left-0`} />

                <ExploreCaseButton className="hidden group-hover:flex">explore case</ExploreCaseButton>
            </div>
        </ConditionalLink>
    )
}

export default ProjectCard
