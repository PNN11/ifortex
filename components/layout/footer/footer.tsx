import { Icons } from '@/components/svg'
import Paragraph from '@/components/ui/typography/paragraph'
import Link from 'next/link'
import React, { FC } from 'react'
import LinksGroup from './linksGroup'
import Input from '@/components/ui/inputs/defaultInput/input'
import { services, companyMenu, socials } from './data'

const Footer: FC = () => {
    return (
        <footer className="self-end px-6 pb-16 pt-10 sm:px-7.5 lg:px-11 xl:px-0">
            <div className="xl:grid-cols-footer grid grid-cols-1 justify-between gap-8 md:grid-cols-[minmax(max-content,36.4%),1fr] lg:grid-cols-[42%,1fr] xl:gap-0">
                <div className="flex flex-col xl:pl-11.5 xl:pr-2 2xl:px-21">
                    <Icons.IFortexLogo className="mb-12" />

                    <div className="flex grow flex-col items-start justify-between xl:items-center">
                        <div className="flex flex-col justify-between">
                            <div className="flex items-baseline gap-8.5">
                                <Icons.BelarusFlag className="translate-y-1" />
                                <Paragraph variant="p1" className="flex flex-col gap-1 text-base-4">
                                    <span className="text-base-6">Minsk, Belarus</span>
                                    <span>Internacionalnaya 25A</span>
                                    <a href="mailto:hello@ifortex.com">hello@ifortex.com</a>
                                    <a href="tel:+ 1 543 625 42 24">+ 1 543 625 42 24</a>
                                </Paragraph>
                            </div>
                        </div>
                        <Paragraph variant="footer-link" className="hidden text-center text-base-1 md:block">
                            ©️2024 iFORTEX
                        </Paragraph>
                    </div>
                </div>
                <div className="xl:pl-22 xl:pr-11.5 2xl:px-36.25">
                    <div className="2xl:max-w-273.75 xl:max-w-248.25 max-w-175.75 mb-12 flex w-full flex-col-reverse gap-12 xl:mb-18.75 xl:flex-row xl:justify-between">
                        <div className="lg:gap-34.75 flex flex-col gap-16 lg:flex-row xl:gap-24.5">
                            <LinksGroup title="Service" links={services} />
                            <LinksGroup title="Company" links={companyMenu} />
                        </div>
                        <div className="xl:w-85 w-full 2xl:w-99">
                            <Paragraph variant="p2" className="mb-10 leading-none tracking-footer-link text-base-7">
                                Subscribe for newsletters
                            </Paragraph>
                            <form className="mb-9.5">
                                <Input inputSize="m" withIcon placeholder="YOUR EMAIL" iconClassName="text-base-1" />
                            </form>
                            <ul className="flex items-center gap-4.75">
                                {socials.map(({ Icon, href }) => (
                                    <li key={href}>
                                        <Link href={href} target="_blank">
                                            <Icon className="text-base-1" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-8 gap-y-6 md:gap-x-17.5">
                        <Paragraph variant="footer-link" className="text-center text-base-1 md:hidden">
                            ©️2024 iFORTEX
                        </Paragraph>
                        <Paragraph variant="footer-link" className="text-base-1">
                            Privacy policy
                        </Paragraph>
                        <Paragraph variant="footer-link" className="text-base-1">
                            Cookies policy
                        </Paragraph>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
