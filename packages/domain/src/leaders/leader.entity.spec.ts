import { describe, expect, it } from "vitest";

import { createLeaderId } from "./identity/leader-id.js";
import { createLeaderName } from "./identity/leader-name.js";
import { createPlayerId } from "./identity/player-id.js";
import {
  archiveLeader,
  createNewLeader,
  createPersistedLeader,
} from "./leader.entity.js";
import { createArchivedAt } from "./lifecycle/archived-at.js";
import {
  createActiveLeaderArchiveState,
  isLeaderArchived,
} from "./lifecycle/leader-archive-state.js";
import { createInitialLeaderBracket } from "./progression/leader-bracket.js";
import { createInitialLeaderLevel } from "./progression/leader-level.js";
import { createInitialLeaderXp } from "./progression/leader-xp.js";
import { createInitialLeaderStats } from "./stats/leader-stats.js";
import { createStatPoints } from "./stats/stat-points.js";

describe("leader entity", () => {
  it("creates a new leader without an id", () => {
    const newLeader = createNewLeader({
      playerId: createPlayerId("player-1"),
      name: createLeaderName("Grok Hammer"),
      stats: createInitialLeaderStats(),
      bracket: createInitialLeaderBracket(),
      level: createInitialLeaderLevel(),
      xp: createInitialLeaderXp(),
      gold: createStatPoints(200),
      archiveState: createActiveLeaderArchiveState(),
    });

    expect(newLeader.playerId).toBe("player-1");
    expect(newLeader.name).toBe("Grok Hammer");
    expect(newLeader.bracket).toBe(1);
    expect(newLeader.level).toBe(0);
    expect(newLeader.xp).toBe(0);
    expect(newLeader.gold).toBe(200);
    expect(isLeaderArchived(newLeader.archiveState)).toBe(false);
  });

  it("creates a persisted leader from a new leader and leader id", () => {
    const newLeader = createNewLeader({
      playerId: createPlayerId("player-1"),
      name: createLeaderName("Grok Hammer"),
      stats: createInitialLeaderStats(),
      bracket: createInitialLeaderBracket(),
      level: createInitialLeaderLevel(),
      xp: createInitialLeaderXp(),
      gold: createStatPoints(200),
      archiveState: createActiveLeaderArchiveState(),
    });

    const leader = createPersistedLeader(createLeaderId("leader-1"), newLeader);

    expect(leader.id).toBe("leader-1");
    expect(leader.playerId).toBe("player-1");
    expect(leader.name).toBe("Grok Hammer");
    expect(leader.gold).toBe(200);
  });

  it("archives a persisted leader", () => {
    const newLeader = createNewLeader({
      playerId: createPlayerId("player-1"),
      name: createLeaderName("Grok Hammer"),
      stats: createInitialLeaderStats(),
      bracket: createInitialLeaderBracket(),
      level: createInitialLeaderLevel(),
      xp: createInitialLeaderXp(),
      gold: createStatPoints(200),
      archiveState: createActiveLeaderArchiveState(),
    });

    const leader = createPersistedLeader(createLeaderId("leader-1"), newLeader);

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
