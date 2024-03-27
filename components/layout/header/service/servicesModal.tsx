import { ModalOverlay } from '@/components/modals/overlay'
import useCallbackAfterRouteChange from '@/hooks/useCallbackAfterRouteChange'
import useClickOutside from '@/hooks/useClickOutside'
import { FC, useRef } from 'react'
import ServiceMenu from './serviceMenu'

type ServicesModalProps = {
    isOpen: boolean
    onClose: () => void
}

const ServicesModal: FC<ServicesModalProps> = ({ isOpen, onClose }) => {
    const ref = useRef<HTMLDivElement>(null)

    useCallbackAfterRouteChange(onClose)

    useClickOutside({ ref, callback: onClose, enabled: isOpen })

    return (
        <ModalOverlay isOpen={isOpen} onClose={onClose} className="items-start">
            <div ref={ref} className="flex w-full border-t border-base-1 bg-base-3/90 pb-17 pt-45 xl:border-none">
                <div className="2xl:187.5 h-px xl:w-162" />
                <div className="hidden pl-21.5 pr-2.5 pt-11.25 lg:block lg:border-l lg:border-l-base-2 xl:pl-26.75 2xl:pl-22 3xl:pl-31.75">
                    <ServiceMenu />
                </div>
            </div>
        </ModalOverlay>
    )
}

export default ServicesModal
