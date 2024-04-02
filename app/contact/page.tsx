import ContactFormSection from '@/components/pages/contacts/contactForm'
import ContactsFirstScreen from '@/components/pages/contacts/firstScreen/contactsFirstScreen'

export default function Home() {
    return (
        <main>
            <ContactsFirstScreen />
            <ContactFormSection />
        </main>
    )
}
