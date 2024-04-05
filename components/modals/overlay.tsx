import { FC, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react'

import ReactDOM from 'react-dom'

import useAddOrRemoveBodyOverflow from '@/hooks/useAddOrRemoveBodyOverflow'
import { cn } from '@/lib/classNames'
import { WithClassName } from '@/types/common'

type PropsType = WithClassName<{
    isOpen: boolean
    children: any
    onClose?: () => void
}>
export const ModalOverlay: FC<PropsType> = ({ children, onClose, isOpen, className = '' }) => {
    const [container, setContainer] = useState(undefined)

    useEffect(() => {
        setContainer(document.querySelector('#modals') as SetStateAction<any>)
    }, [])

    const ref = useRef() as MutableRefObject<HTMLDivElement>

    const handleClick = (e: any) => {
        e.stopPropagation()

        if (e.target === ref.current) {
            const animation = ref.current?.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 500,
                fill: 'forwards',
            })

            animation?.addEventListener('finish', () => onClose?.())
        }
    }

    useAddOrRemoveBodyOverflow(isOpen)

    if (!container || !children || !isOpen) return null

    return (
        <>
            {ReactDOM.createPortal(
                <div
                    id="modal"
                    ref={ref}
                    onClick={handleClick}
                    className={cn(
                        'translate-z-12 fixed inset-0 z-10 flex animate-expertise-fade-in items-center justify-center overflow-y-auto bg-base-3/65 p-4',
                        className
                    )}
                >
                    {children}
                </div>,
                container
            )}
        </>
    )
}
