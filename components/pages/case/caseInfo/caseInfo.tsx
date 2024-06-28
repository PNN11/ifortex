'use client'
import ExploreCaseButton from '@/components/pages/home/projects/exploreCaseButton'
import ProjectTagsList from '@/components/pages/home/projects/tagsList'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import IconWithLinesWrapper from '@/components/ui/wrappers/iconWithLinesWrapper'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CaseInfoItemDescription from './caseInfoItemDescription'
import CaseInfoItemTitle from './caseInfoItemTitle'
import Paragraph from '@/components/ui/typography/paragraph'
import Link from 'next/link'

type ListLabels =
    | 'brand'
    | 'location'
    | 'client'
    | 'budget'
    | 'industry'
    | 'environment'
    | 'release'
    | 'projectType'
    | 'team'
    | 'projectServices'

type DescriptionLabels = 'problem' | 'solution' | 'delivering'

type CaseInfoProps = {
    customer?: { avatar?: string; name: string; position: string }
    listItems: Partial<Record<ListLabels, string[]>>
    descriptionItems: Partial<Record<DescriptionLabels, string>>
    tags: string[]
    contact: { title?: string; description: string }
}

const CaseInfo: FC<CaseInfoProps> = ({ customer, listItems, descriptionItems, tags, contact }) => {
    const { t } = useTranslation()

    const _listItems = Object.entries(listItems).map(([key, value]) => ({
        title: t(`cases:${key}`),
        description: value,
    }))

    const _descriptionItems = Object.entries(descriptionItems).map(([key, value]) => ({
        title: t(`cases:${key}`),
        description: value,
    }))

    return (
        <SectionWrapper variant="s">
            <Container>
                <div className="mb-8 grid grid-cols-1 justify-between gap-16 lg:mb-15 lg:grid-cols-[18.75rem_minmax(0,52.375rem)] lg:gap-4">
                    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
                        {_listItems.map(({ description, title }) =>
                            description.length ? (
                                <li key={title}>
                                    <CaseInfoItemTitle className="mb-3">{title}</CaseInfoItemTitle>
                                    <ul className="flex flex-col gap-3">
                                        {description.map(item => (
                                            <li key={item}>
                                                <CaseInfoItemDescription className="text-base-22">
                                                    {item === 'NDA' ? (
                                                        <p className="flex items-center gap-2.5">
                                                            <span>{item}</span>
                                                            <Icons.Lines.NdaLines className="text-white/65" />
                                                        </p>
                                                    ) : (
                                                        item
                                                    )}
                                                </CaseInfoItemDescription>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : null
                        )}
                    </ul>
                    <div className="max-w-209.5">
                        <ul className="mb-12 space-y-12 md:mb-16.5 md:space-y-16.5">
                            {_descriptionItems.map(({ title, description }) =>
                                description.length ? (
                                    <li key={title}>
                                        <CaseInfoItemTitle className="mb-5.5 lg:mb-8.25">{title}</CaseInfoItemTitle>
                                        <CaseInfoItemDescription>{description}</CaseInfoItemDescription>
                                    </li>
                                ) : null
                            )}
                        </ul>
                        <ProjectTagsList tags={tags} />
                    </div>
                </div>
                <IconWithLinesWrapper
                    Icon={Icons.Lines.CaseRectangleWithLines}
                    iconProps={{ className: 'text-white/65' }}
                    className="mb-8 h-4 w-full lg:mb-15 lg:h-7.5"
                />
                <div className="grid grid-cols-1 justify-between gap-6 lg:grid-cols-[18.75rem_minmax(0,52.375rem)] lg:gap-4">
                    <div>
                        {customer && (
                            <>
                                <Image
                                    src={customer.avatar ?? '/images/cases/customer_avatar.png'}
                                    width={48}
                                    height={48}
                                    alt={customer.name}
                                    className="mb-4"
                                />
                                <p className="mb-1.5 text-1xl leading-10 text-base-8">{customer.name}</p>
                                <p className="text-base leading-5 tracking-alt text-base-23">{customer.position}</p>
                            </>
                        )}
                    </div>
                    <div>
                        <div className="mb-6 flex flex-col justify-between gap-6.5 md:flex-row md:items-end md:gap-1.5">
                            <div className="md:max-w-69 xl:max-w-82">
                                <Icons.Lines.ProjectLine className="mb-2.5 xl:mb-4" />
                                <Heading variant="h4">{contact.title ?? t('cases:same-idea')}</Heading>
                            </div>
                            <Link href="/contact">
                                <ExploreCaseButton
                                    classes={{ button: 'mr-2 sm:mr-4.5', icon: 'mr-4.5 sm:mr-7' }}
                                    className=""
                                >
                                    {t('cases:consultation')}
                                </ExploreCaseButton>
                            </Link>
                        </div>
                        <Paragraph variant="p1">{contact.description}</Paragraph>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default CaseInfo
