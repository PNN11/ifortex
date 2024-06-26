import { Project } from './types'

export type ProjectCategory = (typeof projectCategories)[number]['value']

export const projectCategories = [
    { value: 'all', title: 'homepage:projects.categories.all' },
    // { value: 'ai tech', title: 'homepage:projects.categories.ai-tech' },
    // { value: 'web', title: 'homepage:projects.categories.web' },
    // { value: 'apps', title: 'homepage:projects.categories.apps' },
    { value: 'fintech development', title: 'homepage:projects.categories.fintech-development' },
    // { value: 'logistics software', title: 'homepage:projects.categories.logistics-software' },
    { value: 'healthcare', title: 'homepage:projects.categories.healthcare' },
    { value: 'e-commerce projects', title: 'homepage:projects.categories.e-commerce-projects' },
    // { value: 'travel', title: 'homepage:projects.categories.travel' },
    { value: 'edtech platforms', title: 'homepage:projects.categories.edtech-platforms' },
    // { value: 'real estate', title: 'homepage:projects.categories.real-estate' },
    // { value: 'saas platform developing', title: 'homepage:projects.categories.saas-platform-developing' },
] as const

export const projectsEn: Project[] = [
    {
        title: 'Saas platform',
        tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
        image: '/images/home/saas_platform.png',
        href: 'saas-platform',
        category: 'fintech development',
    },
    {
        title: 'Crypto wallet',
        tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
        image: '/images/home/crypto_wallet.png',
        category: 'healthcare',
    },
    {
        title: 'Dating app',
        tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
        image: '/images/home/dating_app.png',
        href: 'dating-app',
        category: 'e-commerce projects',
    },
    {
        title: 'Saas platform',
        tags: ['web', 'mobile app', 'ui/ux'],
        image: '/images/home/saas_platform_2.png',
        category: 'edtech platforms',
    },
]

export const projectsRu: Project[] = [
    {
        title: 'MPX',
        tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
        image: '/images/home/saas_platform.png',
        category: 'fintech development',
        href: 'mpx-investment',
    },
    {
        title: 'Портал телемедицины для клиники мужского здоровья',
        tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
        image: '/images/home/crypto_wallet.png',
        category: 'healthcare',
        href: 'mens-health-clinic',
    },
    {
        title: 'Строительный гипермаркет в Канаде',
        tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
        image: '/images/home/dating_app.png',
        category: 'e-commerce projects',
        href: 'construction-hypermarket',
    },
    {
        title: 'Обучающая платформа нового поколения для студентов на основе ИИ',
        tags: ['web', 'mobile app', 'ui/ux'],
        image: '/images/home/saas_platform_2.png',
        category: 'edtech platforms',
        href: 'ai-education-platform',
    },
]

export const projectsList: Record<string, Project[]> = { en: projectsEn, ru: projectsRu }
