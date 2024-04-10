import initTranslations from '@/app/i18n'
import ContactFormSection from '@/components/pages/contacts/contactForm'
import ContactsFirstScreen from '@/components/pages/contacts/firstScreen/contactsFirstScreen'
import TranslationsProvider from '@/components/providers/locales'

const namespaces = ['contacts']

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { resources } = await initTranslations(locale, namespaces)
    return (
        <TranslationsProvider locale={locale} namespaces={namespaces} resources={resources}>
            <main>
                <ContactsFirstScreen />
                <ContactFormSection />
            </main>
        </TranslationsProvider>
    )
}
