'use client'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import React, { FC } from 'react'
import { expertise } from '../../home/expertise/data'
import ExpertiseItem from '../../home/expertise/expertiseItem'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const CareerFirstScreen: FC = () => {
    return (
        <section className="overflow-hidden">
            <Container size="l">
                <div className="md:pb-84.5 relative pb-64 pt-50 lg:py-61.25 2xl:py-68.5">
                    <Image
                        src="/images/career/career_bg.svg"
                        width={539}
                        height={397}
                        alt="background"
                        quality={100}
                        className="absolute right-1/2 top-1/2 max-w-137.5 -translate-y-1/2 lg:right-[80%] xl:right-[72%] 2xl:right-[70%] 3xl:right-full 3xl:translate-x-full"
                    />
                    <Heading variant="h1" className="text-center">
                        Build career <br /> with iFORTEX
                    </Heading>
                    <Image
                        src="/images/home/expertise_bg.svg"
                        width={539}
                        height={397}
                        alt="background"
                        quality={100}
                        className="absolute left-1/2 top-1/2 max-w-137.5 -translate-y-1/2 lg:left-[80%] xl:left-[72%] 2xl:left-[70%] 3xl:left-full 3xl:-translate-x-full"
                    />
                </div>
            </Container>

            <div className="py-7.5 lg:py-9.5 2xl:py-12">
                <Swiper slidesPerView="auto" spaceBetween={32}>
                    {expertise.map(item => (
                        <SwiperSlide key={item} className="!w-fit cursor-pointer">
                            <ExpertiseItem title={item} classes={{ icon: 'rotate-45' }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default CareerFirstScreen
