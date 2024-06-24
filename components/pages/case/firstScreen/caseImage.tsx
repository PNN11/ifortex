import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import { cn } from '@/lib/classNames'
import Image from 'next/image'
import { FC } from 'react'

type CaseImageProps = {
    image: string
    alt: string
    width?: number
    height?: number
    capture?: string
    variant?: 'rounded' | 'clipped'
    classes?: { container?: string }
}

const CaseImage: FC<CaseImageProps> = ({
    image,
    alt,
    height = 360,
    width = 1260,
    capture,
    variant = 'clipped',
    classes,
}) => {
    return (
        <section className="py-6">
            <Container className={cn(classes?.container)}>
                {image ? (
                    <div>
                        <Image
                            src={image}
                            width={width}
                            height={height}
                            alt={alt}
                            className={cn('object-cover', {
                                'service-clip-[1.875rem] sm:service-clip-[2.5rem]': variant === 'clipped',
                                'rounded-[2rem] border border-base-5': variant === 'rounded',
                            })}
                            style={{ height }}
                        />

                        {capture && (
                            <Paragraph className="mt-4 text-center" variant="tag">
                                {capture}
                            </Paragraph>
                        )}
                    </div>
                ) : (
                    <div
                        style={{ height }}
                        className="w-full bg-base-21 service-clip-[1.875rem] sm:h-90 sm:service-clip-[2.5rem]"
                    />
                )}
            </Container>
        </section>
    )
}

export default CaseImage
