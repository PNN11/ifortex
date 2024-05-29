'use server'
import subscriptionRepository from '@/server/repositories/subscribe/subscribe.repository'
import { GetPaginatedResponseParams } from '@/server/repositories/types'

export const subscribeToEmailNewsletter = async (email: string) => {
    const res = await subscriptionRepository._insertOne({ email })
    return { _id: res.insertedId.toJSON() }
}

export const getAllSubscriptions = async ({ limit, offset }: GetPaginatedResponseParams) => {
    return await subscriptionRepository._getAllByQueryPaginated({ limit, offset })
}
