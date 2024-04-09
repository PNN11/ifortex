'use client'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import Image from 'next/image'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const reviews = [
    {
        review: 'reviews.items.0.text',
        author: {
            image: '/images/home/review_avatar.png',
            name: 'reviews.items.0.name',
            position: 'reviews.items.0.position',
        },
    },
    {
        review: 'reviews.items.1.text',
        author: {
            image: '/images/home/review_avatar.png',
            name: 'reviews.items.1.name',
            position: 'reviews.items.1.position',
        },
    },
    {
        review: 'reviews.items.2.text',
        author: {
            image: '/images/home/review_avatar.png',
            name: 'reviews.items.2.name',
            position: 'reviews.items.2.position',
        },
    },
]

const Reviews: FC = () => {
    const { t } = useTranslation()

    return (
        <section className="py-21.5">
            <Container>
                <div className="grid grid-cols-1 items-center justify-between md:grid-cols-review">
                    <Icons.Lines.ReviewLine className="hidden w-7.5 text-base-20 md:block md:w-auto" />
                    <div className="px-3 sm:px-6 md:px-8.25 lg:px-14">
                        <Heading variant="h2" className="mb-12 md:mb-17">
                            {t('reviews.title')}
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
                                        {t(review)}
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
                                            <Heading variant="h4">{t(author.name)}</Heading>
                                            <Paragraph variant="tag">{t(author.position)}</Paragraph>
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
                            <Icons.Lines.LargeRectangleWithLines className="absolute left-49 text-base-15/65" />
                        </div>
                    </div>
                    <Icons.Lines.ReviewLine className="hidden w-7.5 text-base-20 rotate-y-180 md:block md:w-auto" />
                </div>
            </Container>
        </section>
    )
}

export default Reviews
