'use server'
import contactFormRepository from '@/server/repositories/contactForm/contactForm.repository'
import { GetPaginatedResponseParams } from '@/server/repositories/types'

export const sendContactForm = async ({ name, email, message }: { name: string; email: string; message: string }) => {
    const res = await contactFormRepository._insertOne({ name, email, message })

    return { _id: res.insertedId.toJSON() }
}

export const getAllContactForms = async ({ limit, offset }: GetPaginatedResponseParams) => {
    return await contactFormRepository._getAllByQueryPaginated({ limit, offset })
}
