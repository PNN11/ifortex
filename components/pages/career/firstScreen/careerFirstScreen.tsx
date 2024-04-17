'use client'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import React, { FC } from 'react'
import { expertise } from '../../home/expertise/data'
import ExpertiseItem from '../../home/expertise/expertiseItem'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import InfiniteSlider from '@/components/ui/infiniteSlider'
import { useTranslation } from 'react-i18next'

const ExpertiseSlide: FC<{ title: string }> = ({ title }) => {
    return <ExpertiseItem title={title} classes={{ icon: 'rotate-45' }} />
}

const CareerFirstScreen: FC = () => {
    const { t } = useTranslation()

    return (
        <section className="overflow-hidden">
            <Container size="l">
                <div className="relative pb-64 pt-50 md:pb-84.5 lg:py-61.25 2xl:py-68.5">
                    <Image
                        src="/images/career/career_bg.svg"
                        width={539}
                        height={397}
                        alt="background"
                        quality={100}
                        className="3xl:right-[calc(100% - 33.6875rem)] absolute right-1/2 top-[calc(50%-12.375rem)] max-w-137.5
                          animate-fade-up-service-lines lg:right-[80%] xl:right-[72%] 2xl:right-[70%]"
                    />
                    <Heading variant="h1" className="text-center">
                        {t('first-screen.build-career')} <br /> {t('first-screen.with')} iFORTEX
                    </Heading>
                    <Image
                        src="/images/home/expertise_bg.svg"
                        width={539}
                        height={397}
                        alt="background"
                        quality={100}
                        className="3xl:left-[calc(100% - 33.6875rem)] absolute left-1/2 top-[calc(50%-12.375rem)] max-w-137.5
                          animate-fade-up-service-lines lg:left-[80%] xl:left-[72%] 2xl:left-[70%]"
                    />
                </div>
            </Container>

            <div className="py-7.5 lg:py-9.5 2xl:py-12">
                <InfiniteSlider
                    data={expertise.map(item => ({ title: t(`homepage:expertise.expertises.${item}`) }))}
                    Component={ExpertiseSlide}
                    keyForComponent={({ title }, i) => `${title}${i}`}
                    classes={{ itemsContainer: 'gap-8', wrapper: 'gap-8' }}
                />
                {/* <Swiper slidesPerView="auto" spaceBetween={32}>
                    {expertise.map(item => (
                        <SwiperSlide key={item} className="!w-fit cursor-pointer">
                            <ExpertiseItem title={item} classes={{ icon: 'rotate-45' }} />
                        </SwiperSlide>
                    ))}
                </Swiper> */}
            </div>
        </section>
    )
}

export default CareerFirstScreen
