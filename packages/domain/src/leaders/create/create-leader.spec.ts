import { describe, expect, it, vi } from "vitest";

import { createLeaderId } from "../identity/leader-id.js";
import { createPersistedLeader, type NewLeader } from "../leader.entity.js";
import type { CreateLeaderCommand } from "./create-leader.command.js";
import {
  type CreateLeaderDependencies,
  createLeader,
} from "./create-leader.js";

describe("create leader", () => {
  function createDependencies(
    overrides: Partial<CreateLeaderDependencies> = {},
  ): CreateLeaderDependencies {
    return {
      maxActiveLeadersPerPlayer: 5,
      countActiveLeadersForPlayer: vi.fn(async () => 0),
      isLeaderNameTakenForPlayer: vi.fn(async () => false),
      saveLeader: vi.fn(async (leader: NewLeader) =>
        createPersistedLeader(createLeaderId("leader-1"), leader),
      ),
      ...overrides,
    };
  }

  function createCommand(
    overrides: Partial<CreateLeaderCommand> = {},
  ): CreateLeaderCommand {
    return {
      playerId: "player-1",
      leaderName: "Grok Hammer",
      ...overrides,
    };
  }

  it("creates and saves a leader with the default initial state", async () => {
    const dependencies = createDependencies();

    const result = await createLeader(createCommand(), dependencies);

    expect(result.ok).toBe(true);

    if (!result.ok) {
      return;
    }

    expect(result.leader.id).toBe("leader-1");
    expect(result.leader.playerId).toBe("player-1");
    expect(result.leader.name).toBe("Grok Hammer");
    expect(result.leader.bracket).toBe(1);
    expect(result.leader.level).toBe(0);
    expect(result.leader.xp).toBe(0);
    expect(result.leader.gold).toBe(200);
    expect(result.leader.stats).toEqual({
      hp: 2,
      str: 0,
      dex: 0,
      lck: 0,
      crt: 0,
      unspentStatPoints: 3,
    });
  });

  it("returns invalid_player_id when player id is invalid", async () => {
    const dependencies = createDependencies();

    const result = await createLeader(
      createCommand({ playerId: "   " }),
      dependencies,
    );

    expect(result).toEqual({
      ok: false,
      reason: "invalid_player_id",
    });
    expect(dependencies.countActiveLeadersForPlayer).not.toHaveBeenCalled();
    expect(dependencies.isLeaderNameTakenForPlayer).not.toHaveBeenCalled();
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });

  it("returns invalid_leader_name when leader name is invalid", async () => {
    const dependencies = createDependencies();

    const result = await createLeader(
      createCommand({ leaderName: "!!" }),
      dependencies,
    );

    expect(result).toEqual({
      ok: false,
      reason: "invalid_leader_name",
    });
    expect(dependencies.countActiveLeadersForPlayer).not.toHaveBeenCalled();
    expect(dependencies.isLeaderNameTakenForPlayer).not.toHaveBeenCalled();
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });

  it("returns leader_limit_reached when the active leader cap is reached", async () => {
    const dependencies = createDependencies({
      countActiveLeadersForPlayer: vi.fn(async () => 5),
    });

    const result = await createLeader(createCommand(), dependencies);

    expect(result).toEqual({
      ok: false,
      reason: "leader_limit_reached",
    });
    expect(dependencies.isLeaderNameTakenForPlayer).not.toHaveBeenCalled();
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });

  it("returns leader_name_taken when the player already has that leader name", async () => {
    const dependencies = createDependencies({
      isLeaderNameTakenForPlayer: vi.fn(async () => true),
    });

    const result = await createLeader(createCommand(), dependencies);

    expect(result).toEqual({
      ok: false,
      reason: "leader_name_taken",
    });
    expect(dependencies.saveLeader).not.toHaveBeenCalled();
  });
});
