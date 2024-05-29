'use client'
import Button from '@/components/ui/buttons/defaultButton'
import Input from '@/components/ui/inputs/defaultInput'
import TextArea from '@/components/ui/inputs/defaultTextArea'
import { useWindowSize } from '@/hooks/useWindowSize'
import { sendContactForm } from '@/server/actions/contactForm'
import { ScreenWidths } from '@/types/common'
import React, { FC, FormEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

type SubmitFormValues = { email: string; name: string; message: string }

const getSize = (width: number) => {
    if (width < ScreenWidths.M) return 's'
    if (width >= ScreenWidths.M && width < ScreenWidths['2XL']) return 'm'
    return 'l'
}

const ContactForm: FC = () => {
    const { width } = useWindowSize()
    const { t } = useTranslation()

    const onSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        const data = {} as SubmitFormValues

        formData.forEach((value, key) => (data[key as keyof SubmitFormValues] = value as string))

        sendContactForm({ ...data, date: new Date().toISOString() })
            .then(data => {
                if (data._id) form.reset()
            })
            .catch(console.error)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-16 flex flex-col gap-3 md:mb-32 md:gap-7">
                <Input inputSize={getSize(width)} name="name" placeholder={t('contacts:form.name')} required />
                <Input
                    inputSize={getSize(width)}
                    name="email"
                    placeholder={t('contacts:form.email')}
                    required
                    type="email"
                />
                <TextArea inputSize={getSize(width)} name="message" placeholder={t('contacts:form.message')} required />
            </div>
            <Button type="submit" size={getSize(width)} className="w-full" withIcon>
                {t('contacts:form.send')}
            </Button>
        </form>
    )
}

export default ContactForm
