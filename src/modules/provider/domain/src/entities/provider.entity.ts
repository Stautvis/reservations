import { AggregateRoot, DomainException } from "@domain/core";
import type { IProvider, IProviderCreate } from "../interfaces";
import { IsMemberPolicy } from "../policies";

export class Provider extends AggregateRoot<IProvider> {
  public static create(properties: IProviderCreate): Provider {
    const provider = new Provider({
      id: crypto.randomUUID(),
      title: properties.title,
      memberships: [],
    });

    return provider;
  }

  public hireEmployee(accountId: string): void {
    new IsMemberPolicy(this).check({ id: accountId }).unwrap();
  }

  public isMember(accountId: string): boolean {
    return this.properties.memberships.some(
      (membership) => membership.accountId === accountId,
    );
  }
}
