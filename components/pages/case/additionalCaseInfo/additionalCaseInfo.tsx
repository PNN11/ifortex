'use client'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import Container from '@/components/ui/wrappers/container'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const AdditionalCaseInfo: FC = () => {
    const { t } = useTranslation()

    return (
        <section className="py-10 sm:py-15 lg:py-20 xl:py-25">
            <Container>
                <div className="max-w-156.75">
                    <Heading variant="h2" className="mb-10">
                        {t('additional-info.title')}
                    </Heading>
                    <Paragraph variant="p1">{t('additional-info.description')}</Paragraph>
                </div>
            </Container>
        </section>
    )
}

export default AdditionalCaseInfo
