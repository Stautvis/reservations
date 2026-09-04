import type { IValueObject } from "../interfaces";

export abstract class ValueObject<TValue> implements IValueObject {
  protected constructor(protected readonly properties: TValue) {}
}
