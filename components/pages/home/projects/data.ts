import { Project } from './types'

export type ProjectCategory = (typeof projectCategories)[number]

export const projectCategories = [
    'all',
    'ai tech',
    'web',
    'apps',
    'fintech development',
    'logistics software',
    'healthcare',
    'e-commerce projects',
    'travel',
    'edtech platforms',
    'real estate',
    'saas platform developing',
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
