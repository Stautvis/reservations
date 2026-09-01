import type { Exception } from "@utils/exception";
import { ResultErrorAccessException, ResultException } from "../exceptions";

export class Result<T, E extends Exception = Exception> {
  private readonly _value: T | null;
  private readonly _error: E | null;

  private constructor(value: T | null, error: E | null) {
    if (value !== null && error !== null) {
      throw new ResultException("Result cannot have both value and error");
    }

    this._value = value;
    this._error = error;
  }

  public static ok<T>(value: T): Result<T> {
    return new Result<T, never>(value, null);
  }

  public static fail<E extends Exception>(error: E): Result<never, E> {
    return new Result<never, E>(null, error);
  }

  public unwrap(): T {
    if (this._value === null) {
      throw this._error;
    }
    return this._value;
  }

  public isOk(): this is Result<T, never> {
    return this._value !== null;
  }

  public isFail(): this is Result<never, E> {
    return this._error !== null;
  }

  public get error(): E {
    if (this._error === null) {
      throw new ResultErrorAccessException();
    }
    return this._error;
  }
}
