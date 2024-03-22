import { useLayoutEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

type Size = {
    width: number
    height: number
}

export const useWindowSize = (): Size => {
    const [windowSize, setWindowSize] = useState<Size>({
        width: 0,
        height: 0,
    })

    const handleResize = useDebouncedCallback(() => {
        const newWindowSize = {
            width: window.innerWidth,
            height: window.innerHeight,
        }

        setWindowSize(newWindowSize)
    }, 100)

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])

    return windowSize
}
