import type { IEntity } from "./entity.interface";

export interface IMapper<TSource, TDestination> {}

export interface IDomainMapper<TSource extends IEntity, TDestination> extends IMapper<TSource, TDestination> {
  toDomain(source: TSource): TDestination;
  fromDomain(destination: TDestination): TSource;
}
