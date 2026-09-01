import type { IEntity } from "../interfaces";

export abstract class Entity<TEntity extends IEntity> implements IEntity {

  protected constructor(protected readonly properties: TEntity) {}

  public get id(): TEntity["id"] {
    return this.properties.id;
  }
}
