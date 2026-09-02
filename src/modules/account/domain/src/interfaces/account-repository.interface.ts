import type { IRepository } from "@domain/core";
import type { Account } from "../entities";

export interface IAccountRepository extends IRepository<Account> {
  getByEmail(email: string): Promise<Account | null>;
}
