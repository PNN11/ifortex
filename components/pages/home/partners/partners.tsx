'use client'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import Image from 'next/image'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const partners = [
    { image: '/images/home/partner_mock.png', title: 'mock' },
    { image: '/images/home/partner_mock.png', title: 'mock' },
    { image: '/images/home/partner_mock.png', title: 'mock' },
    { image: '/images/home/partner_mock.png', title: 'mock' },
    { image: '/images/home/partner_mock.png', title: 'mock' },
    { image: '/images/home/partner_mock.png', title: 'mock' },
    { image: '/images/home/partner_mock.png', title: 'mock' },
    { image: '/images/home/partner_mock.png', title: 'mock' },
    { image: '/images/home/partner_mock.png', title: 'mock' },
]

const Partners: FC = () => {
    return (
        <section className="overflow-hidden py-21.5">
            <Container>
                <div className="mb-15 flex items-center justify-between gap-7">
                    <Heading variant="h2" className="leading-12.7">
                        our
                        <br />
                        <span className="text-base-1">partners</span>
                    </Heading>
                    <div className="max-w-125 h-px w-full bg-base-12/30" />
                    <Button size="s" variant="outlined" withIcon>
                        become a client
                    </Button>
                </div>
                <Swiper slidesPerView="auto" spaceBetween={100} className="mb-12 !overflow-visible">
                    {partners.map(({ image, title }, index) => (
                        <SwiperSlide key={`${image}${index}`} className="!w-fit cursor-pointer">
                            <Image src={image} width={216} height={80} alt={title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    )
}

export default Partners
