export interface IPolicy {
  check(actor: unknown): boolean;
}
