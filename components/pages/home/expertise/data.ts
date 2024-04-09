export type TExpertise = (typeof expertise)[number]

export const expertise = ['websites', 'fintech', 'apps', 'e-commerce', 'hospitability', 'edtech'] as const

export const expertiseDescription: Record<TExpertise, { description: string; technologies: string[] }> = {
    websites: {
        description: 'expertise.description.websites',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS'],
    },
    'e-commerce': {
        description: 'expertise.description.e-commerce',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS'],
    },
    apps: {
        description: 'expertise.description.apps',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS'],
    },
    edtech: {
        description: 'expertise.description.edtech',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS'],
    },
    fintech: {
        description: 'expertise.description.fintech',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS'],
    },
    hospitability: {
        description: 'expertise.description.hospitability',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS'],
    },
}
