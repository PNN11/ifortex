import { Icons } from '@/components/svg'
import { michroma } from '@/fonts'
import { cn } from '@/lib/classNames'
import { FC, ReactNode } from 'react'

type ExploreCaseButtonProps = {
    children: ReactNode
}

const ExploreCaseButton: FC<ExploreCaseButtonProps> = ({ children }) => {
    return (
        <div className="flex items-center">
            <Icons.Lines.Hypotenuse className="mr-7 h-5 w-5 rotate-90 text-base-4" />
            <button
                className={cn(
                    'mr-4.5 h-12 text-xl uppercase leading-none tracking-button-m text-base-5',
                    michroma.className
                )}
            >
                {children}
            </button>
            <div className="w-12.75 flex h-12 items-center justify-center bg-base-5">
                <Icons.Arrows.ArrowUpRight className="h-7 w-7 text-base-3" />
            </div>
        </div>
    )
}

export default ExploreCaseButton
