'use client'
import Button from '@/components/ui/buttons/defaultButton'
import Input from '@/components/ui/inputs/defaultInput'
import TextArea from '@/components/ui/inputs/defaultTextArea'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const getSize = (width: number) => {
    if (width < ScreenWidths.M) return 's'
    if (width >= ScreenWidths.M && width < ScreenWidths['2XL']) return 'm'
    return 'l'
}

const ContactForm: FC = () => {
    const { width } = useWindowSize()
    const { t } = useTranslation()

    return (
        <form>
            <div className="mb-16 flex flex-col gap-3 md:mb-32 md:gap-7">
                <Input inputSize={getSize(width)} name="name" placeholder={t('contacts:form.name')} />
                <Input inputSize={getSize(width)} name="email" placeholder={t('contacts:form.email')} />
                <TextArea
                    inputSize={getSize(width)}
                    name="projectDescription"
                    placeholder={t('contacts:form.message')}
                />
            </div>
            <Button size={getSize(width)} className="w-full" withIcon>
                {t('contacts:form.send')}
            </Button>
        </form>
    )
}

export default ContactForm
