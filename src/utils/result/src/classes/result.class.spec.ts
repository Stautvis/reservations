import { describe, expect, test } from "bun:test";
import { ResultErrorAccessException } from "../exceptions";
import { Result } from "./result.class";

describe("Result", () => {
  test.each([[42, "string", true, { key: "value" }]])(
    "should create a successful Result",
    (value) => {
      const result = Result.ok(value);
      expect(result.isOk()).toBe(true);
      expect(result.isFail()).toBe(false);
      expect(result.unwrap()).toBe(value);
    },
  );

  test("should create a failed Result", () => {
    const error = new Error("Something went wrong");
    const result = Result.fail(error);
    expect(result.isOk()).toBe(false);
    expect(result.isFail()).toBe(true);
    expect(() => result.unwrap()).toThrowError(error);
  });

  test("should throw an error when trying to get error from a successful Result", () => {
    const result = Result.ok(42);
    expect(() => result.error).toThrowError(ResultErrorAccessException);
  });
});
