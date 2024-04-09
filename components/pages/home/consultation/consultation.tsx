'use client'
import Input from '@/components/ui/inputs/defaultInput/input'
import ConsultationWrapper from '@/components/ui/wrappers/consultationWrapper'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Consultation: FC = () => {
    const { width } = useWindowSize()
    const { t } = useTranslation()

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
            <form className="max-w-158">
                <Input
                    inputSize={width >= ScreenWidths.M ? 'l' : 's'}
                    withIcon
                    placeholder={t('consultation.input-placeholder')}
                />
            </form>
        </ConsultationWrapper>
    )
}

export default Consultation
