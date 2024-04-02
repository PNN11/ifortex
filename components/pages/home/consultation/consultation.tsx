'use client'
import Input from '@/components/ui/inputs/defaultInput/input'
import ConsultationWrapper from '@/components/ui/wrappers/consultationWrapper'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ScreenWidths } from '@/types/common'
import { FC } from 'react'

const Consultation: FC = () => {
    const { width } = useWindowSize()

    return (
        <ConsultationWrapper
            description="Lorem ipsum dolor sit amet consectetur. Rhoncus proin libero pellentesque elit."
            title={
                <>
                    Get <span className="text-base-1">free</span> consultation
                </>
            }
        >
            <form className="max-w-158">
                <Input inputSize={width >= ScreenWidths.M ? 'l' : 's'} withIcon placeholder="YOUR EMAIL" />
            </form>
        </ConsultationWrapper>
    )
}

export default Consultation
