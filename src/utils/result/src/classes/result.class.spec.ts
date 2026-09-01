import { describe, expect, test } from "bun:test";
import { Result } from "./result.class";

describe("Result", function() {
  test.each([[42, "string", true, {key: "value"}]])("should create a successful Result", function(value) {
    const result = Result.ok(value);
    expect(result.isOk()).toBe(true);
    expect(result.isFail()).toBe(false);
    expect(result.unwrap()).toBe(value);
  });

  test("should create a failed Result", function() {
    const error = new Error("Something went wrong");
    const result = Result.fail(error);
    expect(result.isOk()).toBe(false);
    expect(result.isFail()).toBe(true);
    expect(() => result.unwrap()).toThrowError(error);
  });

  test("should throw an error when trying to get error from a successful Result", function() {
    const result = Result.ok(42);
    expect(() => result.error).toThrowError("Cannot get error from a successful Result");
  });
});
