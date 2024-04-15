import React, { FC } from 'react'
import Image from 'next/image'

type CaseImageProps = {
    image: string
    alt: string
}

const CaseImage: FC<CaseImageProps> = ({ image, alt }) => {
    return image ? (
        <Image src={image} width={1260} height={360} alt={alt} />
    ) : (
        <div className="sm:h-90 service-clip-[1.875rem] sm:service-clip-[2.5rem] bg-base-21 h-78.375 w-full" />
    )
}

export default CaseImage
