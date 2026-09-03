import type { Exception } from "@utils/exception";
import { ResultErrorAccessException, ResultException } from "../exceptions";

export class Result<TValue, TException extends Exception = Exception> {
  private readonly _value: TValue | null;
  private readonly _error: TException | null;

  private constructor(value: TValue | null, error: TException | null) {
    if (value !== null && error !== null) {
      throw new ResultException("Result cannot have both value and error");
    }

    this._value = value;
    this._error = error;
  }

  public static ok<TValue>(value: TValue): Result<TValue> {
    return new Result<TValue, never>(value, null);
  }

  public static fail<TException extends Exception>(
    error: TException,
  ): Result<never, TException> {
    return new Result<never, TException>(null, error);
  }

  public unwrap(): TValue {
    if (this._value === null) {
      throw this._error;
    }
    return this._value;
  }

  public isOk(): this is Result<TValue, never> {
    return this._value !== null;
  }

  public isFail(): this is Result<never, TException> {
    return this._error !== null;
  }

  public get error(): TException {
    if (this._error === null) {
      throw new ResultErrorAccessException();
    }
    return this._error;
  }
}
