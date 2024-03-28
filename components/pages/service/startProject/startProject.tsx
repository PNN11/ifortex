'use client'
import Button from '@/components/ui/buttons/defaultButton/button'
import ConsultationWrapper from '@/components/ui/wrappers/consultationWrapper'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import { FC } from 'react'

type StartProjectProps = {
    description: string
    actionButton: { title: string }
}

const getButtonSize = (width: number) => {
    if (width < ScreenWidths.L) return 's'
    if (width >= ScreenWidths.L && width < ScreenWidths['2XL']) return 'md'
    return 'm'
}

const StartProject: FC<StartProjectProps> = ({ description, actionButton }) => {
    const { width } = useWindowSize()

    return (
        <ConsultationWrapper
            title={
                <>
                    ready to <span className="text-base-1">start</span>?
                </>
            }
            description={description}
            classes={{ icon: 'left-183.75 xl:left-183.75' }}
        >
            <Button size={getButtonSize(width)} variant="outlined" withIcon className="lg:w-165.5 2xl:w-184 w-full">
                {actionButton.title}
            </Button>
        </ConsultationWrapper>
    )
}

export default StartProject
