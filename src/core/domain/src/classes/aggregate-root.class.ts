import type { IAggregateRoot, IEntity } from "../interfaces";
import { Entity } from "./entity.class";

export abstract class AggregateRoot<TEntity extends IAggregateRoot> extends Entity<TEntity> {
}
