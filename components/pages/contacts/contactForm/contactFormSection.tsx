import Button from '@/components/ui/buttons/defaultButton/button'
import Input from '@/components/ui/inputs/defaultInput/input'
import TextArea from '@/components/ui/inputs/defaultTextArea/textArea'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC } from 'react'
import ContactForm from './form'
import Image from 'next/image'

const ContactFormSection: FC = () => {
    return (
        <SectionWrapper variant="m" className="relative overflow-hidden">
            <Container size="l">
                <div className="relative grid grid-cols-1 gap-4.5 lg:grid-cols-2 xl:gap-5">
                    <div className="md:max-w-79 relative pb-42 lg:max-w-145.5 lg:pb-0">
                        <Heading variant="h1" tag="h3" className="mb-11.5">
                            Done is better than perfect
                        </Heading>
                        <Paragraph variant="p1">
                            Ready to take your business to the next level with a custom website or app? We`d love to
                            hear from you! Fill out the form on this page or use the information below to get in touch
                            with us
                        </Paragraph>
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
            <Image
                src="/images/home/about_us_planets.svg"
                alt="bg"
                width={210}
                height={296}
                className="3xl:top-55 absolute hidden xl:left-20 xl:top-65 xl:block 2xl:left-auto 2xl:right-4.25 2xl:top-62.5 3xl:right-13.5"
            />
        </SectionWrapper>
    )
}

export default ContactFormSection
