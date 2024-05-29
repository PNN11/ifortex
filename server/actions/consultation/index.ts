'use server'
import consultationRepository from '@/server/repositories/consultation/consultation.repository'
import { GetPaginatedResponseParams } from '@/server/repositories/types'

export const requestConsultationByEmail = async ({ email }: { email: string }) => {
    const res = await consultationRepository._insertOne({ email })

    return { _id: res.insertedId.toJSON() }
}

export const getAllConsultationRequests = async ({ limit, offset }: GetPaginatedResponseParams) => {
    return await consultationRepository._getAllByQueryPaginated({ limit, offset })
}
