import { describe, expect, it } from "vitest";

import { createLeaderId } from "./leader-id.js";
import { createPlayerId } from "./player-id.js";

describe("leader identity value objects", () => {
  it("creates a leader id from a non-empty string", () => {
    const leaderId = createLeaderId("leader-1");

    expect(leaderId).toBe("leader-1");
  });

  it("creates a player id from a non-empty string", () => {
    const playerId = createPlayerId("player-1");

    expect(playerId).toBe("player-1");
  });

  it("throws when leader id is empty", () => {
    expect(() => createLeaderId("   ")).toThrow(
      "Leader id must be a non-empty string.",
    );
  });

  it("throws when player id is empty", () => {
    expect(() => createPlayerId("   ")).toThrow(
      "Player id must be a non-empty string.",
    );
  });
});
