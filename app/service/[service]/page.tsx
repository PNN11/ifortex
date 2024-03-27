import { ServiceLink } from '@/components/layout/header/service/serviceMenu'
import Partners from '@/components/pages/home/partners'
import Projects from '@/components/pages/home/projects'
import Reviews from '@/components/pages/home/reviews'
import AboutService from '@/components/pages/service/about/aboutService'
import ServiceFirstScreen from '@/components/pages/service/firstScreen/serviceFirstScreen'

const serviceMock = {
    'web-development': {
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
        },
    },
}

export default function Home({ params }: { params: { service: ServiceLink } }) {
    const data = serviceMock[params.service]

    // console.log(data)

    return (
        <main className="">
            <ServiceFirstScreen service={params.service} {...data.firstScreen} />
            <AboutService {...data.aboutService} />
            <Projects />
            <Reviews />
            <Partners />
        </main>
    )
}
