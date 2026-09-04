import type { IEntity } from "@domain/core";

export interface IMembership extends IEntity {
  readonly accountId: string;
  readonly providerId: string;
}
