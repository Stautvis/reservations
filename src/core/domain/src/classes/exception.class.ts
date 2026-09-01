import type { IException } from "../interfaces";

export abstract class Exception implements IException {
  public name = this.constructor.name;
  public metadata?: Record<string, unknown>;

  public constructor(public readonly message: string, metadata?: Record<string, unknown>) {
    this.metadata = metadata;
  }
}

export class SystemException extends Exception {}

export class DomainException extends SystemException {}
