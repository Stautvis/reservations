import type { IEntity } from "@domain/core";
import type { IMembership } from "./membership.interface";

export interface IProvider extends IEntity {
  title: string;
  memberships: IMembership[];
}

export interface IProviderCreate extends Pick<IProvider, "title"> {}
