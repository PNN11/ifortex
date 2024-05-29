import { PaginateResult } from './paginate.entity'

export class PaginateMapper {
  static mapToController<TEntity>(paginate: PaginateResult<TEntity>, mapper: (arg: TEntity) => any) {
    return {
      limit: paginate.limit,
      offset: paginate.offset,
      totalDocs: paginate.totalDocs,
      totalPages: paginate.totalPages,
      hasNextPage: paginate.hasNextPage,
      hasPrevPage: paginate.hasPrevPage,
      nextPage: paginate.nextPage,
      prevPage: paginate.prevPage,
      page: paginate.page,
      docs: paginate?.entity?.map(mapper),
    }
  }
}
