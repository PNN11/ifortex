'use client'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import { useWindowSize } from '@/hooks/useWindowSize'
import Image from 'next/image'
import React, { FC } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const reviews = [
    {
        review: 'Lorem ipsum dolor sit amet consectetur. Sed qwer turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla pellentesque faucibus elementum. Mi et sed nibh fringilla nunc lacus pretium scelerisque. Pellentesque ipsum volutpat gravida pretium viverra diam volutpat. Feugiat sed facilisis lacus eget tempus morbi.',
        author: { image: '/images/home/review_avatar.png', name: 'Name Soname', position: 'Company position' },
    },
    {
        review: 'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sadt. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla pellentesque faucibus elementum. Mi et sed nibh fringilla nunc lacus pretium scelerisque. Pellentesque ipsum volutpat gravida pretium viverra diam volutpat. Feugiat sed facilisis lacus eget tempus morbi.',
        author: { image: '/images/home/review_avatar.png', name: 'Name', position: 'position' },
    },
    {
        review: 'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla pellentesque faucibus elementum. Mi et sed nibh fringilla nunc lacus pretium scelerisque. Pellentesque ipsum volutpat gravida pretium viverra diam volutpat. Feugiat sed facilisis lacus eget tempus morbi.',
        author: { image: '/images/home/review_avatar.png', name: 'Soname', position: 'Company' },
    },
]

const Reviews: FC = () => {
    const { width } = useWindowSize()

    return (
        <section className="py-21.5">
            <Container>
                <div className="grid grid-cols-1 items-center justify-between md:grid-cols-review">
                    <Icons.Lines.ReviewLine className="text-base-20 hidden w-7.5 md:block md:w-auto" />
                    <div className="px-3 sm:px-6 md:px-8.25 lg:px-14">
                        <Heading variant="h2" className="mb-12 md:mb-17">
                            reviews
                        </Heading>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={32}
                            allowTouchMove={false}
                            className="mb-9"
                            modules={[Navigation]}
                            navigation={{ nextEl: '.next-review-slide', prevEl: '.prev-review-slide' }}
                        >
                            {reviews.map(({ author, review }) => (
                                <SwiperSlide key={`${review}${author.name}`}>
                                    <Paragraph variant="p1" className="mb-23.75">
                                        {review}
                                    </Paragraph>
                                    <Image
                                        src="/images/home/review_line.svg"
                                        width={468}
                                        height={29}
                                        alt="line"
                                        quality={100}
                                        className="mb-3"
                                    />
                                    <div className="flex flex-col gap-7 md:flex-row md:items-center md:gap-11.25">
                                        <Image src={author.image} width={86} height={86} alt={author.name} />
                                        <div>
                                            <Heading variant="h4">{author.name}</Heading>
                                            <Paragraph variant="tag">{author.position}</Paragraph>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="relative flex items-center gap-5 overflow-hidden">
                            <div className="flex items-center gap-13.5 text-base-2">
                                <Icons.Arrows.ArrowRight className="prev-review-slide cursor-pointer" />
                                <Icons.Arrows.ArrowRight className="next-review-slide rotate-180 cursor-pointer" />
                            </div>
                            <Icons.Lines.LargeRectangleWithLines className="left-49 absolute text-base-15/65" />
                        </div>
                    </div>
                    <Icons.Lines.ReviewLine className="text-base-20 hidden w-7.5 rotate-y-180 md:block md:w-auto" />
                </div>
            </Container>
        </section>
    )
}

export default Reviews
