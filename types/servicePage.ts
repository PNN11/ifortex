import { StaticImageData } from 'next/image'

export type ServicePageContent = {
    firstScreen: {
        title: JSX.Element | string
        description: string
        actionButton: {
            title: string
        }
    }
    aboutService: {
        description: string
        experience: {
            title: string
            value: string
        }[]
        providedServices: {
            title: string
            description: string
        }[]
    }
    workflow: {
        description: string
        stages: {
            title: string
            description: string
        }[]
    }
    techStack: {
        description: string
        items: {
            name: string
            description: string
            technologies: {
                image: StaticImageData
                name: string
            }[]
        }[]
    }
    startProject: {
        description: string
        actionButton: {
            title: string
        }
    }
}
