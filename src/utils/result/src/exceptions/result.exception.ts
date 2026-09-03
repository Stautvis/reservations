import { Exception } from "@utils/exception";

export class ResultException extends Exception {}

export class ResultErrorAccessException extends ResultException {
  public constructor() {
    super("Cannot access error from a successful Result");
  }
}

export class ResultValueAccessException extends ResultException {
  public constructor() {
    super("Cannot access value from a failed Result");
  }
}
