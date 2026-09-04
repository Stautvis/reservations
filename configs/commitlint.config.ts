import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

export enum CommitType {
  /** Changes to the build system or external dependencies. */
  Build = "build",
  /** Maintenance work that does not change application behavior. */
  Chore = "chore",
  /** Documentation-only changes. */
  Docs = "docs",
  /** A new user-facing capability. */
  Feat = "feat",
  /** A bug fix. */
  Fix = "fix",
  /** Reverts a previous commit. */
  Revert = "revert",
  /** Formatting or styling changes that do not affect meaning. */
  Style = "style",
  /** Adding or correcting tests. */
  Test = "test",
}

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",
  rules: {
    "header-max-length": [RuleConfigSeverity.Error, "always", 72],
    "references-empty": [
      RuleConfigSeverity.Error,
      process.env.CI ? "never" : "always",
    ],
    "subject-case": [RuleConfigSeverity.Error, "always", "sentence-case"],
    "subject-min-length": [RuleConfigSeverity.Error, "always", 8],
    "type-case": [RuleConfigSeverity.Error, "always", "lower-case"],
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      Object.values(CommitType),
    ],
  },
};

export default config;
