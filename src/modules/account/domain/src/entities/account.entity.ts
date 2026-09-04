import { AggregateRoot, type IActor } from "@domain/core";
import { AccountCreatedEvent } from "../events";
import type { IAccount, IAccountCreate } from "../interfaces";

export class Account extends AggregateRoot<IAccount> implements IActor {
  public static create(properties: IAccountCreate): Account {
    const account = new Account({
      id: crypto.randomUUID(),
      name: properties.name,
      surname: properties.surname,
      email: properties.email,
      password: properties.password,
    });

    account.raiseEvent(new AccountCreatedEvent());

    return account;
  }
}
