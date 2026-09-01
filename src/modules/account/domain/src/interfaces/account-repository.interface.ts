import type { IRepository } from "@domain/core";
import type { IAccount } from "./account.interface";

export interface IAccountRepository extends IRepository<IAccount> {}
