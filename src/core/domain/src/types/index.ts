import type { Result } from "@utils/result";
import type { DomainException } from "../classes";
import type { IEntity } from "../interfaces";

export type DomainResult<T extends IEntity> = Promise<
  Result<T, DomainException>
>;
