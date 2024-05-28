'use client'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import MouseParallaxWrapper from '@/components/ui/wrappers/mouseParallaxWrapper'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import Image from 'next/image'
import { ComponentProps, FC } from 'react'
import { useTranslation } from 'react-i18next'
import ContactForm from './form'

type ContactFormSectionProps = {
    containerSize?: ComponentProps<typeof Container>['size']
}

const ContactFormSection: FC<ContactFormSectionProps> = ({ containerSize = 'l' }) => {
    const { t } = useTranslation()

    return (
        <SectionWrapper variant="m" className="relative overflow-hidden">
            <Container size={containerSize} className="relative z-10">
                <div className="relative grid grid-cols-1 gap-4.5 lg:grid-cols-2 xl:gap-5">
                    <div className="relative pb-42 md:max-w-79 lg:max-w-145.5 lg:pb-0">
                        <Heading variant="h1" tag="h3" className="mb-11.5">
                            {t('contacts:form.title')}
                        </Heading>
                        <Paragraph variant="p1">{t('contacts:form.description')}</Paragraph>
                        <Image
                            src="/images/contact/contact_us_bg.svg"
                            alt="bg"
                            width={621}
                            height={345}
                            className="absolute bottom-0 left-0 max-w-max"
                        />
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </Container>
            <MouseParallaxWrapper isAbsolutelyPositioned strength={0.2}>
                <Image
                    src="/images/home/about_us_planets.svg"
                    alt="bg"
                    width={210}
                    height={296}
                    className="absolute hidden xl:left-20 xl:top-65 xl:block 2xl:left-auto 2xl:right-4.25 2xl:top-62.5 3xl:right-13.5 3xl:top-55"
                />
            </MouseParallaxWrapper>
        </SectionWrapper>
    )
}

export default ContactFormSection
