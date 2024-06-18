'use client'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import Image from 'next/image'
import { ComponentProps, FC, useState } from 'react'

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { TExpertise, expertise, expertiseDescription } from './data'
import ExpertiseInfo from './expertiseInfo'
import ExpertiseItem from './expertiseItem'
import { useTranslation } from 'react-i18next'
import InfiniteSlider from '@/components/ui/infiniteSlider'
import Link from 'next/link'
import Button from '@/components/ui/buttons/defaultButton/button'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'

const ExpertiseSlide: FC<ComponentProps<typeof ExpertiseItem> & { onClick: () => void }> = ({
    title,
    isActive,
    onClick,
    expertiseNumber,
}) => {
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <ExpertiseItem title={title} isActive={isActive} expertiseNumber={expertiseNumber} />
        </div>
    )
}

const Expertise: FC = () => {
    const [activeItem, setActiveItem] = useState<TExpertise>(expertise[0])
    const [swiper, setSwiper] = useState<SwiperClass>()
    const { width } = useWindowSize()
    const { t } = useTranslation()

    return (
        <section className="overflow-hidden pt-21.5">
            <Container>
                <Heading className="relative mb-26 w-fit md:mb-16.5" variant="h2">
                    {t('expertise.title')}{' '}
                    <div className="absolute top-17.5 w-117 md:left-[calc(100%+0.5rem)] md:top-3.5">
                        <Image
                            src="/images/home/expertise_vector.svg"
                            width={468}
                            height={29}
                            alt="vector"
                            quality={100}
                        />
                    </div>
                </Heading>
            </Container>

            <InfiniteSlider
                data={expertise.map((item, index) => ({
                    title: t(`homepage:expertise.expertises.${item}`),
                    isActive: activeItem === item,
                    expertiseNumber: index + 1,
                    onClick: () => setActiveItem(item),
                }))}
                Component={ExpertiseSlide}
                keyForComponent={({ title }, i) => `${title}${i}`}
                classes={{ itemsContainer: 'gap-8', wrapper: 'gap-8 mb-12' }}
                slideAnimationDuration={8}
            />

            {/* <Swiper
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
                </Swiper> */}
            <Container>
                <ExpertiseInfo
                    classes={{ description: 'lg:max-w-160 xl:max-w-173.75', bg: 'md:hidden lg:block' }}
                    description={t(expertiseDescription[activeItem].description)}
                >
                    <Link className="block w-full lg:w-fit" href="/cases">
                        <Button
                            className="w-full"
                            variant="outlined"
                            withIcon
                            size={width > ScreenWidths.XL ? 'm' : 's'}
                        >
                            {t('expertise.title')}
                        </Button>
                    </Link>
                </ExpertiseInfo>
                <div className="flex justify-end pt-5.25">
                    <Image src="/images/home/expertise_vector.svg" width={468} height={29} alt="vector" quality={100} />
                </div>
            </Container>
        </section>
    )
}

export default Expertise
