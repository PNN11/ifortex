import { useEffect } from 'react'

const useAddOrRemoveBodyOverflow = (isOpen: boolean): void => {
    useEffect(() => {
        const padding = window.innerWidth - document.body.clientWidth

        if (isOpen) {
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = `${padding}px`
        } else {
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = '0'
        }

        return () => {
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = '0'
        }
    }, [isOpen])
}

export default useAddOrRemoveBodyOverflow
