import type { DomainResult } from "../types";
import type { IEntity } from "./entity.interface";

export interface IRepository<TEntity extends IEntity> {
  getById(id: TEntity["id"]): DomainResult<TEntity>;
  save(entity: TEntity): DomainResult<TEntity>;
}
