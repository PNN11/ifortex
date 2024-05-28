'use client'
import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import Link from 'next/link'
import { FC, useState } from 'react'
import { ProjectCategory, projectCategories, projectsList } from './data'
import ProjectCard from './projectCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import { useTranslation } from 'react-i18next'

const ProjectCategoryItem: FC<{
    isActive: boolean
    onClick: (value: ProjectCategory) => void
    category: ProjectCategory
    title: string
}> = ({ isActive, onClick, category, title }) => (
    <button type="button" onClick={() => onClick(category)}>
        <Paragraph variant="alt" className={`uppercase hover:text-base-4 ${isActive ? 'text-base-1' : 'text-base-17'}`}>
            {title}
        </Paragraph>
    </button>
)

const Projects: FC = () => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>(projectCategories[0].value)
    const { width } = useWindowSize()
    const { t, i18n } = useTranslation()

    const projects =
        activeCategory === 'all'
            ? projectsList[i18n.language]
            : projectsList[i18n.language].filter(project => project.category === activeCategory)

    return (
        <section className="py-21.5">
            <Container>
                <div className="mb-21.5 flex flex-col items-start justify-between gap-5.5 sm:gap-8.25 lg:flex-row">
                    <Heading variant="h2" className="whitespace-nowrap">
                        {t('homepage:projects.title')}
                    </Heading>
                    <Paragraph variant="p1" className="lg:max-w-114.5 xl:max-w-209.5">
                        {t('homepage:projects.description')}
                    </Paragraph>
                </div>
                <ul className="mb-16 hidden flex-wrap gap-x-13.75 gap-y-2.5 md:flex">
                    {projectCategories.map(category => (
                        <li key={category.value}>
                            <ProjectCategoryItem
                                category={category.value}
                                isActive={activeCategory === category.value}
                                onClick={setActiveCategory}
                                title={t(category.title)}
                            />
                        </li>
                    ))}
                </ul>
                <Swiper slidesPerView="auto" className="mb-10 md:!hidden" spaceBetween={55}>
                    {projectCategories.map(category => (
                        <SwiperSlide key={category.value} className="!w-fit">
                            <ProjectCategoryItem
                                category={category.value}
                                isActive={activeCategory === category.value}
                                onClick={setActiveCategory}
                                title={t(category.title)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <ul className="grid gap-x-11.5 gap-y-8 lg:grid-cols-2 xl:gap-y-16">
                    {projects.map(project => (
                        <li key={`${project.title}${project.category}`}>
                            <ProjectCard {...project} />
                        </li>
                    ))}
                    <li className="self-end lg:col-start-2">
                        <Link href="/cases" className="block">
                            <Button
                                size={width >= ScreenWidths.XL ? 'm' : 's'}
                                variant="outlined"
                                withIcon
                                className="w-full"
                            >
                                {t('homepage:projects.more-projects')}
                            </Button>
                        </Link>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default Projects
