import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { gilroy } from '@/fonts'
import { formatNumber } from '@/lib/formatNumber'
import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'

export type ServiceLink = (typeof services)[number]['href']

const services = [
    { href: 'web-development', title: 'Web development' },
    { href: 'mobile-development', title: 'Mobile development' },
    { href: 'custom-software-development', title: 'Custom software development' },
    { href: 'cloud-development', title: 'Cloud development' },
    { href: 'networking', title: 'Networking' },
    { href: 'dedicated-team', title: 'Dedicated team' },

    {
        href: 'ui-ux-design',
        title: (
            <>
                UI <span className="text-base-2">/</span> UX design
            </>
        ),
    },
    {
        href: 'software-testing',
        title: (
            <>
                Software Testing <span className="text-base-2">&</span> QA
            </>
        ),
    },
    { href: 'business-analysis', title: 'Business analysis' },
    { href: 'devops', title: 'DevOps' },
    { href: 'machine-learning', title: 'Machine learning' },
    { href: 'data-science', title: 'Data science' },
] as const

const expertise = [
    {
        title: 'Fintech',
        description:
            'Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management',
    },
    {
        title: 'E-commerce',
        description:
            "Boost your sales with a custom e-commerce solution. Our team can help you create an online store that's optimized for sales and easy to use",
    },
    {
        title: 'Logistics',
        description:
            'Streamline your logistics operations with custom software solutions. Our team can help you create an efficient and effective supply chain management system, from tracking shipments to managing inventory.',
    },
    {
        title: 'Healthcare',
        description:
            'Improve patient outcomes with innovative healthcare solutions. Our team has extensive experience in creating custom web and mobile applications for the healthcare industry, from electronic',
    },
    {
        title: 'Travel',
        description:
            'Transform the travel industry with cutting-edge digital solutions. Our team can help you create custom web and mobile applications for the travel industry, from booking systems to destination guides. Get ready to see your business soar',
    },
    {
        title: 'Edtech',
        description:
            'Empower students and teachers with custom education solutions. Our team can help you create digital learning tools, from online course platforms to educational games. Let us help you make a difference. Empower students and teachers with custom education solutions. Our team can help you create digital learning tools, from online course platforms to educational games. Let us help you make a difference in the world of education',
    },
]

const ServiceMenu: FC = () => {
    return (
        <div>
            <div className="hidden flex-col gap-18 lg:mb-13.5 lg:flex xl:mb-17 2xl:mb-11 2xl:flex-row 2xl:gap-21.5 3xl:mb-15.5">
                <Heading variant="h2" className="">
                    Service
                </Heading>
                <Image src="/images/home/review_line.svg" width={468} height={29} alt="line" quality={100} />
            </div>
            <ul
                className={`${gilroy.className} menu-accordion mb-22 mt-5.5 flex max-h-96 flex-col gap-x-4.5 gap-y-5 overflow-auto lg:mt-0 lg:max-h-full
                 lg:flex-wrap 2xl:max-h-60 2xl:gap-x-4 3xl:max-h-48`}
            >
                {services.map(({ href, title }, index) => (
                    <li key={href} className="flex max-w-100 items-center gap-12 2xl:gap-9 3xl:gap-12">
                        <Paragraph variant="alt" className="w-7.5 text-base-4">
                            {formatNumber(index + 1, { minimumIntegerDigits: 2 })}
                        </Paragraph>
                        <Link href={`/service/${href}`}>
                            <Paragraph variant="p2" className="leading-snug tracking-[0.0625rem] text-base-6">
                                {title}
                            </Paragraph>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mb-18.75 hidden items-center gap-13.5 2xl:flex">
                <Icons.Lines.Hypotenuse className="text-base-1/65" />
                <Heading variant="h3">Expertise</Heading>
                <Image src="/images/home/review_line.svg" width={468} height={29} alt="line" quality={100} />
            </div>
            <ul className="hidden flex-wrap gap-x-13.5 gap-y-5.5 2xl:flex">
                {expertise.map(({ description, title }) => (
                    <li key={title} className="grid w-100 grid-flow-col gap-4">
                        <Icons.Lines.ExpertiseVector className="text-base-4" />
                        <div className="flex max-h-26 flex-col gap-4.5 overflow-hidden">
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
