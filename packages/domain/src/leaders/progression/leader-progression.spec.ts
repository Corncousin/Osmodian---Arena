import { describe, expect, it } from "vitest";

import {
  createInitialLeaderBracket,
  createLeaderBracket,
} from "./leader-bracket.js";
import { createInitialLeaderLevel, createLeaderLevel } from "./leader-level.js";
import { createInitialLeaderXp, createLeaderXp } from "./leader-xp.js";

describe("leader progression value objects", () => {
  it("creates the initial bracket", () => {
    expect(createInitialLeaderBracket()).toBe(1);
  });

  it("creates the initial level", () => {
    expect(createInitialLeaderLevel()).toBe(0);
  });

  it("creates the initial xp", () => {
    expect(createInitialLeaderXp()).toBe(0);
  });

  it("throws when bracket is below 1", () => {
    expect(() => createLeaderBracket(0)).toThrow(
      "Leader bracket must be an integer greater than or equal to 1.",
    );
  });

  it("throws when level is below 0", () => {
    expect(() => createLeaderLevel(-1)).toThrow(
      "Leader level must be an integer greater than or equal to 0.",
    );
  });

  it("throws when xp is below 0", () => {
    expect(() => createLeaderXp(-1)).toThrow(
      "Leader xp must be an integer greater than or equal to 0.",
    );
  });
});
