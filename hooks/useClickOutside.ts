import { MutableRefObject, RefObject, useEffect } from 'react'

const useClickOutside = <T extends HTMLElement>({
    ref,
    callback,
    enabled,
}: {
    ref: RefObject<T>
    enabled: boolean
    callback: () => void
}) => {
    useEffect(() => {
        const onClick = (e: any): void => {
            if (!ref.current!.contains(e.target)) callback()
        }

        if (enabled) {
            document.addEventListener('click', onClick)
        } else document.removeEventListener('click', onClick)

        return () => document.removeEventListener('click', onClick)
    }, [enabled, callback, ref])
}

export default useClickOutside
