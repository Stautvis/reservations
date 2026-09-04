import type { Exception } from "@utils/exception";
import type { Result } from "@utils/result";
import type { IActor, IPolicy } from "../interfaces";

export abstract class Policy<TException extends Exception>
  implements IPolicy<TException>
{
  public static validate<TException extends Exception>(
    policies: IPolicy<TException>[],
    actor: IActor,
  ): boolean {
    return policies.every((policy) => policy.check(actor));
  }

  public abstract check(actor: IActor): Result<void, TException>;
}
