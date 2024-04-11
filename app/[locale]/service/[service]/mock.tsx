import { ServiceLink } from '@/components/layout/header/service/serviceMenu'
import Tech1 from '../../../../public/images/service/tech_1.png'
import Tech2 from '../../../../public/images/service/tech_2.png'
import Tech3 from '../../../../public/images/service/tech_3.png'
import Tech4 from '../../../../public/images/service/tech_4.png'
import Tech5 from '../../../../public/images/service/tech_5.png'
import Tech6 from '../../../../public/images/service/tech_6.png'
import { ServicePageContent } from '@/types/servicePage'

const mockData = {
    techStack: {
        items: [
            {
                name: 'tech-stack.items.0.name',
                description: 'tech-stack.items.0.description',
                listTitle: 'tech-stack.items.0.list-title',
                technologies: [
                    { image: Tech1, name: 'tech-stack.items.0.technologies.0.name' },
                    { image: Tech2, name: 'tech-stack.items.0.technologies.1.name' },
                    { image: Tech3, name: 'tech-stack.items.0.technologies.2.name' },
                    { image: Tech4, name: 'tech-stack.items.0.technologies.3.name' },
                    { image: Tech5, name: 'tech-stack.items.0.technologies.4.name' },
                    { image: Tech6, name: 'tech-stack.items.0.technologies.5.name' },
                ],
            },
            {
                name: 'tech-stack.items.1.name',
                description: 'tech-stack.items.1.description',
                listTitle: 'tech-stack.items.1.list-title',
                technologies: [
                    { image: Tech1, name: 'tech-stack.items.1.technologies.0.name' },
                    { image: Tech2, name: 'tech-stack.items.1.technologies.1.name' },
                    { image: Tech3, name: 'tech-stack.items.1.technologies.2.name' },
                    { image: Tech4, name: 'tech-stack.items.1.technologies.3.name' },
                    { image: Tech5, name: 'tech-stack.items.1.technologies.4.name' },
                    { image: Tech6, name: 'tech-stack.items.1.technologies.5.name' },
                ],
            },
            {
                name: 'tech-stack.items.2.name',
                description: 'tech-stack.items.0.description',
                listTitle: 'tech-stack.items.2.list-title',
                technologies: [
                    { image: Tech1, name: 'tech-stack.items.2.technologies.0.name' },
                    { image: Tech2, name: 'tech-stack.items.2.technologies.1.name' },
                    { image: Tech3, name: 'tech-stack.items.2.technologies.2.name' },
                    { image: Tech4, name: 'tech-stack.items.2.technologies.3.name' },
                    { image: Tech5, name: 'tech-stack.items.2.technologies.4.name' },
                    { image: Tech6, name: 'tech-stack.items.2.technologies.5.name' },
                ],
            },
        ],
    },
}

export const serviceMock: Record<ServiceLink, ServicePageContent> = {
    'web-development': mockData,
    'mobile-development': mockData,
    'custom-software-development': mockData,
    'cloud-development': mockData,
    networking: mockData,
    'dedicated-team': mockData,
    'ui-ux-design': mockData,
    'software-testing': mockData,
    'business-analysis': mockData,
    devops: mockData,
    'machine-learning': mockData,
    'data-science': mockData,
}
