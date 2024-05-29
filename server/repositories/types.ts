import { Document } from 'mongodb'

export type GetPaginatedResponseParams = {
    limit: string
    offset: string
}

export type GetAllByQueryParams = { filter?: Document }

export type BaseGetAllByQueryPaginatedParams = GetAllByQueryParams & GetPaginatedResponseParams

export type GetAllByQueryPaginatedParams = BaseGetAllByQueryPaginatedParams
