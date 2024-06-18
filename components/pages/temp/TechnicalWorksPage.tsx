import React from 'react'
import Image from 'next/image'
import Container from '@/components/ui/wrappers/container'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import { gilroy } from '@/fonts'

const TechnicalWorksPage = () => {
    return (
        <main className="flex flex-col lg:h-screen">
            <div className="border-b border-b-base-2 py-12 2xl:py-16">
                <Container size="l">
                    <Icons.IFortexLogo className="h-9 2xl:h-10.5" />
                </Container>
            </div>
            <div className="grow overflow-hidden pt-16 lg:pt-0">
                <Container size="l" className="relative flex h-full lg:items-center">
                    <div className="max-w-[550px] pb-96 sm:pb-[428px] lg:pb-0 2xl:max-w-[820px]">
                        <Heading variant="h1" className="mb-12 2xl:mb-16">
                            Technical work is underway
                        </Heading>
                        <div className="relative flex gap-10.5 pb-24 2xl:pb-28">
                            <Icons.Lines.Hypotenuse className="text-base-15/65" />
                            <Heading variant="h2">
                                We will back to you <span className="text-base-2">very soon</span>
                            </Heading>
                            <Image
                                src="/images/long_line.svg"
                                width={437}
                                height={28}
                                alt=""
                                className="absolute bottom-0 left-0 max-w-max"
                            />
                        </div>
                    </div>
                    <Image
                        src="/images/technical_work_bg.svg"
                        alt=""
                        width={730}
                        height={416}
                        className="absolute -bottom-22 left-0 max-w-max lg:bottom-auto lg:left-[37.75rem] xl:left-[50%] 2xl:left-[68rem] 3xl:left-auto 3xl:right-60"
                    />
                </Container>
            </div>
            <div className="py-12">
                <Container size="l">
                    <p className={`text-sm font-light leading-none text-base-1 ${gilroy.className}`}>©️2024 iFORTEX</p>
                </Container>
            </div>
        </main>
    )
}

export default TechnicalWorksPage
