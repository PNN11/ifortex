export type TExpertise = (typeof expertise)[number]

export const expertise = ['websites', 'fintech', 'apps', 'e-commerce', 'hospitability', 'edtech'] as const

export const expertiseDescription: Record<TExpertise, { description: string; technologies: string[] }> = {
    websites: {
        description:
            'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS'],
    },
    'e-commerce': {
        description:
            'Transform the financial world q with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS'],
    },
    apps: {
        description:
            'Transform the financial world w with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS'],
    },
    edtech: {
        description:
            'Transform the financial world e with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS'],
    },
    fintech: {
        description:
            'Transform the financial world r with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS'],
    },
    hospitability: {
        description:
            'Transform the financial world t with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.',
        technologies: ['HTML5', 'CSS3', 'JS', 'ReactJS', 'NextJS'],
    },
}
