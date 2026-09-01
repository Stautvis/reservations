import type { IAggregateRoot, IDomainEvent, IEntity } from "../interfaces";
import { Entity } from "./entity.class";

export abstract class AggregateRoot<TEntity extends IEntity> extends Entity<TEntity> implements IAggregateRoot {
  public raiseEvent(event: IDomainEvent): void {
    throw new Error("Method not implemented.");
  }
}
