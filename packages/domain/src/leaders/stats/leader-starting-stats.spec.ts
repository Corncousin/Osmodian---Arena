import { describe, expect, it } from "vitest";

import { createInitialLeaderStartingStats } from "./leader-starting-stats.js";

describe("leader starting stats", () => {
  it("creates the initial starting stat allocation", () => {
    const startingStats = createInitialLeaderStartingStats();

    expect(startingStats.hp).toBe(2);
    expect(startingStats.freeStatPoints).toBe(3);
  });
});