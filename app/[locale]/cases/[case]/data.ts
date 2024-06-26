import { CaseData } from '@/components/pages/case/blocksMapper/CaseBlocksMapper'

export const saasPlatformData = {
    firstScreen: {
        image: '',
        title: 'qwrw',
        description: 'werwe',
        category: 'web-development',
    },
    caseInfo: {
        customerAvatar: '/images/cases/customer_avatar.png',
    },
    caseOutcome: {
        image: '',
    },
}

export const casesDataRu: CaseData[] = [
    {
        card: {
            tags: [],
            title: '',
            image: '',
            category: '',
        },
        config: [
            {
                block: 'firstScreen',
                props: {
                    category: 'Производство и энергетика',
                    description:
                        'Платформа для автоматизированной генерации рекомендаций о смене тарифа энергопотребления для бизнесов.',
                    image: '',
                    title: '',
                },
            },
            {
                block: 'caseHighlightCards',
                props: {
                    cards: [
                        {
                            title: '5+',
                            description: 'разработчиков по разработке серверной части',
                            actionButton: { text: 'Back-end разработка', href: '/service/backend-development' },
                        },
                        {
                            title: 'М size',
                            description: 'размер команды включает 5+ разработчиков',
                            actionButton: { text: 'аустаффинг', href: '/service/backend-development' },
                        },
                        {
                            title: '90%',
                            description: 'специалисты Middle и Senior',
                        },
                    ],
                    title: 'Команда разработки',
                    description:
                        'Основной объем работ по этому проекту был выделен заказчиком нам для разработки серверной части. Таким образом, в команде размером M большинство разработчиков были задействованы в разработке серверной части',
                },
            },
        ],
    },
]

export const allCasesData: Record<string, CaseData[]> = {
    ru: casesDataRu,
}
