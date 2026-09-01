import type { IEntity } from "./entity.interface";
import type { IDomainEvent } from "./event.interface";

export interface IAggregateRoot extends IEntity {
  raiseEvent(event: IDomainEvent): void;
}
