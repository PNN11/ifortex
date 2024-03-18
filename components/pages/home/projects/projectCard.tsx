import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import React, { FC } from 'react'
import Image from 'next/image'
import { Project } from './types'

type ProjectCardProps = Project

const ProjectCard: FC<ProjectCardProps> = ({ image, tags, title }) => {
    return (
        <div className="flex flex-col gap-3">
            <ul className="gap-x-6.5 flex flex-wrap">
                {tags.map(tag => (
                    <li key={tag}>
                        <Paragraph variant="tag" className="!text-base-4">
                            .{tag}
                        </Paragraph>
                    </li>
                ))}
            </ul>
            <div className="relative pb-10 pt-3.5">
                <Heading variant="h3">{title}</Heading>
                <Icons.Lines.ProjectLine className="rotate-y-180 absolute right-0 top-15" />
            </div>
            <Image src={image} width={607} height={320} alt={title} quality={100} />
            <div className="flex justify-center pb-2.5 pt-10">
                <Icons.Lines.ProjectLine className="" />
            </div>
        </div>
    )
}

export default ProjectCard
