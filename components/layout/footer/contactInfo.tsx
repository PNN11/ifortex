import { Icons } from '@/components/svg'
import Paragraph from '@/components/ui/typography/paragraph'
import { FC } from 'react'

const ContactInfo: FC = () => {
    return (
        <div className="flex items-baseline gap-8.5">
            <Icons.BelarusFlag className="translate-y-1" />
            <Paragraph variant="p1" className="flex flex-col gap-1 text-base-4">
                <span className="text-base-6">Minsk, Belarus</span>
                <span>Internacionalnaya 25A</span>
                <a href="mailto:hello@ifortex.com">hello@ifortex.com</a>
                <a href="tel:+ 1 543 625 42 24">+ 1 543 625 42 24</a>
            </Paragraph>
        </div>
    )
}

export default ContactInfo
