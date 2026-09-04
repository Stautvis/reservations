import type { IPolicy } from "../interfaces";

export abstract class Policy implements IPolicy {
  public static validate(policies: IPolicy[], actor: unknown): boolean {
    return policies.every((policy) => policy.check(actor));
  }

  public abstract check(actor: unknown): boolean;
}
