import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

export type TechStackItemProps = {
    name: string
    description: string
    listTitle: string
    technologies: { image: StaticImageData; name: string }[]
}

const TechStackItem: FC<TechStackItemProps> = ({ description, name, technologies, listTitle }) => {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col gap-6">
            <Heading variant="h3">{t(name)}</Heading>
            <Paragraph variant="p1">{t(description)}</Paragraph>
            <div>
                <Paragraph variant="alt" className="mb-7.75 text-xl text-base-1">
                    {t(listTitle)}
                </Paragraph>
                <ul className="flex flex-wrap gap-9.75">
                    {technologies.map(({ image, name }) => (
                        <li key={name}>
                            <Image src={image} alt={t(name)} quality={100} />
                        </li>
                    ))}
                </ul>
            </div>
            <Icons.Lines.Hypotenuse className="text-base-1 rotate-x-180" />
        </div>
    )
}

export default TechStackItem
