export type TExpertise = (typeof expertise)[number]

// export const expertise = ['websites', 'fintech', 'apps', 'e-commerce', 'hospitability', 'edtech'] as const
export const expertise = ['fintech', 'medicine', 'edtech', 'e-commerce', 'energetics', 'sport'] as const

export const expertiseDescription: Record<TExpertise, { description: string }> = {
    'e-commerce': {
        description: 'expertise.description.e-commerce',
    },

    edtech: {
        description: 'expertise.description.edtech',
    },
    fintech: {
        description: 'expertise.description.fintech',
    },
    medicine: {
        description: 'expertise.description.medicine',
    },
    energetics: {
        description: 'expertise.description.energetics',
    },
    sport: {
        description: 'expertise.description.sport',
    },
}
