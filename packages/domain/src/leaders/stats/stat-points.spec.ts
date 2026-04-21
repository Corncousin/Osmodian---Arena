import { describe, expect, it } from "vitest";

import {
  createInitialForcedHpStatPoints,
  createInitialFreeStartingStatPoints,
  createInitialTotalStartingStatPoints,
  createStatPoints,
} from "./stat-points.js";

describe("stat points", () => {
  it("creates valid stat points", () => {
    expect(createStatPoints(7)).toBe(7);
  });

  it("creates the initial total starting stat points", () => {
    expect(createInitialTotalStartingStatPoints()).toBe(5);
  });

  it("creates the initial forced hp stat points", () => {
    expect(createInitialForcedHpStatPoints()).toBe(2);
  });

  it("creates the initial free starting stat points", () => {
    expect(createInitialFreeStartingStatPoints()).toBe(3);
  });

  it("throws when stat points are negative", () => {
    expect(() => createStatPoints(-1)).toThrow(
      "Stat points must be an integer greater than or equal to 0.",
    );
  });

  it("throws when stat points are not an integer", () => {
    expect(() => createStatPoints(1.5)).toThrow(
      "Stat points must be an integer greater than or equal to 0.",
    );
  });
});
