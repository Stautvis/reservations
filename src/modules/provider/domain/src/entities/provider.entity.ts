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
    if (new IsMemberPolicy(this).check(accountId)) {
      throw new DomainException("Account is already a member of this provider");
    }
  }

  public isMember(accountId: string): boolean {
    return this.properties.memberships.some(
      (membership) => membership.accountId === accountId,
    );
  }
}
