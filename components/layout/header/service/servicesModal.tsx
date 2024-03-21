import { ModalOverlay } from '@/components/modals/overlay'
import { FC, useEffect, useRef } from 'react'
import ServiceMenu from './serviceMenu'
import useClickOutside from '@/hooks/useClickOutside'

type ServicesModalProps = {
    isOpen: boolean
    onClose: () => void
}

const ServicesModal: FC<ServicesModalProps> = ({ isOpen, onClose }) => {
    const ref = useRef<HTMLDivElement>(null)

    useClickOutside({ ref, callback: onClose, enabled: isOpen })

    return (
        <ModalOverlay isOpen={isOpen} onClose={onClose} className="items-start">
            <div ref={ref} className="pt-45 flex w-full border-t border-base-1 bg-base-3/90 pb-17 xl:border-none">
                <div className="xl:w-162 2xl:187.5 h-px" />
                <div className="3xl:pl-31.75 xl:pl-26.75 hidden pl-21.5 pr-2.5 pt-11.25 lg:block lg:border-l lg:border-l-base-2 2xl:pl-22">
                    <ServiceMenu />
                </div>
            </div>
        </ModalOverlay>
    )
}

export default ServicesModal
