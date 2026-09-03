import type { IPolicy } from "../interfaces";

export abstract class Policy implements IPolicy {
  public static validate(policies: IPolicy[]): boolean {
    return policies.every((policy) => policy.check());
  }

  public check(): boolean {
    throw new Error("Method not implemented.");
  }
}
