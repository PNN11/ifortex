'use client'
import { Icons } from '@/components/svg'
import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { MouseParallax } from 'react-just-parallax'

const getButtonSize = (width: number) => {
    if (width < ScreenWidths.M) return 's'
    if (width >= ScreenWidths.M && width < ScreenWidths['2XL']) return 'm'
    return 'l'
}

const FirstSection: FC = () => {
    const { width } = useWindowSize()

    const [topPosition, setTopPosition] = useState(0)

    useEffect(() => {
        const callback: IntersectionObserverCallback = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTopPosition(entry.boundingClientRect.top + window.scrollY)
                }
            })
        }

        const observer = new IntersectionObserver(callback, { threshold: 0.55 })

        const firstSection = document.getElementById('first-section')
        const ourService = document.getElementById('our-service')
        const aboutUs = document.getElementById('about-us')

        firstSection && observer.observe(firstSection)
        ourService && observer.observe(ourService)
        aboutUs && observer.observe(aboutUs)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <section
            id="first-section"
            className="relative mb-40 flex h-[100dvh] flex-col-reverse bg-base-10 bg-opacity-[0.01]"
        >
            <MouseParallax strength={0.1} isAbsolutelyPositioned shouldPause={false}>
                <div
                    style={{ top: -274 + topPosition }}
                    className="absolute -left-16.5 -top-68.5 hidden h-231 w-226.5 rounded-full border border-base-15/30 transition-all duration-700 md:block"
                />
            </MouseParallax>
            <MouseParallax strength={0.3} isAbsolutelyPositioned shouldPause={false}>
                <Icons.Planet
                    style={{ top: 162 + topPosition }}
                    className="absolute left-112 top-40.5 hidden transition-all duration-700 md:block 3xl:left-137.5"
                />
            </MouseParallax>

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
                className="relative z-10 flex flex-col-reverse gap-8 px-6 pb-15 sm:pl-7.5 sm:pr-7.5 md:block md:pr-4.75 lg:pb-32.75 lg:pl-11
                 xl:pl-0 xl:pr-11 xl:text-right 2xl:pb-18.75 2xl:pr-46.75 3xl:pr-18.75"
                style={{ wordSpacing: '1.25rem' }}
            >
                <Button
                    size={getButtonSize(width)}
                    withIcon
                    iconClassName="text-base-9"
                    className="relative mb-2 w-full rounded-none bg-transparent transition-all before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-full
                     before:bg-base-1 before:transition-all before:duration-300 hover:text-white hover:before:w-12 before:hover:bg-white md:mb-6 md:hover:before:w-25 lg:w-auto"
                >
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
            <div className="absolute bottom-3.625 h-px w-full bg-base-15/30 2xl:right-4 2xl:w-210.5" />
        </section>
    )
}

export default FirstSection
