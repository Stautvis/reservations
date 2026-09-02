export interface IException extends Error {}

export abstract class Exception implements IException {
  public name = this.constructor.name;

  public constructor(
    public readonly message: string,
    public readonly metadata?: Record<string, unknown>,
  ) {}
}
