import { ModalOverlay } from '@/components/modals/overlay'
import { FC, useEffect, useRef } from 'react'
import ServiceMenu from './serviceMenu'

type ServicesModalProps = {
    isOpen: boolean
    onClose: () => void
}

const ServicesModal: FC<ServicesModalProps> = ({ isOpen, onClose }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onClick = (e: any): void => {
            if (!ref.current!.contains(e.target)) onClose()
        }

        if (isOpen) {
            document.addEventListener('click', onClick)
        } else document.removeEventListener('click', onClick)

        return () => document.removeEventListener('click', onClick)
    }, [isOpen, onClose])

    return (
        <ModalOverlay isOpen={isOpen} onClose={onClose} className="top-28 h-[calc(100vh-7rem)] items-start">
            <div ref={ref} className="w-full border-t border-base-1 bg-base-3/90 pt-17">
                <div className="ml-auto max-w-[103.8125rem]">
                    <ServiceMenu />
                </div>
            </div>
        </ModalOverlay>
    )
}

export default ServicesModal
