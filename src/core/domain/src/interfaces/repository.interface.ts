import type { IEntity } from "./entity.interface";

export interface IRepository<TEntity extends IEntity> {
  getById(id: TEntity["id"]): Promise<TEntity | null>;
  save(entity: TEntity): Promise<TEntity>;
}
