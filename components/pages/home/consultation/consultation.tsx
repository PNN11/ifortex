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
            <Container className="pt-21.5 relative">
                <Icons.Lines.LargeRectangleWithLines className="text-base-15/65 top-30 absolute left-[-45%]" />
                <Heading variant="accent" className="mb-5.25">
                    Get <span className="text-base-1">free</span> consultation
                </Heading>
                <Paragraph variant="p1" className="mb-16">
                    Lorem ipsum dolor sit amet consectetur. Rhoncus proin libero pellentesque elit.{' '}
                </Paragraph>
                <form className="max-w-158">
                    <Input withIcon />
                </form>
                <Image
                    src="/images/home/consultation_bg.svg"
                    alt="consultation background"
                    width={923}
                    height={372}
                    className="absolute right-[-20%] top-3.5"
                />
            </Container>
            <div className="bg-consultation-gradient h-68.5" />
        </section>
    )
}

export default Consultation
