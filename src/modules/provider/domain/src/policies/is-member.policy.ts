import { DomainException, type IActor, Policy } from "@domain/core";
import type { Exception } from "@utils/exception";
import { Result } from "@utils/result";
import type { Provider } from "../entities";

export class IsMemberPolicy extends Policy<DomainException> {
  public constructor(private readonly _provider: Provider) {
    super();
  }

  public check(actor: IActor): Result<void, Exception> {
    if (this._provider.isMember(actor.id)) {
      return Result.ok(undefined);
    }

    return Result.fail(
      new DomainException(
        `Actor with id ${actor.id} is not a member of provider with id ${this._provider.id}`,
      ),
    );
  }
}
