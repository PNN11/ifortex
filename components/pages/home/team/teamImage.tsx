import { Icons } from '@/components/svg'
import { cn } from '@/lib/classNames'
import Image, { ImageProps } from 'next/image'
import React, { FC } from 'react'

type TeamImageProps = ImageProps & {
    wrapperClassName?: string
    order?: 'image-top' | 'image-bottom'
}

const TeamImage: FC<TeamImageProps> = ({
    wrapperClassName = '',
    width = 281,
    height = 360,
    alt,
    src,
    order = 'image-bottom',
    className,
    ...props
}) => {
    return (
        <div
            className={cn(`flex gap-7.5`, wrapperClassName, {
                'flex-col': order === 'image-bottom',
                'flex-col-reverse items-end': order === 'image-top',
            })}
        >
            <Icons.Lines.ProjectLine
                className={cn({
                    '': order === 'image-bottom',
                    'rotate-180': order === 'image-top',
                })}
            />
            <Image
                src={src}
                width={width}
                height={height}
                {...props}
                alt={alt}
                className={cn('max-w-max', className)}
            />
        </div>
    )
}

export default TeamImage
