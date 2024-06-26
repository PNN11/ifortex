'use client'

import { useRouter, usePathname } from 'next/navigation'

import { useTranslation } from 'react-i18next'
import i18nConfig from '@/i18nConfig'
import { ChangeEventHandler } from 'react'

export default function LanguageChanger() {
    const { i18n } = useTranslation()
    const currentLocale = i18n.language
    const router = useRouter()
    const currentPathname = usePathname()

    const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
        const newLocale = e.target.value

        // set cookie for next-i18n-router
        const days = 30
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        const expires = date.toUTCString()
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

        // redirect to the new locale path
        if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            router.push('/' + newLocale + currentPathname)
        } else {
            router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
        }

        router.refresh()
    }

    return (
        <select className="" onChange={handleChange} value={currentLocale}>
            <option value="en">En</option>
            <option value="ru">Ру</option>
        </select>
    )
}
