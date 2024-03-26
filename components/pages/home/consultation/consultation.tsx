import { FC } from 'react'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import { Icons } from '@/components/svg'
import Input from '@/components/ui/inputs/defaultInput/input'
import Image from 'next/image'

const Consultation: FC = () => {
    return (
        <section className="overflow-hidden">
            <Container className="relative pt-21.5">
                <Icons.Lines.LargeRectangleWithLines className="left-237.5 xl:left-250 absolute top-24 hidden text-base-15/65 lg:block 2xl:left-[-45%] 2xl:top-26" />
                <Heading tag="h4" variant="h1" className="mb-5.25 break-words">
                    Get <span className="text-base-1">free</span> consultation
                </Heading>
                <Paragraph variant="p1" className="mb-16">
                    Lorem ipsum dolor sit amet consectetur. Rhoncus proin libero pellentesque elit.{' '}
                </Paragraph>
                <form className="max-w-158">
                    <Input withIcon placeholder="YOUR EMAIL" />
                </form>
                <Image
                    src="/images/home/consultation_bg.svg"
                    alt="consultation background"
                    width={923}
                    height={372}
                    className="absolute left-[73%] top-3.5 hidden max-w-max md:block lg:left-[53%]"
                />
            </Container>
            <div className="h-50 bg-consultation-gradient lg:h-62.5" />
        </section>
    )
}

export default Consultation
