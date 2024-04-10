'use client'
import { Icons } from '@/components/svg'
import { gilroy } from '@/fonts'
import { cn } from '@/lib/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type ContactInfoProps = {
    classes?: { wrapper?: string; paragraph?: string; icon?: string }
}

const ContactInfo: FC<ContactInfoProps> = ({ classes }) => {
    const { t } = useTranslation()
    return (
        <div className={cn('flex items-baseline gap-8.5', classes?.wrapper)}>
            <Icons.BelarusFlag className={cn('translate-y-1', classes?.icon)} />
            <p
                className={cn(
                    'flex flex-col gap-1 text-xl leading-8.25 tracking-button-l text-base-4',
                    classes?.paragraph,
                    gilroy.className
                )}
            >
                <span className="text-base-6">{t('contacts:city')}</span>
                <span>{t('contacts:street', { number: 25 })}</span>
                <a href="mailto:hello@ifortex.com">hello@ifortex.com</a>
                <a href="tel:+ 1 543 625 42 24">+ 1 543 625 42 24</a>
            </p>
        </div>
    )
}

export default ContactInfo
