import { TExpertise } from '../expertise/data'

export type Project = {
    tags: string[]
    title: string
    image: string
    href?: string
    category: TExpertise
}
