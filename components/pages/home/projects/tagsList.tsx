import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import React, { FC } from 'react'

type ProjectTagsListProps = {
    tags: string[]
    classes?: { wrapper?: string; listItem?: string }
}

const ProjectTagsList: FC<ProjectTagsListProps> = ({ tags, classes }) => {
    return (
        <ul className={cn('flex flex-wrap gap-x-6.5', classes?.wrapper)}>
            {tags.map(tag => (
                <li key={tag}>
                    <Paragraph variant="tag" className={cn('text-base-4 hover:text-base-5', classes?.listItem)}>
                        .{tag}
                    </Paragraph>
                </li>
            ))}
        </ul>
    )
}

export default ProjectTagsList
