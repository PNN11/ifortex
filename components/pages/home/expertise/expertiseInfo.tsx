import React, { FC, ReactNode, useEffect, useRef } from 'react'
import Image from 'next/image'
import Paragraph from '@/components/ui/typography/paragraph'
import { cn } from '@/lib/classNames'
import { useTranslation } from 'react-i18next'

const TechnologyItem: FC<{ title: string }> = ({ title }) => {
    return (
        <li className="flex items-center gap-13.5 sm:gap-24.5">
            <span className="h-2.5 w-2.5 bg-base-14" />
            <Paragraph variant="alt">{title}</Paragraph>
        </li>
    )
}

type ExpertiseInfoProps = {
    description: string
    listItems?: string[]
    classes?: { wrapper?: string; description?: string; descriptionWrapper?: string; list?: string; bg?: string }
    children?: ReactNode
}

const ExpertiseInfo: FC<ExpertiseInfoProps> = ({ description, listItems, classes, children }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { t } = useTranslation()

    useEffect(() => {
        ref.current?.animate({ opacity: [0, 1] }, 500)
    }, [listItems])

    return (
        <>
            <div
                ref={ref}
                className={cn(
                    'relative mb-16.5 flex flex-col gap-5.5 py-7.5 md:pb-19.25 lg:flex-row lg:items-start lg:gap-8.5 lg:pb-0 xl:gap-11',
                    classes?.wrapper
                )}
            >
                <div className={cn('flex items-start gap-8.5 xl:gap-11', classes?.descriptionWrapper)}>
                    <Image
                        src="/images/home/expertise_vector_2.svg"
                        width={66}
                        height={267}
                        alt="vector"
                        quality={100}
                        className="hidden w-8.5 sm:block lg:w-16.5"
                    />
                    <Paragraph className={cn('lg:max-w-102.5', classes?.description)} variant="p1">
                        {description}
                    </Paragraph>
                </div>
                {listItems && (
                    <ul className={cn('flex flex-col gap-5', classes?.list)}>
                        {listItems.map(item => (
                            <TechnologyItem key={item} title={item} />
                        ))}
                    </ul>
                )}
                <Image
                    src="/images/home/expertise_bg.svg"
                    width={444}
                    height={327}
                    alt="background"
                    quality={100}
                    className={cn(
                        'absolute bottom-0 right-0 hidden md:block lg:bottom-auto lg:left-[78%] lg:right-auto lg:top-23 xl:top-auto',
                        classes?.bg
                    )}
                />
            </div>
            {children}
        </>
    )
}

export default ExpertiseInfo
