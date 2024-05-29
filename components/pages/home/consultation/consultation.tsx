'use client'
import Input from '@/components/ui/inputs/defaultInput/input'
import ConsultationWrapper from '@/components/ui/wrappers/consultationWrapper'
import { useWindowSize } from '@/hooks/useWindowSize'
import { requestConsultationByEmail } from '@/server/actions/consultation'
import { ScreenWidths } from '@/types/common'
import { FC, FormEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

const Consultation: FC = () => {
    const { width } = useWindowSize()
    const { t } = useTranslation()

    const onSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const email = formData.get('email') as string

        requestConsultationByEmail({ email })
            .then(data => {
                if (data._id) form.reset()
            })
            .catch(console.error)
    }

    return (
        <ConsultationWrapper
            description={t('consultation.description')}
            title={
                <>
                    {t('consultation.get')} <span className="text-base-1">{t('consultation.free')}</span>{' '}
                    {t('consultation.consultation')}
                </>
            }
        >
            <form onSubmit={onSubmit} className="max-w-158">
                <Input
                    inputSize={width >= ScreenWidths.M ? 'l' : 's'}
                    withIcon
                    placeholder={t('consultation.input-placeholder')}
                    iconButtonType="submit"
                    required
                    type="email"
                    name="email"
                />
            </form>
        </ConsultationWrapper>
    )
}

export default Consultation
