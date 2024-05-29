'use server'
import contactFormRepository from '@/server/repositories/contactForm/contactForm.repository'
import { ContactFormCollectionSchema } from '@/server/repositories/contactForm/types'
import { GetPaginatedResponseParams } from '@/server/repositories/types'

export const sendContactForm = async (doc: ContactFormCollectionSchema) => {
    const res = await contactFormRepository._insertOne(doc)

    return { _id: res.insertedId.toJSON() }
}

export const getAllContactForms = async ({ limit, offset }: GetPaginatedResponseParams) => {
    return await contactFormRepository._getAllByQueryPaginated({ limit, offset })
}
