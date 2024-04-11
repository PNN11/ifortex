'use client'
import Button from '@/components/ui/buttons/defaultButton/button'
import ConsultationWrapper from '@/components/ui/wrappers/consultationWrapper'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type StartProjectProps = {}

const getButtonSize = (width: number) => {
    if (width < ScreenWidths.L) return 's'
    if (width >= ScreenWidths.L && width < ScreenWidths['2XL']) return 'md'
    return 'm'
}

const StartProject: FC<StartProjectProps> = () => {
    const { width } = useWindowSize()
    const { t } = useTranslation()

    return (
        <ConsultationWrapper
            title={
                <>
                    {t('start-project.ready')} <span className="text-base-1">{t('start-project.start')}</span>?
                </>
            }
            description={t('start-project.description')}
            classes={{ icon: 'left-183.75 xl:left-183.75' }}
        >
            <Button size={getButtonSize(width)} variant="outlined" withIcon className="w-full lg:w-165.5 2xl:w-184">
                {t('start-project.action-button-title')}
            </Button>
        </ConsultationWrapper>
    )
}

export default StartProject
