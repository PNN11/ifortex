'use client'
import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import Link from 'next/link'
import { FC, useState } from 'react'
import { ProjectCategory, projectCategories, projectsMock } from './data'
import ProjectCard from './projectCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'

const ProjectCategoryItem: FC<{
    isActive: boolean
    onClick: (value: ProjectCategory) => void
    category: ProjectCategory
}> = ({ isActive, onClick, category }) => (
    <button type="button" onClick={() => onClick(category)}>
        <Paragraph variant="alt" className={`uppercase hover:text-base-4 ${isActive ? 'text-base-1' : 'text-base-17'}`}>
            {category}
        </Paragraph>
    </button>
)

const Projects: FC = () => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>(projectCategories[0])
    const [projects] = useState(projectsMock[activeCategory])
    const { width } = useWindowSize()
    return (
        <section className="py-21.5">
            <Container>
                <div className="mb-21.5 flex flex-col items-start justify-between gap-5.5 sm:gap-8.25 lg:flex-row">
                    <Heading variant="h2" className="whitespace-nowrap">
                        Projects
                    </Heading>
                    <Paragraph variant="p1" className="lg:max-w-114.5 xl:max-w-209.5">
                        At iFortex, we understand that building a website or app can be a daunting task. That`s why we
                        take a personalized approach to every project, working closely with our clients to ensure their
                        needs and goals are met. With our comprehensive services, you can focus on growing your business
                        while we handle the technical details.
                    </Paragraph>
                </div>
                <ul className="mb-16 hidden flex-wrap gap-x-13.75 gap-y-2.5 md:flex">
                    {projectCategories.map(category => (
                        <li key={category}>
                            <ProjectCategoryItem
                                category={category}
                                isActive={activeCategory === category}
                                onClick={setActiveCategory}
                            />
                        </li>
                    ))}
                </ul>
                <Swiper slidesPerView="auto" className="mb-10 md:!hidden" spaceBetween={55}>
                    {projectCategories.map(category => (
                        <SwiperSlide key={category} className="!w-fit">
                            <ProjectCategoryItem
                                category={category}
                                isActive={activeCategory === category}
                                onClick={setActiveCategory}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <ul className="grid gap-x-11.5 gap-y-8 lg:grid-cols-2 xl:gap-y-16">
                    {projects.map(({ image, tags, title, href }) => (
                        <li key={`${title}${tags.join(' ')}`}>
                            <ProjectCard image={image} tags={tags} title={title} href={href} />
                        </li>
                    ))}
                    <li className="lg:col-start-2">
                        <Link href="/cases" className="block">
                            <Button
                                size={width >= ScreenWidths.XL ? 'm' : 's'}
                                variant="outlined"
                                withIcon
                                className="w-full"
                            >
                                More projects
                            </Button>
                        </Link>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default Projects
