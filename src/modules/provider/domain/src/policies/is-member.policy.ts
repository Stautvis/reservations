import { Policy } from "@domain/core";
import type { Provider } from "../entities";

export class IsMemberPolicy extends Policy {
  public constructor(private readonly _provider: Provider) {
    super();
  }

  public check(actor: unknown): boolean {
    return this._provider.isMember(actor as string);
  }
}
