import type { IDomainMapper } from "@domain/core";
import type { IAccount } from "./account.interface";

export interface IAccountMapper<TDestination> extends IDomainMapper<IAccount, TDestination> {}
