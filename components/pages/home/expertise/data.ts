export type TExpertise = (typeof expertise)[number]

// export const expertise = ['websites', 'fintech', 'apps', 'e-commerce', 'hospitability', 'edtech'] as const
export const expertise = ['medicine', 'fintech', 'edtech', 'e-commerce'] as const

export const expertiseDescription: Record<TExpertise, { description: string; technologies: string[] }> = {
    'e-commerce': {
        description: 'expertise.description.e-commerce',
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
    medicine: {
        description: 'expertise.description.medicine',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS'],
    },
}
