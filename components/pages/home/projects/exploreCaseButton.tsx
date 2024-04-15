import { Icons } from '@/components/svg'
import { michroma } from '@/fonts'
import { cn } from '@/lib/classNames'
import { FC, ReactNode } from 'react'

type ExploreCaseButtonProps = {
    children: ReactNode
    className?: string
    classes?: { icon?: string; button?: string }
}

const ExploreCaseButton: FC<ExploreCaseButtonProps> = ({ children, className = '', classes }) => {
    return (
        <div className={cn('flex items-center', className)}>
            <Icons.Lines.Hypotenuse className={cn('mr-7 h-5 w-5 rotate-90 text-base-4', classes?.icon)} />
            <button
                className={cn(
                    'mr-4.5 h-12 text-xl uppercase leading-none tracking-button-m text-base-5',
                    michroma.className,
                    classes?.button
                )}
            >
                {children}
            </button>
            <div className="flex h-12 w-12.75 items-center justify-center bg-base-5">
                <Icons.Arrows.ArrowUpRight className="h-7 w-7 text-base-3" />
            </div>
        </div>
    )
}

export default ExploreCaseButton
