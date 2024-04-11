import { StaticImageData } from 'next/image'

export type ServicePageContent = {
    techStack: {
        items: {
            name: string
            description: string
            listTitle: string
            technologies: {
                image: StaticImageData
                name: string
            }[]
        }[]
    }
}
