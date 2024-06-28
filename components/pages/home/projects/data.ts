import { TExpertise } from '../expertise/data'
import { Project } from './types'

export type ProjectCategory = (typeof projectCategories)[number]['value']

type TProjectCategory = { value: TExpertise | 'all'; title: string }

export const projectCategories: TProjectCategory[] = [
    { value: 'all', title: 'homepage:projects.categories.all' },
    // { value: 'ai tech', title: 'homepage:projects.categories.ai-tech' },
    // { value: 'web', title: 'homepage:projects.categories.web' },
    // { value: 'apps', title: 'homepage:projects.categories.apps' },
    { value: 'fintech', title: 'homepage:projects.categories.fintech-development' },
    // { value: 'logistics software', title: 'homepage:projects.categories.logistics-software' },
    { value: 'medicine', title: 'homepage:projects.categories.healthcare' },
    { value: 'e-commerce', title: 'homepage:projects.categories.e-commerce-projects' },
    // { value: 'travel', title: 'homepage:projects.categories.travel' },
    { value: 'edtech', title: 'homepage:projects.categories.edtech-platforms' },
    // { value: 'real estate', title: 'homepage:projects.categories.real-estate' },
    // { value: 'saas platform developing', title: 'homepage:projects.categories.saas-platform-developing' },
    { value: 'energetics', title: 'homepage:projects.categories.energetics' },
    { value: 'sport', title: 'homepage:projects.categories.sport' },
] as const
