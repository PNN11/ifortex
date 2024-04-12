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
import TranslationsProvider from '@/components/providers/locales'
import initTranslations from '@/app/i18n'

export default async function Home({
    params: { locale, service },
}: {
    params: { service: ServiceLink; locale: string }
}) {
    const namespaces = [`services/web-development-service`, 'homepage', 'contacts']
    const data = serviceMock[service]
    const { resources } = await initTranslations(locale, namespaces)

    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main className="">
                <ServiceFirstScreen />
                <AboutService />
                <OurWorkflow />
                <TechStack {...data.techStack} />
                <StartProject />
                <Projects />
                <Reviews />
                <Partners />
                <ContactFormSection containerSize="m" />
            </main>
        </TranslationsProvider>
    )
}
