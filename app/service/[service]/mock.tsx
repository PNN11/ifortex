import { ServiceLink } from '@/components/layout/header/service/serviceMenu'
import Tech1 from '../../../public/images/service/tech_1.png'
import Tech2 from '../../../public/images/service/tech_2.png'
import Tech3 from '../../../public/images/service/tech_3.png'
import Tech4 from '../../../public/images/service/tech_4.png'
import Tech5 from '../../../public/images/service/tech_5.png'
import Tech6 from '../../../public/images/service/tech_6.png'
import { ServicePageContent } from '@/types/servicePage'

const mockData = {
    firstScreen: {
        title: (
            <>
                Lorem ipsum dolor <span className="text-base-1">sit</span> amet
            </>
        ),
        description:
            'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla pellentesque faucibus elementum.',
        actionButton: { title: 'start web project' },
    },
    aboutService: {
        description:
            'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla.',
        experience: [
            { title: 'years on', value: '5' },
            { title: 'years on', value: '5' },
            { title: 'years on', value: '5' },
        ],
        providedServices: [
            {
                title: 'Lorem ipsum dolor',
                description:
                    'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla. ',
            },
            {
                title: 'Lorem ipsum dolor',
                description:
                    'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla. ',
            },
            {
                title: 'Lorem ipsum dolor',
                description:
                    'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla. ',
            },
            {
                title: 'Lorem ipsum dolor',
                description:
                    'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla. ',
            },
        ],
    },
    workflow: {
        description:
            'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies, from payments to wealth management. Let us help you revolutionize the financial industry.',
        stages: [
            {
                title: 'title',
                description:
                    'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies',
            },
            {
                title: 'title',
                description:
                    'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies',
            },
            {
                title: 'title',
                description:
                    'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies',
            },
            {
                title: 'title',
                description:
                    'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies',
            },
            {
                title: 'title',
                description:
                    'Transform the financial world with innovative digital solutions. Our team has extensive experience in creating custom web and mobile applications for FinTech companies',
            },
        ],
    },
    techStack: {
        description:
            'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla.',
        items: [
            {
                name: 'frontend',
                description:
                    'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla. ',
                technologies: [
                    { image: Tech1, name: 'tech 1' },
                    { image: Tech2, name: 'tech 2' },
                    { image: Tech3, name: 'tech 3' },
                    { image: Tech4, name: 'tech 4' },
                    { image: Tech5, name: 'tech 5' },
                    { image: Tech6, name: 'tech 6' },
                ],
            },
            {
                name: 'backend',
                description:
                    'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla. ',
                technologies: [
                    { image: Tech1, name: 'tech 1' },
                    { image: Tech2, name: 'tech 2' },
                    { image: Tech3, name: 'tech 3' },
                    { image: Tech4, name: 'tech 4' },
                    { image: Tech5, name: 'tech 5' },
                    { image: Tech6, name: 'tech 6' },
                ],
            },
            {
                name: 'design',
                description:
                    'Lorem ipsum dolor sit amet consectetur. Sed tempus turpis nec sapien. Diam aliquam lectus nulla ultricies sagittis nullam praesent id ut. Arcu dignissim libero ridiculus fermentum amet nulla. ',
                technologies: [
                    { image: Tech1, name: 'tech 1' },
                    { image: Tech2, name: 'tech 2' },
                    { image: Tech3, name: 'tech 3' },
                    { image: Tech4, name: 'tech 4' },
                    { image: Tech5, name: 'tech 5' },
                    { image: Tech6, name: 'tech 6' },
                ],
            },
        ],
    },
    startProject: {
        description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus proin libero pellentesque elit. ',
        actionButton: {
            title: 'Start web project',
        },
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
