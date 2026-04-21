import { describe, expect, it } from "vitest";

import { createArchivedAt } from "./archived-at.js";
import {
  createActiveLeaderArchiveState,
  createArchivedLeaderArchiveState,
  isLeaderArchived,
} from "./leader-archive-state.js";

describe("leader archive state", () => {
  it("creates an active archive state", () => {
    const state = createActiveLeaderArchiveState();

    expect(state.archivedAt).toBeNull();
    expect(isLeaderArchived(state)).toBe(false);
  });

  it("creates an archived archive state", () => {
    const archivedAt = createArchivedAt(new Date("2026-01-01T00:00:00.000Z"));
    const state = createArchivedLeaderArchiveState(archivedAt);

    expect(state.archivedAt).toEqual(archivedAt);
    expect(isLeaderArchived(state)).toBe(true);
  });

  it("throws when archived at is invalid", () => {
    expect(() => createArchivedAt(new Date("invalid-date"))).toThrow(
      "Archived at must be a valid date.",
    );
  });
});
