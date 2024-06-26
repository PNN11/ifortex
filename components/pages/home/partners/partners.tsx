'use client'
import Button from '@/components/ui/buttons/defaultButton/button'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation()

    return (
        <section className="overflow-hidden py-21.5">
            <Container>
                <div className="mb-15 flex flex-col justify-between gap-6 lg:flex-row lg:items-center lg:gap-7">
                    <Heading variant="h2" className="leading-12.7">
                        {t('homepage:our-partners.our')}
                        <br />
                        <span className="text-base-1">{t('homepage:our-partners.partners')}</span>
                    </Heading>
                    <div className="h-px w-full bg-base-12/30 lg:max-w-125" />
                    <Button size="s" variant="outlined" withIcon>
                        {t('homepage:our-partners.become-a-client')}
                    </Button>
                </div>
                {/* <Swiper slidesPerView="auto" spaceBetween={100} className="mb-12 !overflow-visible">
                    {partners.map(({ image, title }, index) => (
                        <SwiperSlide key={`${image}${index}`} className="!w-fit cursor-pointer">
                            <Image src={image} width={216} height={80} alt={title} />
                        </SwiperSlide>
                    ))}
                </Swiper> */}
            </Container>
        </section>
    )
}

export default Partners
