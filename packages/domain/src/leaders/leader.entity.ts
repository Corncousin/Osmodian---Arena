import type { LeaderId } from "./identity/leader-id.js";
import type { LeaderName } from "./identity/leader-name.js";
import type { PlayerId } from "./identity/player-id.js";
import type { TribeId } from "./identity/tribe-id.js";
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

export type NewLeader = {
  readonly playerId: PlayerId;
  readonly tribeId: TribeId;
  readonly name: LeaderName;
  readonly stats: LeaderStats;
  readonly bracket: LeaderBracket;
  readonly level: LeaderLevel;
  readonly xp: LeaderXp;
  readonly gold: StatPoints;
  readonly archiveState: LeaderArchiveState;
};

export type Leader = NewLeader & {
  readonly id: LeaderId;
};

export type CreateNewLeaderInput = {
  readonly playerId: PlayerId;
  readonly tribeId: TribeId;
  readonly name: LeaderName;
  readonly stats: LeaderStats;
  readonly bracket: LeaderBracket;
  readonly level: LeaderLevel;
  readonly xp: LeaderXp;
  readonly gold: StatPoints;
  readonly archiveState: LeaderArchiveState;
};

export function createNewLeader(input: CreateNewLeaderInput): NewLeader {
  return {
    playerId: input.playerId,
    tribeId: input.tribeId,
    name: input.name,
    stats: input.stats,
    bracket: input.bracket,
    level: input.level,
    xp: input.xp,
    gold: input.gold,
    archiveState: input.archiveState,
  };
}

export function createPersistedLeader(
  leaderId: LeaderId,
  newLeader: NewLeader,
): Leader {
  return {
    id: leaderId,
    ...newLeader,
  };
}

export function archiveLeader(leader: Leader, archivedAt: ArchivedAt): Leader {
  return {
    ...leader,
    archiveState: createArchivedLeaderArchiveState(archivedAt),
  };
}
