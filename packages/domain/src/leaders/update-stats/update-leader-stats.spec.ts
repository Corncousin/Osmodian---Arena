import { describe, expect, it, vi } from "vitest";

import { createLeaderId } from "../identity/leader-id.js";
import { createLeaderName } from "../identity/leader-name.js";
import { createPlayerId } from "../identity/player-id.js";
import { createTribeId } from "../identity/tribe-id.js";
import {
  createNewLeader,
  createPersistedLeader,
  type Leader,
} from "../leader.entity.js";
import { createArchivedAt } from "../lifecycle/archived-at.js";
import {
  createActiveLeaderArchiveState,
  createArchivedLeaderArchiveState,
} from "../lifecycle/leader-archive-state.js";
import { createInitialLeaderBracket } from "../progression/leader-bracket.js";
import { createInitialLeaderLevel } from "../progression/leader-level.js";
import { createInitialLeaderXp } from "../progression/leader-xp.js";
import { createLeaderStats } from "../stats/leader-stats.js";
import { createStatPoints } from "../stats/stat-points.js";
import type { UpdateLeaderStatsCommand } from "./update-leader-stats.command.js";
import {
  type UpdateLeaderStatsDependencies,
  updateLeaderStats,
} from "./update-leader-stats.js";

describe("update leader stats", () => {
  function createLeader(): Leader {
    const newLeader = createNewLeader({
      playerId: createPlayerId("player-1"),
      tribeId: createTribeId("tribe-1"),
      name: createLeaderName("Grok Hammer"),
      stats: createLeaderStats({
        hp: 2,
        str: 0,
        dex: 0,
        lck: 0,
        crt: 0,
        unspentStatPoints: 3,
      }),
      bracket: createInitialLeaderBracket(),
      level: createInitialLeaderLevel(),
      xp: createInitialLeaderXp(),
      gold: createStatPoints(200),
      archiveState: createActiveLeaderArchiveState(),
    });

    return createPersistedLeader(createLeaderId("leader-1"), newLeader);
  }

  function createDependencies(
    leader: Leader | null,
    overrides: Partial<UpdateLeaderStatsDependencies> = {},
  ): UpdateLeaderStatsDependencies {
    return {
      getLeaderById: vi.fn(async () => leader),
      saveLeader: vi.fn(async (savedLeader: Leader) => savedLeader),
      ...overrides,
    };
  }

  function createCommand(
    overrides: Partial<UpdateLeaderStatsCommand> = {},
  ): UpdateLeaderStatsCommand {
    return {
      playerId: "player-1",
      leaderId: "leader-1",
      finalStats: {
        hp: 2,
        str: 1,
        dex: 1,
        lck: 0,
        crt: 0,
        unspentStatPoints: 1,
      },
      ...overrides,
    };
  }

  it("updates leader stats for a valid normal allocation", async () => {
    const dependencies = createDependencies(createLeader());

    const result = await updateLeaderStats(createCommand(), dependencies);

    expect(result.ok).toBe(true);

    if (!result.ok) {
      return;
    }

    expect(result.leader.stats).toEqual({
      hp: 2,
      str: 1,
      dex: 1,
      lck: 0,
      crt: 0,
      unspentStatPoints: 1,
    });
  });

  it("returns invalid_player_id when player id is invalid", async () => {
    const dependencies = createDependencies(createLeader());

    const result = await updateLeaderStats(
      createCommand({ playerId: "   " }),
      dependencies,
    );

    expect(result).toEqual({
      ok: false,
      reason: "invalid_player_id",
    });
    expect(dependencies.getLeaderById).not.toHaveBeenCalled();
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });

  it("returns invalid_leader_id when leader id is invalid", async () => {
    const dependencies = createDependencies(createLeader());

    const result = await updateLeaderStats(
      createCommand({ leaderId: "   " }),
      dependencies,
    );

    expect(result).toEqual({
      ok: false,
      reason: "invalid_leader_id",
    });
    expect(dependencies.getLeaderById).not.toHaveBeenCalled();
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });

  it("returns invalid_final_stats when final stats are invalid", async () => {
    const dependencies = createDependencies(createLeader());

    const result = await updateLeaderStats(
      createCommand({
        finalStats: {
          hp: 2,
          str: -1,
          dex: 0,
          lck: 0,
          crt: 0,
          unspentStatPoints: 3,
        },
      }),
      dependencies,
    );

    expect(result).toEqual({
      ok: false,
      reason: "invalid_final_stats",
    });
    expect(dependencies.getLeaderById).not.toHaveBeenCalled();
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });

  it("returns leader_not_found when the leader does not exist", async () => {
    const dependencies = createDependencies(null);

    const result = await updateLeaderStats(createCommand(), dependencies);

    expect(result).toEqual({
      ok: false,
      reason: "leader_not_found",
    });
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });

  it("returns leader_not_owned_by_player when the leader belongs to another player", async () => {
    const leader = createPersistedLeader(createLeaderId("leader-1"), {
      ...createLeader(),
      playerId: createPlayerId("other-player"),
    });

    const dependencies = createDependencies(leader);

    const result = await updateLeaderStats(createCommand(), dependencies);

    expect(result).toEqual({
      ok: false,
      reason: "leader_not_owned_by_player",
    });
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });

  it("returns leader_archived when the leader is archived", async () => {
    const leader = createPersistedLeader(createLeaderId("leader-1"), {
      ...createLeader(),
      archiveState: createArchivedLeaderArchiveState(
        createArchivedAt(new Date("2026-01-01T00:00:00.000Z")),
      ),
    });

    const dependencies = createDependencies(leader);

    const result = await updateLeaderStats(createCommand(), dependencies);

    expect(result).toEqual({
      ok: false,
      reason: "leader_archived",
    });
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });

  it("returns stat_decrease_not_allowed when a saved stat decreases", async () => {
    const dependencies = createDependencies(createLeader());

    const result = await updateLeaderStats(
      createCommand({
        finalStats: {
          hp: 1,
          str: 0,
          dex: 0,
          lck: 0,
          crt: 0,
          unspentStatPoints: 4,
        },
      }),
      dependencies,
    );

    expect(result).toEqual({
      ok: false,
      reason: "stat_decrease_not_allowed",
    });
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });

  it("returns stat_point_mismatch when spent points do not match the increase", async () => {
    const dependencies = createDependencies(createLeader());

    const result = await updateLeaderStats(
      createCommand({
        finalStats: {
          hp: 2,
          str: 2,
          dex: 2,
          lck: 0,
          crt: 0,
          unspentStatPoints: 2,
        },
      }),
      dependencies,
    );

    expect(result).toEqual({
      ok: false,
      reason: "stat_point_mismatch",
    });
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });
});
