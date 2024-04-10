'use client'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import Image from 'next/image'
import { FC, useState } from 'react'

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { TExpertise, expertise, expertiseDescription } from './data'
import ExpertiseInfo from './expertiseInfo'
import ExpertiseItem from './expertiseItem'
import { useTranslation } from 'react-i18next'

const Expertise: FC = () => {
    const [activeItem, setActiveItem] = useState<TExpertise>(expertise[0])
    const [swiper, setSwiper] = useState<SwiperClass>()
    const { t } = useTranslation()

    return (
        <section className="overflow-hidden py-21.5">
            <Container>
                <div className="relative mb-26 md:mb-16.5">
                    <Heading variant="h2">{t('expertise.title')}</Heading>
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
                            <ExpertiseItem
                                isActive={activeItem === item}
                                title={t(`expertise.expertises.${item}`)}
                                expertiseNumber={index + 1}
                            />
                        </SwiperSlide>
                    ))}
                    {new Array(2).fill(null).map((item, index) => (
                        <SwiperSlide className="!w-146.75" key={index} />
                    ))}
                </Swiper>

                <ExpertiseInfo
                    description={t(expertiseDescription[activeItem].description)}
                    listItems={[
                        t('expertise.our-team-has-extensive'),
                        ...expertiseDescription[activeItem].technologies,
                    ]}
                />
                <div className="flex justify-end pt-5.25">
                    <Image src="/images/home/expertise_vector.svg" width={468} height={29} alt="vector" quality={100} />
                </div>
            </Container>
        </section>
    )
}

export default Expertise
