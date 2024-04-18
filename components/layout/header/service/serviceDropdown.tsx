'use client'
import { Icons } from '@/components/svg'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'
import ServiceModal from './servicesModal'
import { useModal } from '@/hooks/useModal'
import { useTranslation } from 'react-i18next'
import { useModalsStore } from '@/store/modalState'

const ServiceDropdown: FC = () => {
    const pathname = usePathname()
    const { t } = useTranslation()
    const isOpen = useModalsStore(s => s.modalsState.service)
    const openModal = useModalsStore(s => s.openModal)
    const closeModal = useModalsStore(s => s.closeModal)

    return (
        <div
            className="flex cursor-pointer items-center gap-1.5"
            onClick={() => (isOpen ? closeModal('service') : openModal('service'))}
        >
            <span
                className={`${pathname.includes('service') ? 'text-base-1' : 'text-base-7'} text-2xl font-light leading-none hover:text-base-2`}
            >
                {t('common:header.menu-items.service')}
            </span>
            <Icons.ChevronDown className="h-6 w-6 text-base-7" />
            {isOpen && <ServiceModal isOpen={isOpen} onClose={close} />}
        </div>
    )
}

export default ServiceDropdown
