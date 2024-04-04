import { cn } from '@/lib/classNames'
import { FC } from 'react'

type Props<T> = {
    Component: FC<T>
    data: T[]
    keyForComponent: (data: T, index: number) => string
    slideAnimationDuration?: number
    isOverlayAdded?: boolean
    classes?: { wrapper?: string; itemsContainer?: string }
}

type InfiniteSliderFunc = <T>(props: Props<T>) => JSX.Element

const InfiniteSlider: InfiniteSliderFunc = ({
    Component,
    data,
    keyForComponent,
    slideAnimationDuration = 3,
    isOverlayAdded = false,
    classes,
}) => {
    return (
        <div className={cn('relative flex select-none gap-5 overflow-hidden', classes?.wrapper)}>
            {isOverlayAdded && <div className="marque-overlay absolute h-full w-full" />}
            <div
                style={{ animationDuration: `${slideAnimationDuration * data.length}s` }}
                className={cn('animate-marquee flex min-w-full shrink-0 justify-around gap-5', classes?.itemsContainer)}
            >
                {data.map((props, i) => (
                    <Component key={keyForComponent(props, i)} {...props} index={i} />
                ))}
            </div>
            <div
                style={{ animationDuration: `${slideAnimationDuration * data.length}s` }}
                className={cn('animate-marquee flex min-w-full shrink-0 justify-around gap-5', classes?.itemsContainer)}
            >
                {data.map((props, i) => (
                    <Component key={keyForComponent(props, i + data.length)} {...props} index={i + data.length} />
                ))}
            </div>
        </div>
    )
}

export default InfiniteSlider
