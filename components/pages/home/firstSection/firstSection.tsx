'use client'
import { Icons } from '@/components/svg'
import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import Image from 'next/image'
import { FC } from 'react'

const getButtonSize = (width: number) => {
    if (width < ScreenWidths.M) return 's'
    if (width >= ScreenWidths.M && width < ScreenWidths['2XL']) return 'm'
    return 'l'
}

const FirstSection: FC = () => {
    const { width } = useWindowSize()
    return (
        <section
            id="first-section"
            className="relative mb-40 flex h-screen flex-col-reverse overflow-hidden bg-base-10 bg-opacity-[0.01]"
        >
            <div className="absolute -left-16.5 -top-68.5 hidden h-231 w-226.5 rounded-full border border-base-1/30 md:block" />
            <Icons.Planet className="left-112 top-40.5 absolute hidden md:block 3xl:left-137.5" />
            <Image
                src="/images/home/left-bg.png"
                alt="bg"
                width={752}
                height={936}
                className="absolute left-0 h-full w-auto"
                quality={100}
            />
            <Image
                src="/images/home/right-bg.png"
                alt="bg"
                width={752}
                height={936}
                className="absolute right-0 hidden h-full w-auto lg:block"
                quality={100}
            />
            <Heading
                variant="h1"
                className="2xl:pr-46.75 lg:pb-32.75 relative z-10 flex flex-col-reverse gap-8 px-6 pb-15 sm:pl-7.5 sm:pr-7.5 md:block md:pr-4.75
                 lg:pl-11 xl:pl-0 xl:pr-11 xl:text-right 2xl:pb-18.75 3xl:pr-18.75"
                style={{ wordSpacing: '1.25rem' }}
            >
                <Button size={getButtonSize(width)} withIcon className="mb-2 w-full rounded-none md:mb-6 lg:w-auto">
                    Start project
                </Button>{' '}
                <span>
                    <span className="hidden md:inline">with</span> <br className="hidden lg:block" /> your expert in{' '}
                    <span className="md:hidden">quality</span>
                    <Button
                        size={getButtonSize(width)}
                        variant="outlined"
                        className="hidden md:my-6 md:inline-block lg:mt-0"
                    >
                        quality
                    </Button>{' '}
                    <br className="hidden lg:block" />
                    software solutions
                </span>
            </Heading>
            <div className="absolute bottom-3.625 h-px w-full bg-base-1/30 2xl:right-4 2xl:w-210.5" />
        </section>
    )
}

export default FirstSection
