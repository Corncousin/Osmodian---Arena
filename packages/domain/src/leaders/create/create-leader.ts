import { createLeaderName, type LeaderName } from "../identity/leader-name.js";
import { createPlayerId, type PlayerId } from "../identity/player-id.js";
import {
  createNewLeader,
  type Leader,
  type NewLeader,
} from "../leader.entity.js";
import { createActiveLeaderArchiveState } from "../lifecycle/leader-archive-state.js";
import { createInitialLeaderBracket } from "../progression/leader-bracket.js";
import { createInitialLeaderLevel } from "../progression/leader-level.js";
import { createInitialLeaderXp } from "../progression/leader-xp.js";
import { createInitialLeaderStats } from "../stats/leader-stats.js";
import { createStatPoints } from "../stats/stat-points.js";
import type { CreateLeaderCommand } from "./create-leader.command.js";
import {
  type CreateLeaderResult,
  createLeaderFailureResult,
  createLeaderSuccessResult,
} from "./create-leader.result.js";

const INITIAL_LEADER_GOLD = 200;

export type CreateLeaderDependencies = {
  readonly maxActiveLeadersPerPlayer: number;
  readonly countActiveLeadersForPlayer: (playerId: PlayerId) => Promise<number>;
  readonly isLeaderNameTakenForPlayer: (
    playerId: PlayerId,
    leaderName: LeaderName,
  ) => Promise<boolean>;
  readonly saveLeader: (leader: NewLeader) => Promise<Leader>;
};

export async function createLeader(
  command: CreateLeaderCommand,
  dependencies: CreateLeaderDependencies,
): Promise<CreateLeaderResult> {
  let playerId: PlayerId;

  try {
    playerId = createPlayerId(command.playerId);
  } catch {
    return createLeaderFailureResult("invalid_player_id");
  }

  let leaderName: LeaderName;

  try {
    leaderName = createLeaderName(command.leaderName);
  } catch {
    return createLeaderFailureResult("invalid_leader_name");
  }

  const activeLeaderCount =
    await dependencies.countActiveLeadersForPlayer(playerId);

  if (activeLeaderCount >= dependencies.maxActiveLeadersPerPlayer) {
    return createLeaderFailureResult("leader_limit_reached");
  }

  const isLeaderNameTaken = await dependencies.isLeaderNameTakenForPlayer(
    playerId,
    leaderName,
  );

  if (isLeaderNameTaken) {
    return createLeaderFailureResult("leader_name_taken");
  }

  const newLeader = createNewLeader({
    playerId,
    name: leaderName,
    stats: createInitialLeaderStats(),
    bracket: createInitialLeaderBracket(),
    level: createInitialLeaderLevel(),
    xp: createInitialLeaderXp(),
    gold: createStatPoints(INITIAL_LEADER_GOLD),
    archiveState: createActiveLeaderArchiveState(),
  });

  const persistedLeader = await dependencies.saveLeader(newLeader);

  return createLeaderSuccessResult(persistedLeader);
}
