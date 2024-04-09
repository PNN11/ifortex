'use client'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MouseParallax } from 'react-just-parallax'
import { useDebouncedCallback } from 'use-debounce'
import HomePageAnimatedButton from './button'
import HomePageQualityButton from './qualityButton'

const FirstSection: FC = () => {
    const { t } = useTranslation()

    const [topPosition, setTopPosition] = useState(0)

    const debouncedSetTopPosition = useDebouncedCallback(setTopPosition, 30)

    useEffect(() => {
        const threshold = window.innerHeight * 0.5
        const firstSection = document.getElementById('first-section')
        const ourService = document.getElementById('our-service')
        const aboutUs = document.getElementById('about-us')

        const firstSectionScrollPosition = firstSection?.getBoundingClientRect().top ?? 0 + window.scrollY
        const ourServiceScrollPosition = ourService?.getBoundingClientRect().top ?? 0 + window.scrollY
        const aboutUsScrollPosition = aboutUs?.getBoundingClientRect().top ?? 0 + window.scrollY

        const handler = () => {
            const scroll = window.scrollY

            if (scroll >= firstSectionScrollPosition && scroll < ourServiceScrollPosition - threshold) {
                debouncedSetTopPosition(firstSectionScrollPosition)
                return
            }
            if (scroll >= ourServiceScrollPosition - threshold && scroll < aboutUsScrollPosition - threshold) {
                debouncedSetTopPosition(ourServiceScrollPosition)
                return
            }
            if (scroll >= aboutUsScrollPosition - threshold) {
                debouncedSetTopPosition(aboutUsScrollPosition)
            }
        }

        window.addEventListener('scroll', handler)

        return () => {
            window.removeEventListener('scroll', handler)
        }
    }, [debouncedSetTopPosition])

    return (
        <section id="first-section" className="relative flex h-[100dvh] flex-col-reverse bg-base-10 bg-opacity-[0.01]">
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
                <HomePageAnimatedButton className="mb-2">{t('first_section.start_project')}</HomePageAnimatedButton>{' '}
                <span>
                    <span className="hidden md:inline">{t('first_section.with')}</span>{' '}
                    <br className="hidden lg:block" /> {t('first_section.your_expert_in')}{' '}
                    <span className="md:hidden">{t('first_section.quality')}</span>
                    <HomePageQualityButton className="hidden md:my-6 md:inline-block lg:mt-0">
                        {t('first_section.quality')}
                    </HomePageQualityButton>{' '}
                    <br className="hidden lg:block" />
                    {t('first_section.software_solutions')}
                </span>
            </Heading>
            <div className="absolute bottom-3.625 h-px w-full bg-base-15/30 2xl:right-4 2xl:w-210.5" />
        </section>
    )
}

export default FirstSection
