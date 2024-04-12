import Paragraph from '@/components/ui/typography/paragraph'
import React, { FC } from 'react'

type ProjectTagsListProps = {
    tags: string[]
}

const ProjectTagsList: FC<ProjectTagsListProps> = ({ tags }) => {
    return (
        <ul className="flex flex-wrap gap-x-6.5">
            {tags.map(tag => (
                <li key={tag}>
                    <Paragraph variant="tag" className="text-base-4 hover:text-base-5">
                        .{tag}
                    </Paragraph>
                </li>
            ))}
        </ul>
    )
}

export default ProjectTagsList
