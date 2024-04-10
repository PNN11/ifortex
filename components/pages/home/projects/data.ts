import { Project } from './types'

export type ProjectCategory = (typeof projectCategories)[number]['value']

export const projectCategories = [
    { value: 'all', title: 'homepage:projects.categories.all' },
    { value: 'ai tech', title: 'homepage:projects.categories.ai-tech' },
    { value: 'web', title: 'homepage:projects.categories.web' },
    { value: 'apps', title: 'homepage:projects.categories.apps' },
    { value: 'fintech development', title: 'homepage:projects.categories.fintech-development' },
    { value: 'logistics software', title: 'homepage:projects.categories.logistics-software' },
    { value: 'healthcare', title: 'homepage:projects.categories.healthcare' },
    { value: 'e-commerce projects', title: 'homepage:projects.categories.e-commerce-projects' },
    { value: 'travel', title: 'homepage:projects.categories.travel' },
    { value: 'edtech platforms', title: 'homepage:projects.categories.edtech-platforms' },
    { value: 'real estate', title: 'homepage:projects.categories.real-estate' },
    { value: 'saas platform developing', title: 'homepage:projects.categories.saas-platform-developing' },
] as const

export const projectsMock: Record<ProjectCategory, Project[]> = {
    all: [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
    'ai tech': [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
    web: [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
    apps: [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
    'fintech development': [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
    'logistics software': [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
    healthcare: [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
    'e-commerce projects': [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
    travel: [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
    'edtech platforms': [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
    'real estate': [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
    'saas platform developing': [
        {
            title: 'Saas platform',
            tags: ['travel', 'big data', 'web', 'mobile app', 'ui/ux', 'product design', 'MVP', 'database migration'],
            image: '/images/home/saas_platform.png',
        },
        {
            title: 'Crypto wallet',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/crypto_wallet.png',
        },
        {
            title: 'Dating app',
            tags: ['crypto', 'product design', 'MVP', 'CTO service', 'ai tech', 'ui/ux'],
            image: '/images/home/dating_app.png',
        },
        {
            title: 'Saas platform',
            tags: ['web', 'mobile app', 'ui/ux'],
            image: '/images/home/saas_platform_2.png',
        },
    ],
}
