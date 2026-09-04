import type { IActor } from "./actor.interface";

export interface IPolicy {
  check(actor: IActor): boolean;
}
