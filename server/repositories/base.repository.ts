import { PaginateMapper } from '@/lib/paginate/paginate.mapper'
import { dataBase } from '../database'
import { BaseGetAllByQueryPaginatedParams, GetAllByQueryParams } from './types'
import { PaginateEntity, PaginateResult } from '@/lib/paginate/paginate.entity'
import { Document } from 'mongodb'

export default class BaseRepository {
    protected readonly dataBase = dataBase
    protected readonly collection

    constructor(collectionName: string) {
        this.collection = this.dataBase.collection(collectionName)
    }

    async _getAllByQuery({ filter }: GetAllByQueryParams) {
        return this.collection.find(filter ?? {}).toArray()
    }

    async _insertOne(doc: Document) {
        return this.collection.insertOne(doc)
    }

    async _getAllByQueryPaginated({ filter, limit, offset }: BaseGetAllByQueryPaginatedParams) {
        const totalDocs = await this.collection.countDocuments()

        const res = await this.collection
            .find(filter ?? {})
            .limit(+limit)
            .skip(+offset)
            .toArray()

        return PaginateMapper.mapToController(
            new PaginateResult(res, new PaginateEntity(Number(limit), Number(offset), totalDocs)),
            i => ({ ...i, _id: i._id.toJSON() })
        )
    }

    async _getCountByQuery({ filter }: GetAllByQueryParams) {
        return this.collection.countDocuments(filter ?? {})
    }
}
