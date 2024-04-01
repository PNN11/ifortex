import ContactInfo from '@/components/layout/footer/contactInfo'
import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Container from '@/components/ui/wrappers/container'
import MarginWrapper from '@/components/ui/wrappers/marginWrapper'
import SectionWrapper from '@/components/ui/wrappers/sectionWrapper'
import React, { FC } from 'react'

const ContactsFirstScreen: FC = () => {
    return (
        <SectionWrapper variant="m" className="overflow-hidden">
            <Container size="l">
                <MarginWrapper className="relative">
                    <Heading variant="h1">
                        Contact <br />{' '}
                        <span className="relative text-base-1">
                            us
                            <Icons.Lines.ContactsLine className="absolute bottom-0 left-full text-base-15/65 xl:bottom-2.5" />
                        </span>
                    </Heading>
                </MarginWrapper>
                <div className="flex flex-col-reverse items-center gap-3.75 border border-base-2 bg-grad-2 xl:flex-row xl:gap-17.5 2xl:gap-10 3xl:gap-40">
                    <div className="2xl:max-w-170.5 relative w-full xl:w-[44%] 2xl:w-full">
                        <Icons.BelarusMap className="absolute" />
                        <ContactInfo />
                        <div className="absolute h-1.5 w-1.5 bg-base-14 md:h-2.5 md:w-2.5" />
                    </div>
                    <div></div>
                </div>
            </Container>
        </SectionWrapper>
    )
}

export default ContactsFirstScreen
