'use client'
import { Icons } from '@/components/svg'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'
import ServiceModal from './servicesModal'
import { useModal } from '@/hooks/useModal'

const ServiceDropdown: FC = () => {
    const pathname = usePathname()
    const [isOpen, open, close] = useModal()

    return (
        <div className="flex cursor-pointer items-center gap-1.5" onClick={() => (isOpen ? close() : open())}>
            <span
                className={`${pathname.includes('service') ? 'text-base-1' : 'text-base-7'} text-2xl font-light leading-none`}
            >
                Service
            </span>
            <Icons.ChevronDown className="h-6 w-6 text-base-7" />
            {isOpen && <ServiceModal isOpen={isOpen} onClose={close} />}
        </div>
    )
}

export default ServiceDropdown
