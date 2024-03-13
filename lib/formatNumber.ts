export const formatNumber = (
    number: number,
    options?: Intl.NumberFormatOptions & { locales?: string | string[] }
): string => {
    const formatter = new Intl.NumberFormat(options?.locales ?? 'en', options)

    return formatter.format(number)
}
