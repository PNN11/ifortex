import { Icons } from '@/components/svg'
import Heading from '@/components/ui/typography/heading'
import { gilroy } from '@/fonts'
import { cn } from '@/lib/classNames'
import { formatNumber } from '@/lib/formatNumber'
import { FC } from 'react'

type StepCardProps = {
    title: string
    description: string
    number: number
}

const StepCard: FC<StepCardProps> = ({ description, number, title }) => {
    return (
        <div className="group relative cursor-pointer">
            <div className="absolute bottom-0 right-0 h-0.75 w-0.75 bg-base-4 group-hover:bg-base-2" />
            <div
                className="provided-service-clip h-full bg-provided-service-gradient pb-17.5 pl-6 pr-6 pt-7
            transition-all duration-300 group-hover:bg-grad-2 md:pb-13.5 md:pl-8.5 md:pr-7 md:pt-8.5 xl:pb-8.5"
            >
                <Heading variant="h4" className="mb-5 text-base-4">
                    #{formatNumber(number, { minimumIntegerDigits: 2 })}
                </Heading>
                <Heading variant="h3" className="mb-4">
                    {title}
                </Heading>
                <p className={cn('mb-2.5 text-base text-white', gilroy.className)}>{description}</p>
                <div className="flex items-center">
                    <Icons.Lines.Hypotenuse className="mr-4.75 text-base-4 sm:mr-12" />
                    {/* <div className="flex grow items-center justify-between opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <p className="text-lg uppercase leading-none tracking-button-m text-base-5 sm:text-xl">
                            get service
                        </p>
                        <div className="flex h-12 w-12.75 items-center justify-center bg-base-1">
                            <Icons.Arrows.ArrowUpRight className="h-7 w-7 text-base-3" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default StepCard
