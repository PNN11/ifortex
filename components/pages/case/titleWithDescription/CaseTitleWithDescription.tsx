import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import { cn } from '@/lib/classNames'
import { FC } from 'react'

type CaseTitleWithDescriptionProps = {
    title: string
    description: string
    size?: 'md' | 'lg'
    position?: 'center' | 'left'
}

const CaseTitleWithDescription: FC<CaseTitleWithDescriptionProps> = ({
    description,
    title,
    size = 'lg',
    position = 'left',
}) => {
    return (
        <section className="py-6">
            <Container>
                {size === 'lg' && (
                    <div className={cn('mb-10 h-2.5 w-2.5 bg-grad-1', { 'mx-auto': position === 'center' })} />
                )}
                <Heading
                    variant={size === 'lg' ? 'h2' : 'h4'}
                    className={cn({
                        'mb-10': size === 'lg',
                        'mb-5.25': size === 'md',
                        'text-center': position === 'center',
                    })}
                >
                    {title}
                </Heading>
                <Paragraph className={cn({ 'max-w-211 mx-auto text-center': position === 'center' })} variant="p1">
                    {description}
                </Paragraph>
            </Container>
        </section>
    )
}

export default CaseTitleWithDescription
