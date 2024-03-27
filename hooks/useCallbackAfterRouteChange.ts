import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const useCallbackAfterRouteChange = (callback: () => void) => {
    const currentPath = useRef('')
    const pathname = usePathname()

    useEffect(() => {
        if (currentPath.current === '') {
            currentPath.current = pathname
            return
        }
        if (currentPath.current !== pathname) callback()
    }, [pathname, callback])
}

export default useCallbackAfterRouteChange
