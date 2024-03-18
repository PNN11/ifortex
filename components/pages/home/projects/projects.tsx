'use client'
import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import Link from 'next/link'
import { FC, useState } from 'react'
import { ProjectCategory, projectCategories, projectsMock } from './data'
import ProjectCard from './projectCard'

const Projects: FC = () => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>(projectCategories[0])
    const [projects] = useState(projectsMock[activeCategory])
    return (
        <section className="py-21.5">
            <Container>
                <div className="mb-21.5 flex items-start justify-between gap-14">
                    <Heading variant="h2" className="whitespace-nowrap">
                        Projects
                    </Heading>
                    <Paragraph variant="p1" className="max-w-209.5">
                        At iFortex, we understand that building a website or app can be a daunting task. That`s why we
                        take a personalized approach to every project, working closely with our clients to ensure their
                        needs and goals are met. With our comprehensive services, you can focus on growing your business
                        while we handle the technical details.
                    </Paragraph>
                </div>
                <ul className="gap-x-13.75 mb-16 flex flex-wrap gap-y-2.5">
                    {projectCategories.map(category => (
                        <li key={category}>
                            <button type="button" onClick={() => setActiveCategory(category)}>
                                <Paragraph
                                    variant="alt"
                                    className={`uppercase ${activeCategory === category ? '!text-base-1' : 'text-base-17'}`}
                                >
                                    {category}
                                </Paragraph>
                            </button>
                        </li>
                    ))}
                </ul>
                <ul className="grid grid-cols-2 gap-x-11.5 gap-y-16">
                    {projects.map(({ image, tags, title }) => (
                        <li key={`${title}${tags.join(' ')}`}>
                            <ProjectCard image={image} tags={tags} title={title} />
                        </li>
                    ))}
                </ul>
                <div className="flex justify-end">
                    <Link href="/cases">
                        <Button size="m" variant="outlined" withIcon>
                            More projects
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default Projects
