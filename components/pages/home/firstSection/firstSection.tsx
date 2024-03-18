import Button from '@/components/ui/buttons/defaultButton'
import Heading from '@/components/ui/typography/heading'
import Image from 'next/image'
import { FC } from 'react'

const FirstSection: FC = () => {
    return (
        <section
            id="first-section"
            className="relative mb-40 flex h-screen flex-col-reverse bg-base-10 bg-opacity-[0.01]"
        >
            <Image
                src="/images/home/left-bg.png"
                alt="bg"
                width={752}
                height={936}
                className="absolute left-0 h-full w-auto"
                quality={100}
            />
            <Image
                src="/images/home/right-bg.png"
                alt="bg"
                width={752}
                height={936}
                className="absolute right-0 h-full w-auto"
                quality={100}
            />
            <Heading
                variant="h1"
                className="relative z-10 pb-18.75 pr-18.75 text-right"
                style={{ wordSpacing: '1.25rem' }}
            >
                <Button size="l" withIcon className="mb-6 rounded-none">
                    Start project
                </Button>{' '}
                with <br /> your expert in{' '}
                <Button size="l" variant="outlined" className="mb-6 rounded-none">
                    quality
                </Button>
                <br />
                software solutions
            </Heading>
        </section>
    )
}

export default FirstSection
