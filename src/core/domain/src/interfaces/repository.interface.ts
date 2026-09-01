import type { IEntity } from "./entity.interface";
import type { DomainResult } from "../types";

export interface IRepository<TEntity extends IEntity> {
  getById(id: TEntity["id"]): DomainResult<TEntity | null>;
  save(entity: TEntity): DomainResult<TEntity>;
}
