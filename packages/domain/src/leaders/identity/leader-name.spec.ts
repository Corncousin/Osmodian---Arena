import { describe, expect, it } from "vitest";

import { createLeaderName, isValidLeaderName } from "./leader-name.js";

describe("leader name", () => {
  it("creates a valid leader name", () => {
    const leaderName = createLeaderName("Grok Hammer");

    expect(leaderName).toBe("Grok Hammer");
  });

  it("trims surrounding whitespace before validation", () => {
    const leaderName = createLeaderName("  Grok Hammer  ");

    expect(leaderName).toBe("Grok Hammer");
  });

  it("accepts allowed special characters", () => {
    expect(isValidLeaderName("Odin-Prime")).toBe(true);
    expect(isValidLeaderName("T'kar")).toBe(true);
    expect(isValidLeaderName("Wolf_1")).toBe(true);
  });

  it("rejects names that are too short", () => {
    expect(() => createLeaderName("ab")).toThrow(
      "Leader name must be 3-24 characters and use only letters, numbers, spaces, apostrophes, hyphens, or underscores.",
    );
  });

  it("rejects names that are too long", () => {
    expect(() => createLeaderName("abcdefghijklmnopqrstuvwxyz")).toThrow(
      "Leader name must be 3-24 characters and use only letters, numbers, spaces, apostrophes, hyphens, or underscores.",
    );
  });

  it("rejects names with invalid characters", () => {
    expect(() => createLeaderName("Grok!")).toThrow(
      "Leader name must be 3-24 characters and use only letters, numbers, spaces, apostrophes, hyphens, or underscores.",
    );
  });
});
