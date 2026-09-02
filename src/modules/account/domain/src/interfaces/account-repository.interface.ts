import type { DomainResult, IRepository } from "@domain/core";
import type { IAccount } from "./account.interface";

export interface IAccountRepository extends IRepository<IAccount> {
  getByEmail(email: string): DomainResult<IAccount>;
}
