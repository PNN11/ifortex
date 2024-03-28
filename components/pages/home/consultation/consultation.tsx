import Input from '@/components/ui/inputs/defaultInput/input'
import ConsultationWrapper from '@/components/ui/wrappers/consultationWrapper'
import { FC } from 'react'

const Consultation: FC = () => {
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
                <Input withIcon placeholder="YOUR EMAIL" />
            </form>
        </ConsultationWrapper>
    )
}

export default Consultation
