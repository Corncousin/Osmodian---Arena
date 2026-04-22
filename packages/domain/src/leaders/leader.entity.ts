import type { LeaderId } from "./identity/leader-id.js";
import type { LeaderName } from "./identity/leader-name.js";
import type { PlayerId } from "./identity/player-id.js";
import type { ArchivedAt } from "./lifecycle/archived-at.js";
import {
  createArchivedLeaderArchiveState,
  type LeaderArchiveState,
} from "./lifecycle/leader-archive-state.js";
import type { LeaderBracket } from "./progression/leader-bracket.js";
import type { LeaderLevel } from "./progression/leader-level.js";
import type { LeaderXp } from "./progression/leader-xp.js";
import type { LeaderStats } from "./stats/leader-stats.js";
import type { StatPoints } from "./stats/stat-points.js";

export type Leader = {
  readonly id: LeaderId;
  readonly playerId: PlayerId;
  readonly name: LeaderName;
  readonly stats: LeaderStats;
  readonly bracket: LeaderBracket;
  readonly level: LeaderLevel;
  readonly xp: LeaderXp;
  readonly gold: StatPoints;
  readonly archiveState: LeaderArchiveState;
};

export type CreateLeaderEntityInput = {
  readonly id: LeaderId;
  readonly playerId: PlayerId;
  readonly name: LeaderName;
  readonly stats: LeaderStats;
  readonly bracket: LeaderBracket;
  readonly level: LeaderLevel;
  readonly xp: LeaderXp;
  readonly gold: StatPoints;
  readonly archiveState: LeaderArchiveState;
};

export function createLeaderEntity(input: CreateLeaderEntityInput): Leader {
  return {
    id: input.id,
    playerId: input.playerId,
    name: input.name,
    stats: input.stats,
    bracket: input.bracket,
    level: input.level,
    xp: input.xp,
    gold: input.gold,
    archiveState: input.archiveState,
  };
}

export function archiveLeader(leader: Leader, archivedAt: ArchivedAt): Leader {
  return {
    ...leader,
    archiveState: createArchivedLeaderArchiveState(archivedAt),
  };
}
