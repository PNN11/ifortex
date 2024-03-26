'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/wrappers/container'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'

import { SwiperSlide, Swiper, SwiperClass } from 'swiper/react'
import Paragraph from '@/components/ui/typography/paragraph'
import { formatNumber } from '@/lib/formatNumber'
import { TExpertise, expertise, expertiseDescription } from './data'

const TechnologyItem: FC<{ title: string }> = ({ title }) => {
    return (
        <li className="flex items-center gap-13.5 sm:gap-24.5">
            <span className="h-2.5 w-2.5 bg-base-14" />
            <Paragraph variant="alt">{title}</Paragraph>
        </li>
    )
}

const Expertise: FC = () => {
    const [activeItem, setActiveItem] = useState<TExpertise>(expertise[0])
    const [swiper, setSwiper] = useState<SwiperClass>()

    return (
        <section className="overflow-hidden py-21.5">
            <Container>
                <div className="relative mb-26 md:mb-16.5">
                    <Heading variant="h2">expertise</Heading>
                    <div className="absolute top-17.5 w-117 md:left-72 md:top-3.5 lg:left-80 xl:left-88">
                        <Image
                            src="/images/home/expertise_vector.svg"
                            width={468}
                            height={29}
                            alt="vector"
                            quality={100}
                        />
                    </div>
                </div>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={32}
                    onSwiper={swiper => setSwiper(swiper)}
                    className="mb-12 !overflow-visible"
                >
                    {expertise.map((item, index) => (
                        <SwiperSlide
                            key={item}
                            className="!w-fit cursor-pointer"
                            onClick={() => {
                                swiper?.slideTo(index)
                                setActiveItem(item)
                            }}
                        >
                            <div className="flex w-fit items-center gap-8">
                                <Icons.Lines.RectangleWithLines
                                    className={`${activeItem === item ? 'text-base-1' : 'text-base-6'}`}
                                />
                                <div className="flex items-center gap-5.25">
                                    <Paragraph variant="alt">
                                        {formatNumber(index + 1, { minimumIntegerDigits: 2 })}
                                    </Paragraph>
                                    <Heading variant="h4" className="whitespace-nowrap">
                                        {item}
                                    </Heading>
                                </div>
                                <Icons.Plus className={`text-base-13 ${activeItem === item ? 'rotate-45' : ''}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                    {new Array(2).fill(null).map((item, index) => (
                        <SwiperSlide className="!w-146.75" key={index} />
                    ))}
                </Swiper>
                <div className="relative mb-16.5 flex flex-col gap-5.5 py-7.5 lg:flex-row lg:items-center lg:gap-8.5 xl:gap-11">
                    <div className="flex items-start gap-8.5 xl:gap-11">
                        <Image
                            src="/images/home/expertise_vector_2.svg"
                            width={66}
                            height={267}
                            alt="vector"
                            quality={100}
                            className="hidden w-8.5 sm:block lg:w-16.5"
                        />
                        <Paragraph className="lg:max-w-102.5" variant="p1">
                            {expertiseDescription[activeItem].description}
                        </Paragraph>
                    </div>
                    <ul className="flex flex-col gap-5">
                        <TechnologyItem title="Our team has extensive" />
                        {expertiseDescription[activeItem].technologies.map(tech => (
                            <TechnologyItem key={tech} title={tech} />
                        ))}
                    </ul>
                    <Image
                        src="/images/home/expertise_bg.svg"
                        width={444}
                        height={327}
                        alt="background"
                        quality={100}
                        className="absolute left-[74%] top-23 hidden lg:left-[78%] lg:block xl:top-auto"
                    />
                </div>
                <div className="flex justify-end pt-5.25">
                    <Image src="/images/home/expertise_vector.svg" width={468} height={29} alt="vector" quality={100} />
                </div>
            </Container>
        </section>
    )
}

export default Expertise
