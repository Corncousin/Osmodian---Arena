import { describe, expect, it } from "vitest";

import { createInitialLeaderStats, createLeaderStats } from "./leader-stats.js";

describe("leader stats", () => {
  it("creates the initial leader stats", () => {
    const stats = createInitialLeaderStats();

    expect(stats).toEqual({
      hp: 2,
      str: 0,
      dex: 0,
      lck: 0,
      unspentStatPoints: 3,
    });
  });

  it("creates custom leader stats", () => {
    const stats = createLeaderStats({
      hp: 4,
      str: 2,
      dex: 1,
      lck: 3,
      unspentStatPoints: 0,
    });

    expect(stats).toEqual({
      hp: 4,
      str: 2,
      dex: 1,
      lck: 3,
      unspentStatPoints: 0,
    });
  });

  it("throws when a stat is negative", () => {
    expect(() =>
      createLeaderStats({
        hp: 2,
        str: -1,
        dex: 0,
        lck: 0,
        unspentStatPoints: 3,
      }),
    ).toThrow("Stat points must be an integer greater than or equal to 0.");
  });

  it("throws when a stat is not an integer", () => {
    expect(() =>
      createLeaderStats({
        hp: 2,
        str: 0,
        dex: 0,
        lck: 0.5,
        unspentStatPoints: 3,
      }),
    ).toThrow("Stat points must be an integer greater than or equal to 0.");
  });
});
