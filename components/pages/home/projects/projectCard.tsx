import { Icons } from '@/components/svg'
import ConditionalLink from '@/components/ui/conditionalLink'
import Heading from '@/components/ui/typography/heading'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import ExploreCaseButton from './exploreCaseButton'
import ProjectTagsList from './tagsList'
import { Project } from './types'

type ProjectCardProps = Project

const ProjectCard: FC<ProjectCardProps> = ({ image, tags, title, href }) => {
    const { t } = useTranslation()

    return (
        <ConditionalLink
            href={`/cases/${href}`}
            condition={!!href}
            className="group flex cursor-pointer flex-col gap-3"
        >
            {/* <ProjectTagsList tags={tags} /> */}
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

                <ExploreCaseButton className="hidden group-hover:flex">
                    {t('homepage:projects.explore-case')}
                </ExploreCaseButton>
            </div>
        </ConditionalLink>
    )
}

export default ProjectCard
