'use client'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import IconWithLinesWrapper from '@/components/ui/wrappers/iconWithLinesWrapper'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from '../../home/projects/types'
import ProjectTagsList from '../../home/projects/tagsList'
import ExploreCaseButton from '../../home/projects/exploreCaseButton'
import Link from 'next/link'
import ConditionalLink from '@/components/ui/conditionalLink'

type CaseContactUsProps = {
    nextProject: Project
}

const CaseContactUs: FC<CaseContactUsProps> = ({ nextProject }) => {
    const { t } = useTranslation()

    const title = t('cases:case-contact.title')

    return (
        <section className="overflow-hidden py-10 md:py-15 2xl:py-20">
            <Container>
                <div className="mb-7.5 w-full overflow-hidden md:mb-15">
                    <Icons.Lines.CaseRectangleWithLines className="text-white/65" />
                </div>
                <div className="mb-7.5 grid grid-cols-1 items-center gap-5 md:mb-15 xl:mb-12 xl:grid-cols-2 xl:gap-0.75 3xl:mb-15">
                    <Heading variant="h1" tag="h3" className="max-w-157">
                        {title.split(' ').slice(0, 1).join(' ')} <br /> {title.split(' ').slice(1, -1).join(' ')}{' '}
                        <span className="text-base-1">{title.split(' ').slice(-1)}</span>
                    </Heading>
                    <div className="w-fit py-3 sm:py-3.5 md:py-6 xl:self-end">
                        <Icons.Lines.ProjectLine className="mb-3.75 ml-auto w-26.75 sm:mb-4.25 sm:w-30.75 md:mb-7.5 md:w-auto" />
                        <div className="relative mb-5 w-fit sm:mb-6 md:mb-10.25">
                            <Image src="/images/cases/case_contacts_bg.svg" width={629} height={238} alt="" />
                            <Icons.Arrows.ArrowUpRight
                                className="absolute right-3.5 top-2.5 h-14.5 w-14.5 text-base-5 sm:right-4
                                 sm:top-3 sm:h-16.5 sm:w-16.5 md:right-7.25 md:top-5.25 md:h-29 md:w-29"
                            />
                            <p
                                className="absolute bottom-6.75 left-5.25 text-base uppercase leading-[1.15] text-base-8 sm:bottom-7.75
                                   sm:left-6 sm:text-lg md:bottom-13.5 md:left-11 md:text-6xl lg:bottom-12.5 lg:text-6.5xl 2xl:bottom-11.25 2xl:text-8xl"
                            >
                                {t('cases:case-contact.contact-us')}
                            </p>
                        </div>
                        <Icons.Lines.ProjectLine className="w-26.75 rotate-y-180 sm:w-30.75 md:w-auto" />
                    </div>
                </div>
                <div className="mb-8 grid grid-cols-1 items-center gap-5.25 overflow-hidden sm:grid-cols-[25.6875rem_calc(100%-25.6875rem)] md:mb-15 xl:mb-12 3xl:mb-15">
                    <Heading variant="h4">{t('cases:case-contact.more-projects')}</Heading>

                    <Icons.Lines.CaseRectangleWithLines className="hidden text-white/65 sm:block" />
                </div>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <Image
                        src={nextProject.image}
                        width={607}
                        height={320}
                        alt={nextProject.title}
                        className="order-1 h-80 w-full object-cover object-top service-clip-[1.875rem] md:object-left-top lg:order-none lg:h-70"
                    />

                    <div className="contents flex-col justify-between lg:flex">
                        <div>
                            {/* <ProjectTagsList classes={{ wrapper: 'mb-6.25' }} tags={nextProject.tags} /> */}
                            <Heading variant="h3" className="relative mb-3 pb-15.5 lg:pb-3.5 xl:pb-10">
                                {nextProject.title}
                                <Icons.Lines.ProjectLine className="absolute left-96.5 rotate-y-180" />
                            </Heading>
                        </div>
                        <div className="relative order-2 flex justify-end pb-3.5 pt-5 lg:order-none lg:justify-start lg:pb-0 lg:pt-0">
                            <ConditionalLink
                                className="w-full sm:w-fit"
                                condition={!!nextProject?.href}
                                href={`/cases/${nextProject.href}`}
                            >
                                <ExploreCaseButton
                                    classes={{ icon: 'hidden sm:block', button: 'md:w-61.25 text-start' }}
                                    className="w-full justify-between sm:w-fit sm:justify-start"
                                >
                                    {t('cases:case-contact.next-case')}
                                </ExploreCaseButton>
                            </ConditionalLink>
                            <Icons.Lines.ProjectLine className="absolute left-0 top-11 lg:hidden" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CaseContactUs
