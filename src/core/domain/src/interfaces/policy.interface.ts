import type { Exception } from "@utils/exception";
import type { Result } from "@utils/result";
import type { IActor } from "./actor.interface";

export interface IPolicy<TException extends Exception> {
  check(actor: IActor): Result<void, TException>;
}
