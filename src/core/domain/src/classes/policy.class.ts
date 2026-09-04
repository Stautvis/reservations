import type { IActor, IPolicy } from "../interfaces";

export abstract class Policy implements IPolicy {
  public static validate(policies: IPolicy[], actor: IActor): boolean {
    return policies.every((policy) => policy.check(actor));
  }

  public abstract check(actor: IActor): boolean;
}
