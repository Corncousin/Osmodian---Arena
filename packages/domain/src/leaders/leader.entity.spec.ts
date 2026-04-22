import { describe, expect, it } from "vitest";
import { createLeaderId } from "./identity/leader-id.js";
import { createLeaderName } from "./identity/leader-name.js";
import { createPlayerId } from "./identity/player-id.js";
import { archiveLeader, createLeaderEntity } from "./leader.entity.js";
import { createArchivedAt } from "./lifecycle/archived-at.js";
import {
  createActiveLeaderArchiveState,
  isLeaderArchived,
} from "./lifecycle/leader-archive-state.js";
import { createInitialLeaderBracket } from "./progression/leader-bracket.js";
import { createInitialLeaderLevel } from "./progression/leader-level.js";
import { createInitialLeaderXp } from "./progression/leader-xp.js";
import { createInitialLeaderStats } from "./stats/leader-stats.js";

describe("leader entity", () => {
  it("creates a leader entity", () => {
    const leader = createLeaderEntity({
      id: createLeaderId("leader-1"),
      playerId: createPlayerId("player-1"),
      name: createLeaderName("Grok Hammer"),
      stats: createInitialLeaderStats(),
      bracket: createInitialLeaderBracket(),
      level: createInitialLeaderLevel(),
      xp: createInitialLeaderXp(),
      archiveState: createActiveLeaderArchiveState(),
    });

    expect(leader.id).toBe("leader-1");
    expect(leader.playerId).toBe("player-1");
    expect(leader.name).toBe("Grok Hammer");
    expect(leader.bracket).toBe(1);
    expect(leader.level).toBe(0);
    expect(leader.xp).toBe(0);
    expect(isLeaderArchived(leader.archiveState)).toBe(false);
  });

  it("archives a leader entity", () => {
    const leader = createLeaderEntity({
      id: createLeaderId("leader-1"),
      playerId: createPlayerId("player-1"),
      name: createLeaderName("Grok Hammer"),
      stats: createInitialLeaderStats(),
      bracket: createInitialLeaderBracket(),
      level: createInitialLeaderLevel(),
      xp: createInitialLeaderXp(),
      archiveState: createActiveLeaderArchiveState(),
    });

    const archivedLeader = archiveLeader(
      leader,
      createArchivedAt(new Date("2026-01-01T00:00:00.000Z")),
    );

    expect(isLeaderArchived(leader.archiveState)).toBe(false);
    expect(isLeaderArchived(archivedLeader.archiveState)).toBe(true);
    expect(archivedLeader.archiveState.archivedAt).toEqual(
      new Date("2026-01-01T00:00:00.000Z"),
    );
  });
});
