import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { gilroy } from '@/fonts'
import { formatNumber } from '@/lib/formatNumber'
import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export type ServiceLink = (typeof services)[number]['href']

export const services = [
    { href: 'web-development', title: 'common:services.web-development', orderClass: '2xl:order-1' },
    { href: 'mobile-development', title: 'common:services.mobile-development', orderClass: '2xl:order-4 3xl:order-5' },
    {
        href: 'custom-software-development',
        title: 'common:services.custom-software-development',
        orderClass: '2xl:order-7 3xl:order-9',
    },
    { href: 'cloud-development', title: 'common:services.cloud-development', orderClass: '2xl:order-10 3xl:order-2' },
    { href: 'networking', title: 'common:services.networking', orderClass: '2xl:order-2 3xl:order-6' },
    { href: 'dedicated-team', title: 'common:services.dedicated-team', orderClass: '2xl:order-5 3xl:order-10' },

    {
        href: 'ui-ux-design',
        title: 'common:services.ui-ux-design',
        orderClass: '2xl:order-8 3xl:order-3',
    },
    {
        href: 'software-testing',
        title: 'common:services.software-testing',
        orderClass: '2xl:order-11 3xl:order-7',
    },
    { href: 'business-analysis', title: 'common:services.business-analysis', orderClass: '2xl:order-3 3xl:order-11' },
    { href: 'devops', title: 'common:services.devops', orderClass: '2xl:order-6 3xl:order-4' },
    { href: 'machine-learning', title: 'common:services.machine-learning', orderClass: '2xl:order-9 3xl:order-8' },
    { href: 'data-science', title: 'common:services.data-science', orderClass: '2xl:order-12' },
] as const

const ServiceMenu: FC = () => {
    const { t } = useTranslation()
    const expertise = t('common:service-modal.expertices', { returnObjects: true }) as {
        title: string
        description: string
    }[]

    return (
        <div>
            <div className="hidden flex-col gap-18 lg:mb-13.5 lg:flex xl:mb-17 2xl:mb-11 2xl:flex-row 2xl:gap-21.5 3xl:mb-15.5">
                <Heading variant="h2" className="">
                    {t('common:header.menu-items.service')}
                </Heading>
                <Image src="/images/home/review_line.svg" width={468} height={29} alt="line" quality={100} />
            </div>
            <ul
                className={`${gilroy.className} menu-accordion mb-22 mt-5.5 grid max-h-96 grid-cols-1 flex-col gap-x-4.5 gap-y-5 overflow-auto lg:mt-0 lg:max-h-full 
                  2xl:grid-cols-3 2xl:gap-x-4 3xl:grid-cols-4`}
            >
                {services.map(({ href, title, orderClass }, index) => (
                    <li key={href} className={`flex items-center gap-12 2xl:gap-9 3xl:gap-12 ${orderClass}`}>
                        <Paragraph variant="alt" className="w-7.5 text-base-4">
                            {formatNumber(index + 1, { minimumIntegerDigits: 2 })}
                        </Paragraph>
                        <Link href={`/service/${href}`}>
                            <Paragraph variant="p2" className="leading-snug tracking-[0.0625rem] text-base-6">
                                {t(title)}
                            </Paragraph>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mb-18.75 hidden items-center gap-13.5 2xl:flex">
                <Icons.Lines.Hypotenuse className="text-base-1/65" />
                <Heading variant="h3">{t('common:expertise')}</Heading>
                <Image src="/images/home/review_line.svg" width={468} height={29} alt="line" quality={100} />
            </div>
            <ul className="hidden flex-wrap gap-x-13.5 gap-y-5.5 2xl:flex">
                {expertise.map(({ description, title }) => (
                    <li key={title} className="grid w-100 grid-flow-col gap-4">
                        <Icons.Lines.ExpertiseVector className="text-base-4" />
                        <div className="flex  flex-col gap-4.5 overflow-hidden">
                            <Heading className="text-white" variant="h4">
                                {title}
                            </Heading>
                            <p className={`text-xs leading-normal tracking-p text-white ${gilroy.className}`}>
                                {description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServiceMenu
