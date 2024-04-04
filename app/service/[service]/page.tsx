import { ServiceLink } from '@/components/layout/header/service/serviceMenu'
import Partners from '@/components/pages/home/partners'
import Projects from '@/components/pages/home/projects'
import Reviews from '@/components/pages/home/reviews'
import AboutService from '@/components/pages/service/about/aboutService'
import ServiceFirstScreen from '@/components/pages/service/firstScreen/serviceFirstScreen'
import TechStack from '@/components/pages/service/techStack'
import OurWorkflow from '@/components/pages/service/workflow/ourWorkflow'
import StartProject from '@/components/pages/service/startProject'
import { serviceMock } from './mock'
import ContactFormSection from '@/components/pages/contacts/contactForm/contactFormSection'

export default function Home({ params }: { params: { service: ServiceLink } }) {
    const data = serviceMock[params.service]

    return (
        <main className="">
            <ServiceFirstScreen service={params.service} {...data.firstScreen} />
            <AboutService {...data.aboutService} />
            <OurWorkflow {...data.workflow} />
            <TechStack {...data.techStack} />
            <StartProject {...data.startProject} />
            <Projects />
            <Reviews />
            <Partners />
            <ContactFormSection containerSize="m" />
        </main>
    )
}
