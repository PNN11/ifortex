import React, { FC, ReactNode } from 'react'
import Image from 'next/image'
import Container from './container'
import { Icons } from '@/components/svg'
import Heading from '../typography/heading'
import Paragraph from '../typography/paragraph'
import { cn } from '@/lib/classNames'

type ConsultationWrapperProps = {
    children: ReactNode
    title: string | JSX.Element
    description: string
    classes?: { bg?: string; icon?: string }
}

const ConsultationWrapper: FC<ConsultationWrapperProps> = ({ children, description, title, classes }) => {
    return (
        <section className="overflow-hidden">
            <Container className="relative pt-21.5">
                <Icons.Lines.LargeRectangleWithLines
                    className={cn(
                        'absolute left-237.5 top-24 hidden text-base-15/65 lg:block xl:left-250 2xl:left-0 2xl:top-26 2xl:-translate-x-full',
                        classes?.icon
                    )}
                    width="820"
                    viewBox="0 0 820 30"
                />
                <Heading tag="h4" variant="h1" className="mb-5.25 break-words">
                    {title}
                </Heading>
                <Paragraph variant="p1" className="mb-16">
                    {description}
                </Paragraph>
                {children}
                <Image
                    src="/images/home/consultation_bg.svg"
                    alt="consultation background"
                    width={923}
                    height={372}
                    className={cn('absolute left-[73%] top-3.5 hidden max-w-max md:block lg:left-[53%]', classes?.bg)}
                />
            </Container>
            <div className="h-50 bg-consultation-gradient lg:h-62.5" />
        </section>
    )
}

export default ConsultationWrapper
