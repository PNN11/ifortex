export class PaginateEntity {
  constructor(private readonly _limit: number, private readonly _offset: number, private readonly _totalDocs: number) {}

  public get hasNextPage(): boolean {
    return this._offset + this._limit < this._totalDocs
  }

  public get hasPrevPage(): boolean {
    return this._offset - this._limit >= 0
  }

  public get nextPage(): number | null {
    return this.hasNextPage ? this.page + 1 : null
  }

  public get prevPage(): number | null {
    return this.hasPrevPage ? this.page - 1 : null
  }

  public get page(): number {
    return Math.floor(this._offset / this._limit)
  }

  public get totalPages(): number {
    return Math.ceil(this.totalDocs / this._limit)
  }

  public get totalDocs(): number {
    return this._totalDocs
  }

  public get offset(): number {
    return this._offset
  }

  public get limit(): number {
    return this._limit
  }
}

export class PaginateResult<TEntity> extends PaginateEntity {
  constructor(private _entity: TEntity[], private readonly _paginate: PaginateEntity) {
    super(_paginate.limit, _paginate.offset, _paginate.totalDocs)
  }

  public get entity(): TEntity[] {
    return this._entity
  }

  public set entity(value: TEntity[]) {
    this._entity = value
  }

  public get paginate(): PaginateEntity {
    return this._paginate
  }
}
