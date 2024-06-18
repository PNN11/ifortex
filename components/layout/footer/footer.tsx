'use client'
import { Icons } from '@/components/svg'
import Input from '@/components/ui/inputs/defaultInput/input'
import Paragraph from '@/components/ui/typography/paragraph'
import { subscribeToEmailNewsletter } from '@/server/actions/subscribe'
import { FC, FormEventHandler } from 'react'
import { useTranslation } from 'react-i18next'
import ContactInfo from './contactInfo'
import { companyMenu, services } from './data'
import LinksGroup from './linksGroup'
import SocialIcons from './socialIcons'

const Footer: FC = () => {
    const { t } = useTranslation()

    const onSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const email = formData.get('email') as string

        subscribeToEmailNewsletter(email)
            .then(data => {
                if (data._id) form.reset()
            })
            .catch(console.error)
    }

    return (
        <footer className="self-end px-6 pb-16 pt-10 sm:px-7.5 lg:px-11 xl:px-0">
            <div className="grid grid-cols-1 justify-between gap-8 md:grid-cols-[minmax(max-content,36.4%),1fr] lg:grid-cols-[42%,1fr] xl:grid-cols-footer xl:gap-0">
                <div className="flex flex-col xl:pl-11.5 xl:pr-2 2xl:px-21">
                    <Icons.IFortexLogo className="mb-12" />

                    <div className="flex grow flex-col items-start justify-between xl:items-center">
                        <div className="flex flex-col justify-between">
                            <ContactInfo />
                        </div>
                        <Paragraph variant="footer-link" className="hidden text-center text-base-1 md:block">
                            ©️2024 iFORTEX
                        </Paragraph>
                    </div>
                </div>
                <div className="xl:pl-22 xl:pr-11.5 2xl:px-36.25">
                    <div className="mb-12 ml-auto flex w-full max-w-175.75 flex-col-reverse gap-12 2xl:mb-18.75 2xl:ml-0 2xl:max-w-273.75 2xl:flex-row 2xl:justify-between">
                        <div className="flex flex-col gap-16 lg:flex-row lg:gap-34.75 xl:gap-24.5">
                            <LinksGroup basePath="/service" title={t('common:footer.service')} links={services} />
                            <LinksGroup title={t('common:footer.company')} links={companyMenu} />
                        </div>
                        <div className="w-full 2xl:max-w-99">
                            <Paragraph variant="p2" className="mb-10 leading-none tracking-footer-link text-base-7">
                                {t('footer.subscribe')}
                            </Paragraph>
                            <form onSubmit={onSubmit} className="mb-9.5">
                                <Input
                                    inputSize="s"
                                    withIcon
                                    placeholder={t('footer.input-placeholder')}
                                    iconClassName="text-base-1"
                                    iconButtonType="submit"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </form>
                            <SocialIcons />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-8 gap-y-6 md:gap-x-17.5">
                        <Paragraph variant="footer-link" className="text-center text-base-1 md:hidden">
                            ©️2024 iFORTEX
                        </Paragraph>
                        <Paragraph variant="footer-link" className="text-base-1">
                            {t('footer.privacy')}
                        </Paragraph>
                        <Paragraph variant="footer-link" className="text-base-1">
                            {t('footer.cookie')}
                        </Paragraph>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
